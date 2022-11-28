import type { NextPage } from "next";
import { Footer, NavBar } from "../../Components";
import { useState } from "react";

const WriteComplaintPreview: NextPage = () => {
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
				<div className="mt-[84px]">
					<div>
						<p className="text-7 font-medium">Review your complaint letter</p>
						<p className="mt-7 text-[20px] leading-[30px]">Your complaint letter has been generated based on the information you provided. Please review it carefully. Remember to provide the business with the evidence you listed in the letter. If you don’t have an email address for the business, you should be able to find one on their website or send it via their social media handle.</p>
					</div>
					<div className="mt-[26px]">
						<p className="text-[24px]">Complaint Subject</p>
						<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
							<p className="px-[20px] py-[29px] text-[20px]">Complaint about (SAMPLE) product or service name purchased on (SAMPLE) date from (SAMPLE) the place of purchase</p>
						</div>
					</div>
					<div className="mt-[66px]">
						<p className="text-[24px]">Complaint Content</p>
						<div className="border-2 border-eccblue rounded-[30px] rounded-tl-none mt-[19px]">
							<div className="px-[30px] pt-[37px] pb-[62px] text-[20px] flex flex-col space-y-[50px]">
								<p>To whom it may concern</p>
								<p>On (SAMPLE) date, I purchased (SAMPLE) product or service name from (SAMPLE) the place of purchase.</p>
								<p>(SAMPLE) Explain what the problem is and what you have done so far to resolve it.</p>
								<p>I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
								<p>(SAMPLE) Explain what evidence you are providing to support your complaint, such as your proof of purchase or photographs of the faulty product (you can include this when you send the letter).</p>
								<p>(SAMPLE) What would you like the business to do to resolve the issue?</p>
								<p>
									If I do not hear from you within 5 working days I will lodge a formal complaint with e-commerce complaints <span className="font-bold">(ecc)</span>
								</p>
								<p>You can contact me about this complaint via email at (SAMPLE) your email or call me on (SAMPLE) phone number during business hours.</p>
								<p>Thank you for your assistance in this matter.</p>
								<div>
									<p>Regards</p>
									<p>(SAMPLE) Your name</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-[79px] mb-[100px]">
						<div className="flex flex-row justify-between text-white">
							<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
								<img
									src="../icons/arrow.svg"
									alt=""
								/>
								<p>Back</p>
							</div>
							<div className="flex space-x-[17px]">
								<div className="flex bg-eccblue text-center space-x-[20px] px-[20px] py-[22px] rounded-xl">
									<img
										src="../icons/email.svg"
										alt=""
									/>
									<p>Send as email</p>
								</div>
								<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
									<img
										src="../icons/copy.svg"
										alt=""
									/>
									<p>Copy</p>
								</div>
								<div className="flex bg-eccblue space-x-[20px] px-[25px] py-[22px] rounded-xl">
									<img
										src="../icons/print.svg"
										alt=""
									/>
									<p>Print</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default WriteComplaintPreview;
