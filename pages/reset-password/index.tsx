import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { motion } from "framer-motion";
import { AsyncSubmitButton, LoginInputGroup } from "../../Components/";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const ResetPassword: NextPage = () => {
	const Router = useRouter();
	const [successful, setSuccessful] = useState(true);
	const [backendError, setBackendError] = useState("");
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState<{ password: string | undefined; confirmPassword: string | undefined }>({
		password: "",
		confirmPassword: "",
	});
	const schema = Joi.object({
		password: Joi.string().min(8).max(40).required().label("Password"),
		confirmPassword: Joi.string().min(8).max(40).required().label("Confirm Password"),
	});

	const passwordsMatch = password == confirmPassword ? true : false;

	const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const { error } = schema.validate({ password, confirmPassword }, { abortEarly: false });
		if (error) {
			const { details } = error;
			const errors = {
				password: details.find((item: any) => item.path[0] == "password") ? details.find((item: any) => item.path[0] == "password")!.message : "",
				confirmPassword: details.find((item: any) => item.path[0] == "confirmPassword") ? details.find((item: any) => item.path[0] == "confirmPassword")!.message : "",
			};
			if (!passwordsMatch && confirmPassword != "") errors.confirmPassword = "Confirm Password should be the same as Password";
			console.log(passwordsMatch);
			setErrors(errors);
		} else {
			setErrors({ password: "", confirmPassword: "" });
			try {
				setLoading(true);
				const payload = { password, confirmPassword };
				const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth`, payload);
				setBackendError("");
				setSuccessful(true);
			} catch (err: any) {
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

	return (
		<div>
			<div className="w-screen h-screen poppinsFont hidden lg:grid grid-cols-[47%_53%]">
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
						<p className="text-[40px] xl:text-[40px] font-bold">Recover Password</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Enter your email address to recover your password</p>
					</div>
				</div>
				{successful && (
					<div className="absolute w-[500px] h-[350px] left-[354px] top-[150px] bg-[#ffffff] rounded-[10.3831px] z-10 p-4 border border-solid border-eccblue">
						<div className="flex h-full flex-col items-center justify-between">
							<div>
								<div className="flex flex-col mb-4 items-center">
									<img
										className="w-[120px] h-[120px]"
										src="./icons/check.svg"
										alt="check"
									/>
									<p className="font-[500] text-3xl">Successful !</p>
								</div>
								<div>
									<p>Your password has been successfully reset. You can now login into your account with your new password </p>
								</div>
							</div>

							<button
								onClick={() => {
									Router.push("/login");
								}}
								className=" bg-eccblue w-full mt-4 h-[50px] rounded-[12px]"
							>
								<p className="text-white">Proceed to login</p>
							</button>
						</div>
					</div>
				)}
				<div className="w-full px-[90px] flex flex-col justify-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
					>
						<p className="text-[36px] xl:text-[40px] text-center mb-12">Recover Password</p>

						<form>
							<div className="flex flex-col gap-y-[30px] mb-16">
								<LoginInputGroup
									label="Your new password"
									placeholder="Enter new password"
									value={password}
									setValue={setPassword}
									type="password"
									errorMessage={errors.password}
								/>
							</div>
							<div className="flex flex-col gap-y-[30px] mb-16">
								<LoginInputGroup
									label="Confirm new password"
									placeholder="Confirm new password"
									value={confirmPassword}
									setValue={setConfirmPassword}
									type="password"
									errorMessage={errors.confirmPassword}
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
			{/* Start of mobile design */}
			<div className="lg:hidden bg-eccblue w-full min-h-screen poppinsFont pb-[70px] relative flex flex-col justify-center">
				<img
					className="absolute w-[50px] left-[15px] top-[30px]"
					src="./Images/whiteEccLogo.svg"
				/>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto"> Reset Password</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">Enter your new password and confirm it to reset your password</p>
					</div>
				</div>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							{/* {!validEmail && (
                            <div className=" border-eccblue border-solid border rounded-md p-4 text-center mb-12 ">
                                <p>Email address provided does not match any email in our database. please put in a valid email or</p>
                                <Link href="/signup">
                                    <p className=" cursor-pointer text-eccblue">sign up</p>
                                </Link>
                            </div>
                        )} */}

							<p className="text-[18px] text-center font-semibold">Reset Password</p>
							<p className="text-sm text-center text-eccblue">Vokeonoriode@gmail.com</p>
							<form>
								<div className="flex flex-col gap-y-[15px]">
									<LoginInputGroup
										label="Your new password"
										placeholder="Enter new password"
										value={password}
										setValue={setPassword}
										type="password"
										errorMessage={errors.password}
									/>
								</div>
								<div className="flex flex-col gap-y-[15px] mb-4">
									<LoginInputGroup
										label="Confirm new password"
										placeholder="Confirm new password"
										value={confirmPassword}
										setValue={setConfirmPassword}
										type="password"
										errorMessage={errors.confirmPassword}
									/>
								</div>

								<AsyncSubmitButton
									text="Recover Password"
									loading={loading}
									onSubmit={onSubmit}
								/>
							</form>
						</div>
					</div>
				</div>
				<img
					className="absolute bottom-0"
					src="/Images/polygons.svg"
				/>
			</div>
		</div>
	);
};
export default ResetPassword;
