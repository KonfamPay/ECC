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
	productCategory: string;
	setProductCategory: Dispatch<SetStateAction<string>>;
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
	productCategory,
	setProductCategory,
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
		<div className={`mt-[20px] lg:mt-[90px] ${place === "dashboard" && "bg-white mt-0 lg:mt-0 px-[12px] lg:px-3 py-[30px]"}`}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[32px] gap-y-[16px]">
				<FileAComplaintInput
					label={"Product Category"}
					placeholder={"e.g Gadgets, footwear etc"}
					value={productCategory}
					setValue={setProductCategory}
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
					label={"Title of your complaint"}
					placeholder={"e.g Package not delivered"}
					value={titleOfComplaint}
					setValue={setTitleOfComplaint}
					type="text"
					nairaSymbol={false}
				/>
				<FileAComplaintInput
					label={"Total amount lost from this incident"}
					placeholder={"Enter Amount"}
					value={amountLost}
					setValue={setAmountLost}
					type="number"
					nairaSymbol={true}
				/>
				<FileAComplaintInput
					label={"Company’s/Brand’s name"}
					placeholder={"Enter Email Address"}
					value={companyName}
					setValue={setCompanyName}
					type="text"
					nairaSymbol={false}
				/>
				<FileAComplaintInput
					label={"Company’s/Brand’s Social media handle"}
					placeholder={"e.g @itzadetunji on instagram"}
					value={brandHandle}
					setValue={setBrandHandle}
					type="text"
					nairaSymbol={false}
				/>
			</div>
			<div className="w-full mt-6">
				<div className="flex flex-row space-x-[10px] pb-[10px]">
					<p className="text-[14px] lg:text-[20px]">Complaint details</p>
					<img
						src="../icons/fac-help.svg"
						alt=""
						className="cursor-pointer w-[21px] h-[21px] lg:w-[28px] lg:h-[28px]"
					/>
				</div>
				<textarea
					value={complaintDetails}
					onChange={(e) => setComplaintDetails(e.target.value)}
					id=""
					className="transition-[150ms] pt-[14.74px] lg:pt-[25px] pb-[135px] xl:pt-[25px] xl:pb-[146px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] w-full focus:border-eccblue text-[12px] sm:text-[14px] lg:text-[16px] placeholder:text-[#C5C5C5] placeholder:text-[12px] sm:placeholder:text-[14px] lg:placeholder:text-[16px] px-[20px] resize-none"
					placeholder="Explain in details your grievances, include Date, Location, Name of Item and any other vital information you think might help us resolve this complaint"
				/>
			</div>
			<div className="mt-6 flex flex-col justify-center">
				<div className="flex flex-row items-start justify-items-start text-[14px] sm:text-[16px] lg:text-xl xl:text-2xl">
					<span className="text-eccblue font-semibold">NOTE:</span>
					<div className="ml-1 inline">
						<p className="inline">If you believe that you have been scammed, click</p>
						<div
							className="inline-flex items-center ml-[4px] lg:ml-2 cursor-pointer"
							onClick={() => {
								setShowing(!showing);
							}}
						>
							<p className="text-eccblue inline">here</p>
							<img
								src="../icons/chevron-down.svg"
								className={`w-[22px] h-[22px] lg:w-[30px] lg:h-[30px] ${showing && "rotate-180"}`}
								alt=""
							/>
						</div>
					</div>
				</div>
				{showing && (
					<div className="mt-[20px] lg:mt-[51.46px]">
						<h1 className="font-semibold text-[14px] lg:text-[20px] xl:text-[24px] mb-[20px] opacity-80">Kindly fill in these additional fields</h1>
						<div className=" flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[32px] gap-y-[16px] ">
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
			<div className="flex justify-end mt-[40px] lg:mt-[80px] mr-[30px] lg:mr-[120px]">
				<button
					onClick={onSubmit}
					className="text-[14px] lg:text-[20px] bg-eccblue mt-[40px] lg:mt-[80px] rounded-xl font-[600] text-white py-[14.5px] lg:py-[22px] w-full max-w-[140px] lg:max-w-[216px]"
					type="submit"
				>
					Continue
				</button>
			</div>
		</div>
	);
};
export default Page1;
