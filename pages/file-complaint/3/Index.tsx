import type { NextPage } from "next";
import { useState } from "react";
import FileAComplaintProcess from "../../../Components/FileAComplaintComponents/FileAComplaintProcess";
import { Footer, NavBar } from "../../../Components";
import FileAComplaintRadio from "../../../Components/FileAComplaintComponents/FileAComplaintRadio";
import SuccessModal from "../../../Components/FileAComplaintComponents/SuccessModal";
import ComplaintLetterSection from "../../../Components/FileAComplaintComponents/ComplaintLetterSection";

const Index: NextPage = () => {
	const [resolution, setResolution] = useState("");
	const [successModalShowing, setSuccessModalShowing] = useState(false);
	return (
		<>
			{successModalShowing && (
				<SuccessModal
					setSuccessModalShowing={setSuccessModalShowing}
					grievanceId="423576275442ecc"
				/>
			)}
			<NavBar />
			<ComplaintLetterSection />
			<div className="mx-[100px] mt-[72px] mb-[147px]">
				<div className="mx-auto text-center">
					<p className="text-[40px] font-[500]">File a Complaint</p>
					<p className="text-eccblue text-[20px] mt-[20px]">Allow ecommerce complaint help you in your fight aginst online fraud </p>
				</div>
				<div className="mt-[90px] mx-[112.25px]">
					<div className="flex flex-wrap space-x-[100px]">
						<FileAComplaintProcess
							number={1}
							text={"Complaint Info"}
							active={true}
						/>
						<FileAComplaintProcess
							number={2}
							text={"Upload Document"}
							active={true}
						/>
						<FileAComplaintProcess
							number={3}
							text={"Complaint Info"}
							active={true}
						/>
					</div>
				</div>
				<div className="mt-[90px]">
					<div>
						<p className="text-[24px] font-[400]">Kindly let us know what you want the end of this process.</p>
					</div>
					<form action="">
						<div className="grid grid-cols-2 gap-x-[20px] gap-y-[58px] mt-[60px]">
							<div className="relative">
								<FileAComplaintRadio
									iconPath={"refund"}
									title={"A Refund"}
									description={"All expenses incurred will be returned to you"}
								/>
								<input
									type="radio"
									name=""
									id=""
									className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
								/>
							</div>
							<div className="relative">
								<FileAComplaintRadio
									iconPath={"compensation"}
									title={"A Compensation"}
									description={"You will be compensated by the company"}
								/>
								<input
									type="radio"
									name=""
									id=""
									className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
								/>
							</div>
							<div className="relative">
								<FileAComplaintRadio
									iconPath={"apology"}
									title={"An Apology"}
									description={"You will recieve a formal apology"}
								/>
								<input
									type="radio"
									name=""
									id=""
									className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
								/>
							</div>
							<div className="relative">
								<FileAComplaintRadio
									iconPath={"replacement"}
									title={"A Replacement"}
									description={"Your item will be replaced with the right one"}
								/>
								<input
									type="radio"
									name=""
									id=""
									className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
								/>
							</div>
						</div>
						<div className="flex space-x-[26px] mt-[71px]">
							<input
								type="radio"
								name=""
								id=""
								className="w-[24px] h-[24px] mt-[3px]"
							/>
							<p className="text-[20px]">
								I agree with the <span className="text-eccblue"> Terms & Conditions</span>
							</p>
						</div>
						<button
							className="bg-eccblue mt-[110px] mx-[334px] w-[572.15px] rounded-xl text-[20px] font-[600] text-white py-[22px]"
							type="submit"
						>
							Continue
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Index;
