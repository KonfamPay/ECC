import { Dispatch, SetStateAction, useState } from "react";
import FileAComplaintInput from "../FileAComplaintInput";
interface Page1Props {
	place: string;
	accountNumber: string;
	accountName: string;
	bankName: string;
	setBankName: Dispatch<SetStateAction<string>>;
	setAccountNumber: Dispatch<SetStateAction<string>>;
	setAccountName: Dispatch<SetStateAction<string>>;
	titleOfComplaint: string;
	setTitleOfComplaint: Dispatch<SetStateAction<string>>;
	placeOfTransaction: string;
	setPlaceOfTransaction: Dispatch<SetStateAction<string>>;
	companyName: string;
	setCompanyName: Dispatch<SetStateAction<string>>;
	amountLost: string;
	setAmountLost: Dispatch<SetStateAction<string>>;
	brandContact: string;
	setBrandContact: Dispatch<SetStateAction<string>>;
	complaintDetails: string;
	setComplaintDetails: Dispatch<SetStateAction<string>>;
	brandHandle: string;
	setBrandHandle: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	setIsOpaque: Dispatch<SetStateAction<boolean>>;
}

const Page1: React.FC<Page1Props> = ({
	place,
	accountNumber,
	accountName,
	bankName,
	setAccountName,
	setAccountNumber,
	setBankName,
	titleOfComplaint,
	setTitleOfComplaint,
	placeOfTransaction,
	setPlaceOfTransaction,
	companyName,
	setCompanyName,
	amountLost,
	setAmountLost,
	brandContact,
	setBrandContact,
	complaintDetails,
	setComplaintDetails,
	brandHandle,
	setBrandHandle,
	setCurrentPage,
	setIsOpaque,
}) => {
	const onSubmit = () => {
		setIsOpaque(false);
		setTimeout(() => {
			setIsOpaque(true);
			setCurrentPage(2);
		}, 300);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	const [showing, setShowing] = useState(false);
	return (
		<div className={`mt-[20px] lg:mt-[90px] ${place === "dashboard" && "bg-white mt-0 lg:mt-0 px-4 py-6"}`}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[66px] gap-y-[30px]">
				<FileAComplaintInput
					label={"Title of your complaint"}
					placeholder={"e.g Package not delivered"}
					value={titleOfComplaint}
					setValue={setTitleOfComplaint}
					type="text"
					nairaSymbol={false}
				/>
				<FileAComplaintInput
					label={"Where did this transaction happen?"}
					placeholder={"e.g Facebook, Instagram, Twiiter, offline . If other please specify"}
					value={placeOfTransaction}
					setValue={setPlaceOfTransaction}
					type="text"
					nairaSymbol={false}
				/>
				<FileAComplaintInput
					label={"Company’s/Brand’s name"}
					placeholder={"Enter Email Address"}
					value={companyName}
					setValue={setCompanyName}
					type="text"
					nairaSymbol={false}
				/>
				<div>
					<FileAComplaintInput
						label={"Total amount lost from this incident"}
						placeholder={"Enter Amount"}
						value={amountLost}
						setValue={setAmountLost}
						type="number"
						nairaSymbol={true}
					/>
				</div>
			</div>
			<div className="grid lg:grid-cols-2 grid-flow-row gap-x-[66px] gap-y-[30px] mt-[30px]">
				<div className="">
					<FileAComplaintInput
						label={"Company’s/Brand’s Contact (Email/Phone)"}
						placeholder={"Enter Contact"}
						value={brandContact}
						setValue={setBrandContact}
						type="number"
						nairaSymbol={false}
					/>
				</div>
				<div className="row-span-2 col-span-1">
					<div className="flex flex-row space-x-[13px] pb-[10px]">
						<p className="text-[14px] lg:text-[20px]">Complaint details</p>
						<img
							src="./icons/fac-help.svg"
							alt=""
							className="cursor-pointer"
						/>
					</div>
					<textarea
						value={complaintDetails}
						onChange={(e) => setComplaintDetails(e.target.value)}
						id=""
						className="transition-[150ms] pt-[14.74px] lg:pt-[25px] pb-[135px] xl:pt-[25px] xl:pb-[146px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] w-full focus:border-eccblue text-[12px] lg:text-[16px] placeholder:text-[#C5C5C5] placeholder:text-[12px] lg:placeholder:text-[16px] px-[20px] resize-none"
						placeholder="Explain in details your grievances, include Date, Location, Name of Item and any other vital information you think might help us resolve this complaint"
					/>
				</div>
				<div className="">
					<FileAComplaintInput
						label={"Company’s/Brand’s Social media handle"}
						placeholder={"e.g @itzadetunji on instagram"}
						value={brandHandle}
						setValue={setBrandHandle}
						type="text"
						nairaSymbol={false}
					/>
				</div>
			</div>
			<div className="mt-6 flex flex-col">
				<div className="flex flex-row">
					<div className="flex flex-row">
						<p className="text-eccblue ">NOTE:</p>
						<p className="ml-2">if you believe that you have been scammed,click</p>
					</div>
					<div
						onClick={() => {
							setShowing(!showing);
						}}
						className="flex flex-row"
					>
						<p className="text-eccblue ml-2">here</p>
						{showing ? (
							<img
								className="transition-[1000ms] w-[15px]"
								src="../icons/chevron-down.svg"
								alt=""
							/>
						) : (
							<img
								className=" transition-[1000ms] ml-[3px] w-[12px]"
								src="../icons/chevron-up.svg"
								alt=""
							/>
						)}
					</div>
				</div>
				{showing && (
					<div>
						<h1 className="font-semibold my-8">Kindly fill in these additional fields</h1>
						<div className=" flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[66px] gap-y-[30px] ">
							<FileAComplaintInput
								label={"Company's/Brand's Account Number"}
								placeholder={"eg 2354556334"}
								value={accountNumber}
								setValue={setAccountNumber}
								type="text"
								nairaSymbol={false}
							/>
							<FileAComplaintInput
								label={"Company's/Brand's Account Name"}
								placeholder={"e.g John Doe"}
								value={accountName}
								setValue={setAccountName}
								type="text"
								nairaSymbol={false}
							/>
							<FileAComplaintInput
								label={"Company's/Brand's Bank Name"}
								placeholder={"e.g First Bank,Zenith Bank"}
								value={bankName}
								setValue={setBankName}
								type="text"
								nairaSymbol={false}
							/>
						</div>
					</div>
				)}
			</div>
			<div className="flex justify-center mt-[45px] lg:mt-[110px]">
				<button
					onClick={onSubmit}
					className="bg-eccblue w-[340px] lg:w-[572.15px] rounded-xl text-[20px] font-[600] text-white py-[14.5px] lg:py-[22px]"
					type="submit"
				>
					Continue
				</button>
			</div>
		</div>
	);
};
export default Page1;
