import type { NextPage } from "next";
import { Footer, NavBar } from "../../Components";
import { useState } from "react";
import Link from "next/link";

const index: NextPage = () => {
	const [shouldInclude, setShouldInclude] = useState(false);
	const [shouldPurchase, setShouldPurchase] = useState(false);
	const [entitleTo, setEntitleTo] = useState(false);
	const [showDateRange, setShowDateRange] = useState(false);
	const [dateRange, setDateRange] = useState("");
	return (
		<>
			<NavBar />
			<div className="mt-[86px] lg:mt-[201px] mx-[16px] lg:mx-[100px] ">
				<p className="text-[20px] lg:text-[40px] text-center">Complaint Letter Tool</p>
				<div className="bg-clearblue rounded-xl w-[100%]">
					<div className="flex space-x-[10px] lg:space-x-[50px] w-full mt-[16px] lg:mt-[53px]">
						<img
							src="./icons/pencil.svg"
							className="ml-[8px] lg:ml-[50px] w-[29px] lg:w-[unset]"
							alt=""
						/>
						<div className="py-[12px] lg:py-[37px] pr-[8px] lg:pr-[42px]">
							<p className="text-[14px] lg:text-[20px] text-eccblue leading-[18px] lg:leading-[50px]">
								Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post. Remember to attach or include any relevant documentation, such as a receipt or photo of the faulty product, when you send the letter.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-[20px] text-[14px] lg:text-[20px] lg:mt-[87px] w-[100%]">
					<div>
						<input
							type="text"
							name=""
							id=""
							className="placeholder:text-[#858383] text-[14px] lg:text-[20px] w-fit border-b-[1px] outline-none border-b-[#858383]"
							placeholder="To whom it may concern"
						/>
					</div>
					<div className="mt-[20px] lg:mt-[73px] text-[14px] lg:text-[20px] flex flex-col lg:flex-row w-[100%]">
						<div className="flex items-center">
							<p className="text-[14px] lg:text-[20px]">On</p>
							<input
								type="date"
								name=""
								id=""
								className="w-[61px] lg:w-[141px]  text-[14px] lg:text-[20px] ml-[9px] mr-[unset] lg:mr-[10px] border-b-[1px] outline-none"
							/>
							<div className="w-[150px] h-[21px] block"><p className="w-[100%] block lg:w-[unset] text-[14px] lg:text-[20px]">, I purchased</p></div>
							<input
								type="text"
								name=""
								id=""
								className="w-[230px] ml-[9px] mr-[15px] border-b-[1px] text-[14px] lg:text-[20px] placeholder:text-[#858383] outline-none"
								placeholder="product/service name"
							/>
						</div>
						<div className="flex items-center">
							<p className="text-[14px] lg:text-[20px]">from</p>
							<input
								type="text"
								name=""
								id=""
								className="w-[225px] ml-[9px] border-b-[1px] text-[14px] lg:text-[20px] placeholder:text-[#858383] outline-none"
								placeholder="the place of purchase"
							/>
						</div>
					</div>
					<div className="mt-[20px] lg:mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[117px] lg:h-[231px] rounded-xl border-[1px] resize-none outline-none text-[14px] lg:text-[18px] placeholder:text-[#838383]  px-[9px] py-[9px] lg:px-[20px] lg:py-[25px]"
							placeholder="Explain what the problem is and what you have done so far to resolve it."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What should this include?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${shouldInclude && "rotate-180"} w-[14px] lg:w-[unset]`}
								onClick={() => setShouldInclude(!shouldInclude)}
								alt=""
							/>
						</div>
						{shouldInclude && (
							<div className="w-[100%] mt-[0] lg:mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-[18px] lg:pt-7 pb-[18px] lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[30px] lg:pr-[76px] text-[14px] lg:text-[20px] text-eccblue">You can include whatever you need to include so as to help you complete your application early and all that needs to go in here</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[6px] w-[24px] lg:w-[unset] lg:top-[21px] right-[9px] lg:right-[27.85px] cursor-pointer"
									onClick={() => setShouldInclude(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="mt-[20px] lg:mt-[44px]">
						<p className="text-[14px] lg:text-[20px]">I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
					</div>
					<div className="mt-[20px] lg:mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[117px] lg:h-[231px] rounded-xl border-[1px] resize-none outline-none text-[14px] lg:text-[18px] placeholder:text-[#838383] px-[9px] py-[9px] lg:px-[20px] lg:py-[25px]"
							placeholder="Explain what evidence you are providing to support your complaint, such as your proof of purchase or photographs of the faulty product (you can include this when you send the letter)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What can I use as a proof of purchase?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${shouldPurchase && "rotate-180"} w-[14px] lg:w-[unset]`}
								onClick={() => setShouldPurchase(!shouldPurchase)}
								alt=""
							/>
						</div>
						{shouldPurchase && (
							<div className="w-full mt-[0] lg:mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-[18px] lg:pt-7 pb-[18px] lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[30px] lg:pr-[76px] text-[14px] lg:text-[20px] text-eccblue">You can include whatever you need to include so as to help you complete your application early and all that needs to go in here</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[6px] w-[24px] lg:w-[unset] lg:top-[21px] right-[9px] lg:right-[27.85px] cursor-pointer"
									onClick={() => setShouldPurchase(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[117px] lg:h-[231px] rounded-xl border-[1px] resize-none outline-none text-[14px] lg:text-[18px] placeholder:text-[#838383] px-[9px] py-[9px] lg:px-[20px] lg:py-[25px]"
							placeholder="What would you like the business to do to resolve the issue?)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What am I entitled to?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${entitleTo && "rotate-180"} w-[14px] lg:w-[unset]`}
								onClick={() => setEntitleTo(!entitleTo)}
								alt=""
							/>
						</div>
						{entitleTo && (
							<div className="w-full mt-[0] lg:mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-[18px] lg:pt-7 pb-[18px] lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[30px] lg:pr-[76px] text-[14px] lg:text-[20px] text-eccblue">You can include whatever you need to include so as to help you complete your application early and all that needs to go in here</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[6px] w-[24px] lg:w-[unset] lg:top-[21px] right-[9px] lg:right-[27.85px] cursor-pointer"
									onClick={() => setEntitleTo(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="text-[14px] lg:text-[20px] mt-[20px] lg:mt-[44px]">
						<div className="leading-[30px] lg:leading-[44px]">
							<p className="inline">If I do not hear from you within </p>
							<div className="inline relative">
								<input
									type="text"
									name=""
									id=""
									className="w-[159px] lg:w-[230px] mr-[10px] border-b-[1px] outline-none placeholder:text-[#858383] text-[14px] lg:text-[20px]"
									placeholder="Select a date range"
									value={dateRange}
								/>
								<img
									src="../icons/chevron-down-grey.svg"
									className={`absolute top-0 right-[10px] ${showDateRange && "rotate-180"} w-[14px] lg:w-[unset]`}
									onClick={() => setShowDateRange(!showDateRange)}
									alt=""
								/>
								{showDateRange && (
									<div className="absolute right-0 h-[220px] w-[200px] bg-white border border-eccblue rounded-xl">
										<div className="flex flex-col mt-[10px] space-y-[6px]">
											<p
												className="text-center cursor-pointer"
												onClick={() => {
													setDateRange("5 working days");
													setShowDateRange(false);
												}}
											>
												5 working days
											</p>
											<p
												className="text-center cursor-pointer"
												onClick={() => {
													setDateRange("7 working days");
													setShowDateRange(false);
												}}
											>
												7 working days
											</p>
											<p
												className="text-center cursor-pointer"
												onClick={() => {
													setDateRange("10 working days");
													setShowDateRange(false);
												}}
											>
												10 working days
											</p>
											<p
												className="text-center cursor-pointer"
												onClick={() => {
													setDateRange("30 working days");
													setShowDateRange(false);
												}}
											>
												30 working days
											</p>
										</div>
									</div>
								)}
							</div>
							<p className="ml-[13px] inline"> I will lodge a formal complaint with e-commerce complaints(ecc). </p>
							<p className="mr-[9px] inline">You can contact me about this complaint via email</p>
							<input
								type="email"
								name=""
								id=""
								className="w-[146px] lg:w-[230px] mr-[10px] border-b-[1px] outline-none placeholder:text-[#858383] text-[14px] lg:text-[20px]"
								placeholder="your email address"
							/>
							<p className="mr-[9px] inline">or call me on</p>
							<input
								type="tel"
								name=""
								id=""
								className="w-[146px] lg:w-[230px] mr-[10px] border-b-[1px] outline-none placeholder:text-[#858383] text-[14px] lg:text-[20px]"
								placeholder="your phone number"
							/>
							<p className="mr-[9px] inline">during business hours</p>
						</div>
						<p className="mt-[22px]">Thanks for your assistance in this matter</p>
						<p className="mt-[30px]">Regards.</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[87px] lg:w-[230px] mr-[10px] border-b-[1px] outline-none placeholder:text-[#858383] text-[14px] lg:text-[20px]"
							placeholder="your name"
						/>
					</div>
					<Link href={"/writeAComplaintLetter/preview"}>
						<div className="bg-eccblue mt-[40px] lg:mt-[102px] mb-[50px] lg:mb-[79px] mx-auto w-[100%] cursor-pointer text-[14px] lg:text-[20px] font-semibold text-white rounded-xl">
							<div className="mx-auto px-none w-fit lg:px-[193.15px] flex space-x-[20px]">
								<img
									src="../icons/eye.svg"
									className=""
									alt=""
								/>
								<p className="py-[22px] block w-fit text-center">Preview Letter</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default index;
