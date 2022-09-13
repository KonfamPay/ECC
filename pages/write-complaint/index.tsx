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
			<div className="mt-[201px] mx-[100px]">
				<p className="text-[40px] text-center">Complaint Letter Tool</p>
				<div className="bg-clearblue rounded-xl">
					<div className="flex space-x-[50px] w-full mt-[53px]">
						<img
							src="./icons/pencil.svg"
							className="ml-[50px]"
							alt=""
						/>
						<div className="py-[37px] pr-[42px]">
							<p className="text-[20px] text-eccblue leading-[50px]">Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post. Remember to attach or include any relevant documentation, such as a receipt or photo of the faulty product, when you send the letter.</p>
						</div>
					</div>
				</div>
				<div className="mt-[87px]">
					<div>
						<input
							type="text"
							name=""
							id=""
							className="placeholder:text-[#858383] placeholder:text-[20px] text-[20px] border-none border-b-[12px] border-b-[#858383]"
						/>
					</div>
					<div className="mt-[73px] text-[20px] flex">
						<p>On</p>
						<input
							type="date"
							name=""
							id=""
							className="w-[141px] ml-[9px] mr-[10px] border-b-[1px] outline-none"
						/>
						<p className="">, I purchased</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[230px] ml-[9px] mr-[15px] border-b-[1px] placeholder:text-[#858383] outline-none"
							placeholder="product/service name"
						/>
						<p>from</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[225px] ml-[9px] border-b-[1px] placeholder:text-[#858383] outline-none"
							placeholder="the place of purchase"
						/>
					</div>
					<div className="mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[231px] rounded-xl border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px]"
							placeholder="Explain what the problem is and what you have done so far to resolve it."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What should this include?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${shouldInclude && "rotate-180"}`}
								onClick={() => setShouldInclude(!shouldInclude)}
								alt=""
							/>
						</div>
						{shouldInclude && (
							<div className="w-full mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-7 pb-[50px] pl-[26px] pr-[76px] text-[20px] text-eccblue">Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[21px] right-[27.85px] cursor-pointer"
									onClick={() => setShouldInclude(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="mt-[44px]">
						<p className="text-[20px]">I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
					</div>
					<div className="mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[231px] rounded-xl border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px] text-[18px]"
							placeholder="Explain what evidence you are providing to support your complaint, such as your proof of purchase or photographs of the faulty product (you can include this when you send the letter)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What can I use as a proof of purchase?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${shouldPurchase && "rotate-180"}`}
								onClick={() => setShouldPurchase(!shouldPurchase)}
								alt=""
							/>
						</div>
						{shouldPurchase && (
							<div className="w-full mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-7 pb-[50px] pl-[26px] pr-[76px] text-[20px] text-eccblue">Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[21px] right-[27.85px] cursor-pointer"
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
							className="w-full h-[231px] rounded-xl border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px] text-[18px]"
							placeholder="What would you like the business to do to resolve the issue?)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue">What am I entitled to?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`cursor-pointer ${entitleTo && "rotate-180"}`}
								onClick={() => setEntitleTo(!entitleTo)}
								alt=""
							/>
						</div>
						{entitleTo && (
							<div className="w-full mt-[20px] bg-clearblue rounded-xl relative">
								<p className="pt-7 pb-[50px] pl-[26px] pr-[76px] text-[20px] text-eccblue">Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv</p>
								<img
									src="../icons/close.svg"
									className="absolute top-[21px] right-[27.85px] cursor-pointer"
									onClick={() => setEntitleTo(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="text-[20px] mt-[44px]">
						<div className="leading-[44px]">
							<p className="inline">If I do not hear from you within </p>
							<div className="inline relative">
								<input
									type="text"
									name=""
									id=""
									className="w-[230px] mr-[10px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383] text-[20px]"
									placeholder="your phone number"
									value={dateRange}
								/>
								<img
									src="../icons/chevron-down-grey.svg"
									className={`absolute top-0 right-[10px] ${showDateRange && "rotate-180"}`}
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
								className="w-[204px] mr-[8px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383] text-[20px]"
								placeholder="your email address"
							/>
							<p className="mr-[9px] inline">or call me on</p>
							<input
								type="tel"
								name=""
								id=""
								className="w-[204px] mr-[10px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383] text-[20px]"
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
							className="w-[121px] mt-[10px] mr-[10px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383] text-[20px]fff"
							placeholder="your name"
						/>
					</div>
					<Link href={"/writeAComplaintLetter/preview"}>
						<div className="bg-eccblue mt-[102px] mb-[79px] mx-auto w-fit cursor-pointer text-[20px] font-semibold text-white rounded-xl">
							<div className="mx-auto px-[193.15px] flex space-x-[20px]">
								<img
									src="../icons/eye.svg"
									className=""
									alt=""
								/>
								<p className="py-[22px] text-center">Preview Letter</p>
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
