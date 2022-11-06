import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FileAComplaintRadio from "../FileAComplaintRadio";
import SuccessModal from "../SuccessModal";

interface Page3Props {
	place: string;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	wantsRefund: boolean;
	wantsApology: boolean;
	wantsCompensation: boolean;
	wantsReplacement: boolean;
	termsAndConditions: boolean;
	setWantsApology: Dispatch<SetStateAction<boolean>>;
	setWantsCompensation: Dispatch<SetStateAction<boolean>>;
	setWantsReplacement: Dispatch<SetStateAction<boolean>>;
	setWantsRefund: Dispatch<SetStateAction<boolean>>;
	setTermsAndConditions: Dispatch<SetStateAction<boolean>>;
}

const Page3: React.FC<Page3Props> = ({ place, setCurrentPage, wantsRefund, wantsApology, wantsCompensation, wantsReplacement, setWantsRefund, setWantsApology, setWantsCompensation, setWantsReplacement, termsAndConditions, setTermsAndConditions }) => {
	const [successModalShowing, setSuccessModalShowing] = useState(false);
	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSuccessModalShowing(true);
	};
	useEffect(() => {
		if (successModalShowing == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [successModalShowing]);
	return (
		<div className={`mt-[90px] ${place === "dashboard" && "bg-white mt-0 lg:mt-0 px-4 py-6"}`}>
			{successModalShowing && (
				<SuccessModal
					setSuccessModalShowing={setSuccessModalShowing}
					grievanceId="423576275442ecc"
				/>
			)}
			<div>
				<p className="text-[14px] lg:text-[24px] leading-[21px] lg:leading-[37px] font-[400]">Kindly let us know what you want the end of this process.</p>
			</div>
			<form action="">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[16px] lg:gap-y-[58px] mt-[60px]">
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"refund"}
							title={"A Refund"}
							description={"All expenses incurred will be returned to you"}
							value={wantsRefund}
							setValue={setWantsRefund}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"compensation"}
							title={"A Compensation"}
							description={"You will be compensated by the company"}
							value={wantsCompensation}
							setValue={setWantsCompensation}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"apology"}
							title={"An Apology"}
							description={"You will recieve a formal apology"}
							value={wantsApology}
							setValue={setWantsApology}
						/>
					</div>
					<div className="relative">
						<FileAComplaintRadio
							iconPath={"replacement"}
							title={"A Replacement"}
							description={"Your item will be replaced with the right one"}
							value={wantsReplacement}
							setValue={setWantsReplacement}
						/>
					</div>
				</div>
				<div className="flex gap-x-[26px] mt-[71px] w-full">
					<div
						onClick={() => setTermsAndConditions(!termsAndConditions)}
						style={{
							borderColor: termsAndConditions ? "#005cc8" : "#4f4f4f",
						}}
						className="transition-[80ms] cursor-pointer w-[30px] h-[30px]  border rounded-full bg-transparent flex items-center justify-center"
					>
						<div
							style={{ opacity: termsAndConditions ? 1 : 0 }}
							className="transition-[80ms] w-[18px] h-[18px] bg-[#005cc8] rounded-full"
						></div>
					</div>
					<p className="text-[20px]">
						I agree with the <span className="text-eccblue"> Terms & Conditions</span>
					</p>
				</div>
				<div className="flex justify-end space-x-[30px] lg:space-x-[37px]">
					<button
						onClick={() => setCurrentPage(2)}
						className="text-[14px] lg:text-[20px] bg-eccblue mt-[40px] lg:mt-[80px] rounded-xl font-[600] text-white py-[14.5px] lg:py-[22px] w-full max-w-[140px] lg:max-w-[216px]"
						type="submit"
					>
						Back
					</button>
					<button
						style={{ opacity: termsAndConditions ? 1 : 0.6 }}
						disabled={!termsAndConditions}
						onClick={onSubmit}
						className="text-[14px] transition-[150ms] lg:text-[20px] bg-eccblue mt-[40px] lg:mt-[80px] rounded-xl font-[600] text-white py-[14.5px] lg:py-[22px] w-full max-w-[140px] lg:max-w-[216px]"
						type="submit"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default Page3;
