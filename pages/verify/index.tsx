import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import { Footer, NavBar, VerificationInputGroup } from "../../Components";
import Testimonials from "../../Sections/HomeSections/TestimonialsSection";

const LoginPage: NextPage = () => {
	const [fullName, setfullName] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const filePickerRef = useRef(null);
	const addDocument = (e) => {
		setSelectedFile(e.target.files[0].name);
	};
	return (
		<>
			<NavBar />
			<div className="mt-[198px]">
				<div className="">
					<p className="text-center text-[18px] lg:text-[40px] font-[500]">You will have to verify yourself before you continue </p>
					<p className="text-center text-[20px] font-[300] mt-[30px]">
						Already have an account? <a className="text-eccblue cursor-pointer">Login</a>
					</p>
				</div>
				<div className="mt-[99px] mx-[12.5px] lg:mx-[109px]">
					<div className="flex lg:grid flex-col lg:grid-cols-2 gap-x-[65px] space-y-[30px] lg:space-y-0 lg:gap-y-[52px]">
						<VerificationInputGroup
							label="First Name"
							placeholder="Enter First Legal Name"
							value={fullName}
							setValue={fullName}
							type="text"
						/>
						<VerificationInputGroup
							label="Date Of Birth"
							placeholder="DD/MM/YYYY"
							value={fullName}
							setValue={fullName}
							type="date"
						/>
						<VerificationInputGroup
							label="Adress Line"
							placeholder="Enter Valid Email Address"
							value={fullName}
							setValue={fullName}
							type="text"
						/>
						<VerificationInputGroup
							label="Phone Number"
							placeholder="Enter Phone Number"
							value={fullName}
							setValue={fullName}
							type="tel"
						/>
						<VerificationInputGroup
							label="State"
							placeholder="Enter Your Residential State"
							value={fullName}
							setValue={fullName}
							type="text"
						/>
						<VerificationInputGroup
							label="L.G.A"
							placeholder="Enter Your Local Government Area"
							value={fullName}
							setValue={fullName}
							type="text"
						/>
					</div>
					<div className="mt-[30px] lg:mt-[66px]">
						<div>
							<p className="text-[20px]">Upload Documents</p>
						</div>
						<div className="bg-clearblue">
							<div className="w-full py-[27.5px] lg:py-[122px] rounded-xl border-eccblue mt-[25px] border lg:border-2 border-dashed flex flex-col items-center justify-center">
								<div className={`w-full mx-auto`}>
									<img
										src="icons/paste.svg"
										alt=""
										className="mx-auto cursor-pointer w-[41px] lg:w-[137px] h-[41px] lg:h-[137px]"
										onClick={() => filePickerRef.current?.click()}
									/>
									<input
										type="file"
										ref={filePickerRef}
										hidden
										onChange={addDocument}
										id="inputfile"
									/>
									<div className="text-center mt-[16px]">
										<p className="text-[14px] lg:text-[20px] font-[400]">
											Click to upload your{" "}
											<span
												className="text-eccblue cursor-pointer"
												onClick={() => filePickerRef.current?.click()}
											>
												doocuments
											</span>{" "}
											here
										</p>
										<p className="text-[12px] lg:text-[18px] mt-[6px] lg:mt-[22px]">Supported format: JPEG, PNG, PDF</p>
									</div>
									{selectedFile && (
										<div className="bg-eccblue h-[101px] w-[708px] mx-auto mt-[43px] rounded-xl">
											<div className="ml-[33px] mr-[50px]">
												<div className="pt-[27px] relative">
													<div className="flex flex-row space-x-[37px]">
														<img
															src="icons/file-check.svg"
															alt=""
														/>
														<p className="text-[20px] font-[600] text-white">{selectedFile}</p>
													</div>
													<img
														src="icons/close-1.svg"
														className=" absolute right-0 top-[27px] w-[18px] h-[18px] mt-[5px] cursor-pointer"
														onClick={() => setSelectedFile(null)}
														alt=""
													/>
												</div>
												{/* <hr className="mt-[12.12px] border-[3.5px] rounded-full"/> */}
												<div className="w-full mt-[12.12px] bg-[#C5C5C5] h-[5px] rounded-full">
													<div
														className="bg-white h-[5px] rounded-full"
														style={{ width: "70%" }}
													></div>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden lg:block mx-[120px] mt-[63px]">
					<p className="text-[20px] font-[500] leading-[30px]">You can use any of these means of identification</p>
					<ul className="text-[20px] text-eccblue font-[600] space-y-[11px] mt-[30px] -ml-[10px]">
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>Voter's Card</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>International Passport</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>National ID card</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>National Identification Slip (NIN)</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>Driver’s Licence</p>
						</li>
					</ul>
				</div>
				<div className="mx-[12.5px] lg:hidden leading-[24px] mt-[22px] font-[500] text-[12px]">
					<p>You can use any of these means of identification:</p>
					<p className="text-eccblue">Voter’s Card, International passport, National ID card, Driver’s licence and National identification slip (NIN) </p>
				</div>
				<div className="mt-[63px] mx-[12.5px] lg:mx-auto rounded-xl bg-eccblue lg:w-[587px]">
					<p className="text-center text-white text-[20px] font-[600] flex items-center justify-center py-[14.5px] cursor-pointer">Continue</p>
				</div>
				<div className="mt-[118px]">
					<Testimonials />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default LoginPage;
