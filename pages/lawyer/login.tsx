import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Login/LoginInputGroup";

const LawyerLoginPage: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="w-screen h-screen poppinsFont grid grid-cols-[47%_53%]">
			<div className="relative bg-[url('/Images/lawBalanceImage.png')] bg-cover h-screen w-fullfrom-eccblue to-[#073D79]">
				<img
					className="w-[98px] ml-[50px] pt-[55px]"
					src="/Images/whiteEccLogo.svg"
				/>
				<div className="ml-[50px] mt-[120px] text-white">
					<p className="text-[40px] xl:text-[40px] font-bold">Welcome Back!</p>
					<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Login to your account to help user get value and solve issues.</p>
				</div>
			</div>
			<div className="w-full px-[90px] flex flex-col justify-center">
				<div>
					<p className="text-[36px] xl:text-[40px] text-center">Login to your account</p>
					<p className="text-center mt-[20px] mb-[38px]">
						Don't have an account?{" "}
						<Link href="/lawyer/signup">
							<span className="text-eccblue cursor-pointer">Create an account</span>
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
							/>
							<InputGroup
								label="Password"
								placeholder="Enter Password"
								value={password}
								setValue={setPassword}
								type="password"
							/>
						</div>
						<p className="text-center my-[38px]">Forgot Password?</p>
						<button
							onClick={(e) => e.preventDefault()}
							className="w-full text-[20px] text-white py-[18px] xl:py-[22px] rounded-xl bg-darkblue"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LawyerLoginPage;
