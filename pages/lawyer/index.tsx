import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Login/LoginInputGroup";

const LawyerSignupPage: NextPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="w-screen h-screen poppinsFont grid grid-cols-[47%_53%] overflow-hidden">
			<div className="relative h-screen w-full bg-[url('/Images/lawyerhands.png')] bg-cover">
				<img
					className="w-[98px] ml-[50px] pt-[55px]"
					src="/Images/whiteEccLogo.svg"
				/>
				<div className="ml-[50px] mt-[120px] text-white">
					<p className="text-[40px] xl:text-[40px] font-bold">SIGN UP!</p>
					<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Join the lawyer community, help users get value.....</p>
				</div>
			</div>
			<div className="w-full px-[90px] flex flex-col overflow-y-auto py-[73px]">
				<div>
					<p className="text-[36px] xl:text-[40px] text-center">Create your account</p>
					<p className="text-center mt-[20px] mb-[38px]">
						Already have an account?{" "}
						<Link href="/lawyer/login">
							<span className="text-eccblue cursor-pointer">Login</span>
						</Link>
					</p>
					<form>
						<div className="flex flex-col gap-y-[35px]">
							<InputGroup
								label="First Name"
								placeholder="Enter Legal First Name"
								value={firstName}
								setValue={setFirstName}
								type="text"
							/>
							<InputGroup
								label="Last Name"
								placeholder="Enter Legal Last Name"
								value={lastName}
								setValue={setLastName}
								type="text"
							/>
							<InputGroup
								label="Email"
								placeholder="Enter Valid Email Address"
								value={email}
								setValue={setEmail}
								type="email"
							/>
							<InputGroup
								label="Password"
								placeholder="Enter Password"
								value={password}
								setValue={setPassword}
								type="password"
							/>
						</div>
						<button
							onClick={(e) => e.preventDefault()}
							className="w-full text-[20px] text-white py-[18px] xl:py-[22px] rounded-xl bg-darkblue mt-[53px]"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LawyerSignupPage;
