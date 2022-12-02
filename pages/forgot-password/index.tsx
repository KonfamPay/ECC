import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Joi from "joi";
import axios from "axios";
import { motion } from "framer-motion";
import { AsyncSubmitButton, EmailModal, LoginInputGroup } from "../../Components/";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const LoginPage: NextPage = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [backendError, setBackendError] = useState("");
	const [emailModalShowing, setEmailModalShowing] = useState(false);
	const [errors, setErrors] = useState({
		email: "",
	});
	const router = useRouter();
	const schema = Joi.object({
		email: Joi.string()
			.min(3)
			.max(100)
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.label("Email"),
	});
	const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const { error } = schema.validate({ email }, { abortEarly: false });
		if (error) {
			const { details } = error;
			const errors = {
				email: details.find((item: any) => item.path[0] == "email") ? details.find((item: any) => item.path[0] == "email")!.message : "",
			};

			setErrors(errors);
		} else {
			setErrors({
				email: "",
			});
			try {
				setLoading(true);
				const payload = { email };
				const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/forgot-password`, payload);
				setBackendError("");
				setEmailModalShowing(true);
				console.log(res);
			} catch (err: any) {
				console.log(err);
				try {
					if (err.response.data.message) setBackendError(err.response.data.message);
				} catch (err: any) {
					alert("Something went wrong.");
				}
			} finally {
				setLoading(false);
			}
		}
	};
	useEffect(() => {
		if (cookies.token)
			try {
				const user = jwt_decode(cookies.token);
				router.push("/dashboard");
			} catch (ex) {
				removeCookie("token");
			}
	}, []);
	return (
		<>
			{emailModalShowing && <EmailModal setEmailModalShowing={setEmailModalShowing} />}
			<div className="w-screen h-screen poppinsFont hidden lg:grid grid-cols-[47%_53%]">
				<div className="relative h-screen w-full bg-gradient-to-br from-[#0B63C5] to-[#073D79]">
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
						<p className="text-[40px] xl:text-[40px] font-bold">Recover Password</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Enter your email address to reset your password</p>
					</div>
				</div>
				<div className="w-full px-[90px] flex flex-col justify-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
					>
						<p className="text-[36px] xl:text-[40px] text-center mb-[80px]">Recover Password</p>
						<form>
							<div className="flex flex-col gap-y-[35px] mb-[40px]">
								<LoginInputGroup
									label="Email Address"
									placeholder="Enter Email"
									value={email}
									setValue={setEmail}
									type="text"
									errorMessage={errors.email}
								/>
							</div>

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
								text="Recover Password"
								loading={loading}
								onSubmit={onSubmit}
							/>
						</form>
					</motion.div>
				</div>
			</div>
			<div className="lg:hidden bg-[#0B63C5] w-full min-h-screen poppinsFont pb-[70px] relative flex flex-col justify-center">
				<img
					className="absolute w-[50px] left-[15px] top-[30px]"
					src="./Images/whiteEccLogo.svg"
				/>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">Recover Password</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">Enter your email address to reset your password</p>
					</div>
				</div>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold mb-[30px]">Recover password</p>

							<form>
								<div className="flex flex-col gap-y-[15px]">
									<LoginInputGroup
										label="Email"
										placeholder="Enter Valid Email Address"
										value={email}
										setValue={setEmail}
										type="email"
										errorMessage={errors.email}
									/>
								</div>

								<button
									onClick={onSubmit}
									className="w-full text-[14px] md:text-[20px] text-white py-[14px] md:py-[18px] xl:py-[22px] rounded-[12px] bg-[#0B63C5] mt-[30px]"
								>
									Recover password
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

export default LoginPage;
