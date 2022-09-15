import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputGroup from "../../Components/Login/InputGroup";
import Joi from "joi-browser";
import axios from "axios";
import { motion } from "framer-motion";
import AsyncSubmitButton from "../../Components/AsyncSubmitButton";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import GoogleLoginButton from "../../Components/Login/GoogleLoginButton";

const LoginPage: NextPage = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [backendError, setBackendError] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});
	const router = useRouter();
	const schema = Joi.object({
		email: Joi.string()
			.min(3)
			.max(100)
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.label("Email"),
		password: Joi.string().min(8).max(40).required().label("Password"),
	});
	const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const { error } = schema.validate(
			{ email, password },
			{ abortEarly: false }
		);
		if (error) {
			const { details } = error;
			const errors = {
				email: details.find((item: any) => item.path[0] == "email")
					? details.find((item: any) => item.path[0] == "email")
							.message
					: "",
				password: details.find(
					(item: any) => item.path[0] == "password"
				)
					? details.find((item: any) => item.path[0] == "password")
							.message
					: "",
			};

			setErrors(errors);
		} else {
			setErrors({
				email: "",
				password: "",
			});
			try {
				setLoading(true);
				const payload = { email, password };
				const res = await axios.post(
					`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth`,
					payload
				);
				setBackendError("");
				const user: any = jwt_decode(res.data.token);
				setCookie("user", user, {
					path: "/",
					expires: new Date(Date.now() + 2 * 86400000),
				});
				if (user.verified) router.replace("/dashboard");
				else {
					router.replace("/verification");
				}
			} catch (err: any) {
				try {
					console.log(err);
					if (err.response.data.message)
						setBackendError(err.response.data.message);
				} catch (err: any) {
					console.log(err);
					alert("Something went wrong.");
				}
			} finally {
				setLoading(false);
			}
			// alert("Form submitted")
		}
	};
	useEffect(() => {
		if (cookies.user) router.replace("/dashoard")
			
	}, []);
	return (
		<>
			<div className="w-screen h-screen overflow-hidden poppinsFont hidden lg:grid grid-cols-[47%_53%]">
				<div className="relative h-screen w-full bg-gradient-to-br from-eccblue to-[#073D79]">
					<img
						className="absolute bottom-0 z-10 w-[208.8px] xl:w-[261px]"
						src="/Images/triangle.svg"
					/>
					<img
						className="absolute bottom-0 ml-[100px] w-[300px] xl:w-[374px]"
						src="/Images/triangle2.svg"
					/>
					<img
						className="w-[98px] ml-[50px] pt-[55px]"
						src="./Images/whiteEccLogo.svg"
					/>
					<div className="ml-[50px] mt-[120px] text-white">
						<p className="text-[40px] xl:text-[40px] font-bold">
							Welcome Back!
						</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">
							Login to you your account to file a complaint or
							proceed with others submitted
						</p>
					</div>
				</div>
				<div className="w-full px-[90px] flex flex-col overflow-auto ">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
						className="my-[70px]"
					>
						<p className="text-[36px] xl:text-[40px] text-center">
							Login to your account
						</p>
						<p className="text-center mt-[20px] mb-[38px]">
							Don't have an account?{" "}
							<Link href="/signup">
								<span className="text-eccblue cursor-pointer">
									Create an account
								</span>
							</Link>
						</p>
						<form>
							<div className="flex flex-col gap-y-[35px]">
								<InputGroup
									label="Email Address"
									placeholder="Enter Email"
									value={email}
									setValue={setEmail}
									type="text"
									errorMessage={errors.email}
								/>
								<InputGroup
									label="Password"
									placeholder="Enter Password"
									value={password}
									setValue={setPassword}
									type="password"
									errorMessage={errors.password}
								/>
							</div>
							<p
								onClick={() => router.replace("/forgot-password")}
								className="text-center my-[30px] cursor-pointer"
							>
								Forgot Password?
							</p>
							{backendError && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="text-center my-[30px] text-[#ed4956]"
								>
									{backendError}
								</motion.p>
							)}
							<AsyncSubmitButton
								text="Login"
								loading={loading}
								onSubmit={onSubmit}
							/>
							<section className="flex items-center mt-[50px] px-[14px] mb-[67px]">
								<div className="w-full h-[1px] bg-[#9E9E9E]"></div>
								<p className="mx-[22px] text-[24px]">Or</p>
								<div className="w-full h-[1px] bg-[#9E9E9E]"></div>
							</section>
							<section className="flex justify-center gap-x-[45px]">
								<GoogleLoginButton />
								<div className="cursor-pointer active:scale-[0.95] transition-[200ms] hover:scale-105 rounded-[10px] border-2 py-[17px] pl-[15px] pr-[28px] flex gap-x-[15px] items-center">
									<img src="/Icons/twitterIcon.svg" />
									<span className="text-[18px] opacity-[0.63]">
										Login with Twitter
									</span>
								</div>
							</section>
						</form>
					</motion.div>
				</div>
			</div>
			<div className="lg:hidden bg-eccblue w-full min-h-screen poppinsFont pb-[70px] relative flex flex-col justify-center">
				<img
					className="absolute w-[50px] left-[15px] top-[30px]"
					src="./Images/whiteEccLogo.svg"
				/>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">
							Join the Fight!
						</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">
							Join others to help us eliminate online fraud by
							reporting a scam
						</p>
					</div>
				</div>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">
								Create your account
							</p>
							<p className="text-center mt-[2px] mb-[30px]">
								Already have an account?{" "}
								<Link href="/login">
									<span className="text-eccblue cursor-pointer">
										Login
									</span>
								</Link>
							</p>
							<form>
								<div className="flex flex-col gap-y-[15px]">
									<InputGroup
										label="Email"
										placeholder="Enter Valid Email Address"
										value={email}
										setValue={setEmail}
										type="email"
										errorMessage={errors.email}
									/>
									<InputGroup
										label="Password"
										placeholder="Enter Password"
										value={password}
										setValue={setPassword}
										type="password"
										errorMessage={errors.password}
									/>
								</div>
								<div className="text-eccblue text-right font-medium text-[12px] mt-[11px]">
									Forgot Password?
								</div>

								<button
									onClick={onSubmit}
									className="w-full text-[14px] md:text-[20px] text-white py-[14px] md:py-[18px] xl:py-[22px] rounded-xl bg-eccblue mt-[30px]"
								>
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>
				<img className="absolute bottom-0" src="/Images/polygons.svg" />
			</div>
		</>
	);
};

export default LoginPage;
