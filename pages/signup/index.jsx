import Link from "next/link";
import { useState } from "react";
import { GoogleLoginButton, LoginInputGroup } from "../../Components/";
import Joi from "joi-browser";
import { AnimatePresence, motion } from "framer-motion";
import { AsyncSubmitButton } from "../../Components/";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import client from "../api/Services/AxiosClient"
import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";

const SignupPage = () => {
	const [cookies, setCookie] = useCookies(["user"]);
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [backendError, setBackendError] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const passwordsMatch = (password, confirmPassword) => {
		return password == confirmPassword;
	};
	const [token, setToken] = useState("");
	const schema = Joi.object({
		email: Joi.string()
			.min(3)
			.max(100)
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.label("Email"),
		password: Joi.string().min(8).max(40).required().label("Password"),
		confirmPassword: Joi.string().min(8).max(40).required().label("Confirm Password"),
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		const { error } = schema.validate({ email, password, confirmPassword }, { abortEarly: false });
		if (error) {
			const { details } = error;
			const errors = {
				email: details.find((item) => item.path[0] == "email") ? details.find((item) => item.path[0] == "email").message : "",
				password: details.find((item) => item.path[0] == "password") ? details.find((item) => item.path[0] == "password").message : "",
				confirmPassword: details.find((item) => item.path[0] == "confirmPassword") ? details.find((item) => item.path[0] == "confirmPassword").message : "",
			};
			setErrors(errors);
		} else if (!passwordsMatch(password, confirmPassword) && confirmPassword != "") {
			setErrors({...errors, confirmPassword : "Confirm Password should be the same as Password"})
			console.log(passwordsMatch(password, confirmPassword));	
		}		
		else {
			setErrors({ email: "", password: "", confirmPassword: "" });
			try {
				setLoading(true);
				const payload = { email, password };
				const response = await client.post("/users", payload);
				console.log(token)
				if (response.data.token) {
					const user = jwtDecode(response.data.token)
					setCookie("user", user)
					router.push("/verify_email")
				}
				
			} catch (err) { 
				if (err.response.status == 500) alert("Something went wrong. Please check your internet connection");
				else {
					if (!err.response.data) alert("Something went wrong. Please check your internet connection");
					else setBackendError(err.response.data.message);
				}
			} finally {
				setLoading(false);
			}

		}
	};
	return (
		<>
			<div className="w-screen h-screen poppinsFont lg:grid grid-cols-[47%_53%] overflow-hidden hidden ">
				<div className="relative h-screen w-full bg-gradient-to-br from-eccblue to-[#073D79]">
					<img
						className="absolute bottom-0 z-10 w-[161px] xl:w-[161px]"
						src="/Images/triangle.svg"
					/>
					<img
						className="absolute bottom-0 ml-[100px] w-[200px] xl:w-[200px]"
						src="/Images/triangle2.svg"
					/>
					<img
						className="w-[98px] ml-[50px] pt-[55px]"
						src="./Images/whiteEccLogo.svg"
					/>
					<motion.img
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						className="absolute w-5/6 pt-[55px] bottom-[20px] xl:bottom-[10px] ml-[58px] max-w-[390px] xl:max-w-[400px] "
						src="./Images/avatars.png"
					/>
					<div className="ml-[50px] mt-[90px] text-white">
						<p className="text-[30px] xl:text-[30px] font-bold">Join the Fight!</p>
						<p className="text-[15px] pr-[35px] xl:text-[15px] font-semibold max-w-[460px] mt-[15px]">Join others to help us eliminate online fraud by reporting a scam</p>
					</div>
				</div>
				<div className="w-full px-[90px] flex flex-col overflow-y-auto py-[73px]">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						exit={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<p className="text-[36px] xl:text-[40px] text-center">Create your account</p>
						<p className="text-center mt-[20px] mb-[38px]">
							Already have an account?{" "}
							<Link href="/login">
								<span className="text-eccblue cursor-pointer">Login</span>
							</Link>
						</p>
						<form>
							<div className="flex flex-col gap-y-[35px]">
								<LoginInputGroup
									label="Email"
									placeholder="Enter Valid Email Address"
									value={email}
									setValue={setEmail}
									type="email"
									errorMessage={errors.email}
								/>
								<LoginInputGroup
									label="Password"
									placeholder="Enter Password"
									value={password}
									setValue={setPassword}
									type="password"
									errorMessage={errors.password}
								/>
								<LoginInputGroup
									label="Confirm Password"
									placeholder="Enter Password"
									value={confirmPassword}
									setValue={setConfirmPassword}
									type="password"
									errorMessage={errors.confirmPassword}
								/>
							</div>
							<AnimatePresence>
							{backendError && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{opacity: 0}}
									className="text-center my-[20px] text-[#ed4956]"
								>
									{backendError}
								</motion.p>
							)}
							</AnimatePresence>
							<div className="mt-[43px]">
								<AsyncSubmitButton
									onSubmit={onSubmit}
									text="Continue"
									loading={loading}
								/>
								<div className="flex items-center gap-x-[22px] mt-[40px] mb-[50px]">
								<div className="w-full bg-[#9E9E9E] h-[2px]"></div>
								<p className="text-[24px]">Or</p>
								<div className="w-full bg-[#9E9E9E] h-[2px]"></div>
							</div>
															<div className="grid grid-cols-2 gap-x-[45px]">
								<GoogleLoginButton />
								<GoogleLoginButton />
							</div>
							</div>
						</form>
					</motion.div>
				</div>
			</div>
			{/* MOBILE VERSION */}
			<div className="lg:hidden bg-eccblue w-full min-h-screen poppinsFont pb-[70px] relative">
				<img
					className="w-[50px] ml-[15px] pt-[30px]"
					src="./Images/whiteEccLogo.svg"
				/>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[27px] max-w-[500px] mx-auto">Join the Fight!</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">Join others to help us eliminate online fraud by reporting a scam</p>
					</div>
				</div>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">Create your account</p>
							<p className="text-center mt-[2px] mb-[30px]">
								Already have an account?{" "}
								<Link href="/login">
									<span className="text-eccblue cursor-pointer">Login</span>
								</Link>
							</p>
							<form>
								<div className="flex flex-col gap-y-[15px]">
									<LoginInputGroup
										label="Email"
										placeholder="Enter Valid Email Address"
										value={email}
										setValue={setEmail}
										type="email"
									/>
									<LoginInputGroup
										label="Password"
										placeholder="Enter Password"
										value={password}
										setValue={setPassword}
										type="password"
									/>
								</div>
								<button
									onClick={(e) => e.preventDefault()}
									className="w-full text-[14px] md:text-[20px] text-white py-[14px] md:py-[18px] xl:py-[22px] rounded-xl bg-eccblue mt-[30px]"
								>
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>
				<img
					className="absolute bottom-0"
					src="/Images/polygons.svg"
				/>
			</div>
		</>
	);
};

export default SignupPage;
