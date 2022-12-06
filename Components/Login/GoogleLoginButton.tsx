import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import client from "../../pages/api/Services/AxiosClient";

export const GoogleLoginButton = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const router = useRouter();
	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const userInfo = await axios
				.get("https://www.googleapis.com/oauth2/v3/userinfo", {
					headers: {
						Authorization: `Bearer ${tokenResponse.access_token}`,
					},
				})
				.then((res) => res.data);
			console.log(userInfo);
			try {
				const payload = {
					oauthId: userInfo.sub,
					firstName: userInfo.given_name,
					lastName: userInfo.family_name,
					email: userInfo.email,
					profilePic: userInfo.picture,
				};
				const { data } = await client.post(`/auth/google`, payload);
				if (data) {
					const user: any = jwt_decode(data.token);
					setCookie("user", user, {
						path: "/",
						expires: new Date(Date.now() + 2 * 86400000),
					});
					if (user.verified) {
						router.push("/dashboard");
					} else {
						router.push("/verification");
					}
				}
			} catch (err) {
				console.log(err);
				alert("Something went wrong on the server");
			}
		},
		onError(errorResponse) {
			console.log(errorResponse);
			alert("Could not complete sign in with google.");
		},
	});
	return (
		<div
			onClick={() => {
				try {
					login();
				} catch (err) {
					console.log(err);
					alert("Google sign in is temporarily down.");
				}
			}}
			className="cursor-pointer active:scale-[0.95] transition-[200ms] hover:scale-105 rounded-[10px] border-2 py-[17px] pl-[15px] pr-[28px] flex gap-x-[15px] items-center justify-center"
		>
			<img src="/icons/googleIcon.svg" />
			<span className="text-[18px] opacity-[0.63]">Login with Google</span>
		</div>
	);
};
