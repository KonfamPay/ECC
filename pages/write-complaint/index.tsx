import type { NextPage } from "next";
import { Footer, NavBar } from "../../Components";
import { useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { MutableRefObject } from "react";

const WriteComplaintPage: NextPage = () => {
	const [shouldInclude, setShouldInclude] = useState(false);
	const [shouldPurchase, setShouldPurchase] = useState(false);
	const [entitleTo, setEntitleTo] = useState(false);
	const [showDateRange, setShowDateRange] = useState(false);
	const [dateRange, setDateRange] = useState("");
	const dateRef: MutableRefObject<any> = useRef();

	const HandleDateClick = () => dateRef.current.showPicker();
	return (
		<>
			<Head>
				<title>Write a Complaint</title>
			</Head>
			<NavBar />
			<section className="flex flex-col justify-center mt-[80px] lg:mt-52 mx-[20px] sm:mx-[50px] lg:mx-[70px]">
				<p className="opacity-80 text-[20px] sm:text-[30px] lg:text-[40px] text-center">Complaint Letter Tool</p>
				<div className="bg-eccblue rounded-xl mt-[16px] lg:mt-[53px]">
					<div className="flex items-center justify-center">
						<div className="max-w-[30px] sm:max-w-[50px] lg:max-w-[100px] lg:w-full mx-[8px] lg:mx-[50px]">
							<img
								src="./icons/pencil.svg"
								className="w-full"
								alt=""
							/>
						</div>
						<div className="text-[12px] sm:text-[15px] lg:text-[20px] py-[10px] lg:py-[37px] pr-[8px] lg:pr-[42px] text-white">
							<p className="leading-[18px] lg:leading-[50px] mb-[5px]">Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post. </p>
							<p className="leading-[18px] lg:leading-[50px]">Remember to attach or include any relevant documentation, such as a receipt or photo of the faulty product, when you send the letter.</p>
						</div>
					</div>
				</div>
				<div className="mt-[50px] lg:mt-[87px] text-[14px] sm:text-[17px] lg:text-[20px] leading-[21px] lg:leading-[30px]">
					<p className="text-[#858383] border-b-[1px] text-left w-fit">To whom it may concern</p>
					<div className="mt-[20px] lg:mt-[73px] flex justify-start items-center flex-wrap gap-y-[15px]">
						<p className="">On</p>
						<div className="ml-[7px] mr-[3px] flex items-center border-b-[1px] w-[100px] sm:w-[120px] lg:w-[140px]">
							<input
								type="date"
								name=""
								id=""
								ref={dateRef}
								className=" w-full outline-none"
							/>
							<img
								onClick={HandleDateClick}
								className="w-[18px] lg:w-[24px]"
								src="./icons/calendar.svg"
								alt=""
								srcSet=""
							/>
						</div>
						<p className="">, I purchased</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[85px] sm:w-[120px] lg:w-[200px] mx-1.5 lg:mx-[6px] border-b-[1px] placeholder:text-[#858383] outline-none"
							placeholder="product name"
						/>
						<p>from</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[140px] sm:w-[200px] mx-1.5 lg:mx-2 border-b-[1px] placeholder:text-[#858383] outline-none"
							placeholder="the place of purchase"
						/>
					</div>
					<div className="mt-[20px] lg:mt-11">
						<textarea
							name=""
							id=""
							className="w-full h-[231px] rounded-md lg:rounded-xl border-[1px] resize-none outline-none placeholder:text-[12px] sm:placeholder:text-[15px] lg:placeholder:text-[18px] placeholder:text-[#838383] px-[9px] lg:px-[20px] py-[9px] lg:py-[25px]"
							placeholder="Explain what the problem is and what you have done so far to resolve it."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[4.8px] lg:px-[10.5px] py-1.5 lg:py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue text-[10px] sm:text-[13px] lg:text-[16px] ">What should this include?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`w-[15px] lg:w-[24px] cursor-pointer ${shouldInclude && "rotate-180"}`}
								onClick={() => setShouldInclude(!shouldInclude)}
								alt=""
							/>
						</div>
						{shouldInclude && (
							<div className="mt-[20px] bg-clearblue rounded-xl relative text-[12px] sm:text-[15px] lg:text-[20px]">
								<p className="py-[18px] lg:pt-7 lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[35px] lg:pr-[76px] text-eccblue leading-[18px] lg:leading-[50px] break-words">
									Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv
								</p>
								<img
									src="../icons/close.svg"
									className="w-[16px] lg:w-[27px] absolute top-[21px] right-[27.85px] cursor-pointer"
									onClick={() => setShouldInclude(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="mt-[30px] lg:mt-11">
						<p className="text-[14px] sm:text-[17px]  lg:text-[20px] leading-[25px] lg:leading-[35px]">I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
					</div>
					<div className="mt-5 lg:mt-11">
						<textarea
							name=""
							id=""
							className="w-full h-[231px] rounded-xl border-[1px] resize-none outline-none placeholder:text-[12px] placeholder:text-[15px] lg:placeholder:text-[18px] placeholder:text-[#838383] px-[9px] lg:px-[20px] py-[5px] lg:py-[25px] text-[12px] sm:text-[15px] lg:text-[18px]"
							placeholder="Explain what evidence you are providing to support your complaint, such as your proof of purchase or photographs of the faulty product (you can include this when you send the letter)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue text-[10px] sm:text-[13px] lg:text-[16px]">What can I use as a proof of purchase?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`w-[15px] lg:w-[24px]  cursor-pointer ${shouldPurchase && "rotate-180"}`}
								onClick={() => setShouldPurchase(!shouldPurchase)}
								alt=""
							/>
						</div>
						{shouldPurchase && (
							<div className="mt-[20px] bg-clearblue rounded-xl relative text-[12px] sm:text-[15px] lg:text-[20px]">
								<p className="py-[18px] lg:pt-7 lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[35px] lg:pr-[76px] text-eccblue leading-[18px] lg:leading-[50px] break-words">
									Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv
								</p>
								<img
									src="../icons/close.svg"
									className="w-[16px] lg:w-[27px] absolute top-[21px] right-[27.85px] cursor-pointer"
									onClick={() => setShouldPurchase(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="mt-[35px] lg:mt-[44px]">
						<textarea
							name=""
							id=""
							className="w-full h-[231px] rounded-md lg:rounded-xl border-[1px] resize-none outline-none placeholder:text-[12px] placeholder:text-[15px] lg:placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px] text-[12px] sm:text-[15px] lg:text-[18px]"
							placeholder="What would you like the business to do to resolve the issue?)."
						/>
						<div className="mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-xl bg-clearblue">
							<p className="text-eccblue text-[10px] sm:text-[13px] lg:text-[16px]">What am I entitled to?</p>
							<img
								src="./icons/chevron-down.svg"
								className={`w-[15px] lg:w-[24px] cursor-pointer ${entitleTo && "rotate-180"}`}
								onClick={() => setEntitleTo(!entitleTo)}
								alt=""
							/>
						</div>
						{entitleTo && (
							<div className="mt-[20px] bg-clearblue rounded-xl relative text-[12px] sm:text-[15px] lg:text-[20px]">
								<p className="py-[18px] lg:pt-7 lg:pb-[50px] pl-[12px] lg:pl-[26px] pr-[35px] lg:pr-[76px] text-eccblue leading-[18px] lg:leading-[50px] break-words">
									Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post thfhhffffhfhfhfhfhfhfhffhfhfhfhfhfhfhhfhfhfhjgkjgfokgffv
								</p>
								<img
									src="../icons/close.svg"
									className="w-[16px] lg:w-[27px] absolute top-[21px] right-[27.85px] cursor-pointer"
									onClick={() => setEntitleTo(false)}
									alt=""
								/>
							</div>
						)}
					</div>
					<div className="text-[14px] sm:text-[17px] lg:text-[20px] mt-[20px] lg:mt-[35px] lg:mt-[44px]">
						<div className="leading-[21px] lg:leading-[30px] break-words">
							<p className="inline">If I do not hear from you within </p>
							<div className="inline relative">
								<input
									type="text"
									name=""
									id=""
									className="w-[150px] sm:w-[170px] lg:w-[200px] border-b-[1px] mx-[2px] outline-none placeholder:text-[14px] sm:placeholder:text-[17px] lg:placeholder:text-[20px] placeholder:text-[#858383] text-[14px] sm:text-[17px] lg:text-[20px]"
									placeholder="select a date range"
									value={dateRange}
								/>
								<img
									src="../icons/chevron-down-grey.svg"
									className={`w-[14px] lg:w-[24px] absolute top-0 right-[10px] ${showDateRange && "rotate-180"}`}
									onClick={() => setShowDateRange(!showDateRange)}
									alt=""
								/>
								{showDateRange && (
									<div className="absolute left-0 lg:right-0 h-[120px] lg:h-[220px] w-[160px] lg:w-[200px] bg-white border border-eccblue rounded lg:rounded-xl">
										<div className="flex flex-col items-center mt-[6px] lg:mt-[10px] space-y-[6px]">
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
							<p className="inline">
								{" "}
								I will lodge a formal complaint with e-commerce complaints <i className="not-italic text-eccblue">(ecc).</i>{" "}
							</p>
							<p className="mr-[6px] inline">You can contact me about this complaint via email</p>
							<input
								type="email"
								name=""
								id=""
								className="w-[120px] sm:w-[160px] lg:w-[180px] lg:mt-[10px] mx-[4px] lg:mr-[10px] border-b-[1px] outline-none placeholder:text-[14px] sm:placeholder:text-[17px] lg:placeholder:text-[20px] placeholder:text-[#858383] text-[14px] sm:text-[17px] lg:text-[20px]"
								placeholder="your email address"
							/>
							<p className="inline">or call me on</p>
							<input
								type="tel"
								name=""
								id=""
								className="w-[130px] sm:w-[150px] lg:w-[200px] mx-[5px] lg:mx-[10px] lg:mr-[250px] border-b-[1px] outline-none placeholder:text-[14px] sm:placeholder:text-[17px] lg:placeholder:text-[20px] placeholder:text-[#858383] text-[14px] sm:text-[17px] lg:text-[20px]"
								placeholder="your phone number"
							/>
							<p className="mr-[9px] inline">during business hours</p>
						</div>

						<p className="mt-[22px]">Thanks for your assistance in this matter</p>
						<p className="mt-[18px] lg:mt-[30px]">Regards.</p>
						<input
							type="text"
							name=""
							id=""
							className="w-[70px] sm:w-[100px] lg:w-[120px] mt-[10px] lg:mr-[10px] border-b-[1px] outline-none placeholder:text-[14px] sm:placeholder:text-[17px] lg:placeholder:text-[20px] placeholder:text-[#858383] text-[14px] sm:text-[17px] lg:text-[20px]"
							placeholder="your name"
						/>
					</div>
					<Link href={"/write-complaint/preview"}>
						<div className="bg-eccblue mt-[40px] lg:mt-[102px] mb-[56px] lg:mb-[79px] mx-auto cursor-pointer text-[14px] sm:text-[17px] lg:text-[20px] font-semibold text-white rounded-xl lg:rounded-lg  w-fit">
							<div className="mx-auto px-[70px] sm:px-[101px] lg:px-[193.15px] flex space-x-[10px] lg:space-x-[20px]">
								<img
									src="../icons/eye.svg"
									className=""
									alt=""
								/>
								<p className="py-[14px] lg:py-[22px] lg:text-center">Preview Letter</p>
							</div>
						</div>
					</Link>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	);
};

export default WriteComplaintPage;
