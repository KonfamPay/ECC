import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AsyncSubmitButton } from "../../Components/";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import Popup from "../../Components/Login/recoverPopUps";

const RecoverPage: NextPage = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);

	const [loading, setLoading] = useState(false);
	const [backendError, setBackendError] = useState("");
	const [popup, setPopup] = useState(false);
	const [value, setValue] = useState("");

	const router = useRouter();

	const changeValue = ({ currentTarget: input }: { currentTarget: any }) => {
		setValue(input.value);
	};
	const resendCode = () => {};

	const onSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
			setLoading(true);
			const payload = { value };
			{
				/* pass email as the second key in the object */
			}
			const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth`, payload);
			setBackendError("");
			{
				/* 
                awaiting response from the server to check if the code passed as payload matches any reset code in the db and if the reset code belongs to the the authorized email  
                   */
			}

			setCookie("token", res.data.token, {
				path: "/",
				expires: new Date(Date.now() + 2 * 86400000),
			});
			router.push("/password-reset");
		} catch (err: any) {
			try {
				if (err.response.data.message) setBackendError(err.response.data.message);
				setPopup(true);
			} catch (err: any) {
				alert("Something went wrong.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
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
						<p className="text-[40px] xl:text-[40px] font-bold">Verifiy your email</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">A code has been sent to your email address.Kindly input the code to proceed</p>
					</div>
				</div>
				<div className="w-full px-[90px] flex flex-col justify-center">
					{popup && (
						<Popup
							status={backendError}
							exit={setPopup}
						/>
					)}

					<p className="text-[36px] xl:text-[40px] text-center mb-3">Verify your email</p>
					<p className="text-eccblue text-center">Vokeonoriode@gmail.com</p>
					{/*this will be dynamically changed later */}
					<form>
						<div className="flex flex-col gap-y-[35px] mb-15">
							<p className="text-[14px] md:text-[16px] lg:text-[20px]">Verification Code</p>
							<input
								value={value}
								onChange={changeValue}
								className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-0 rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue"
								placeholder="Enter verification code"
								type="text"
							/>
							<p
								onClick={resendCode}
								className="text-eccblue"
							>
								Resend Code
							</p>
						</div>

						<AsyncSubmitButton
							text="Recover Password"
							loading={loading}
							onSubmit={onSubmit}
						/>
					</form>
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
						<p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">Verify your email</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">A code has been sent to your email address. Kindly input the code to proceed </p>
					</div>
				</div>
				{popup && (
					<Popup
						status={backendError}
						exit={setPopup}
					/>
				)}
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">Verify your email</p>
							<p className="text-eccblue text-center">Vokeonoriode@gmail.com</p>
							<form>
								<div className="flex flex-col gap-y-[15px]">
									<p className="text-[14px] md:text-[16px] lg:text-[20px]">Verification Code</p>

									<input
										value={value}
										onChange={changeValue}
										className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-0 rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue"
										placeholder="Enter verification code"
										type="text"
									/>
									<p
										onClick={resendCode}
										className="text-eccblue"
									>
										Resend Code
									</p>
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
		</>
	);
};

export default RecoverPage;
