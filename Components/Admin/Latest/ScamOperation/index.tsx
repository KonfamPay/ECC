import { useState } from "react";
import ScamInput from "./ScamInputGroup";
interface ScamOperationProps {
	setShowing: any;
	action: string;
}

const ScamOperation: React.FC<ScamOperationProps> = ({ setShowing, action }) => {
	const [section, setSection] = useState("Personal Information");
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [bankDetails, setBankDetails] = useState("");
	const [website, setWebsite] = useState("");
	const [phone, setPhone] = useState("");
	const [report, setReport] = useState("");
	const [socialMediaHandle, setSocialMediaHandle] = useState("");
	const [selectedFile, setSelectedFile] = useState({});

	const fileSelectHandler = (e: any) => {};
	return (
		<div className="w-[80%] bg-transparent fixed  z-40 h-full flex flex-col  items-center  ">
			<div className="w-full h-auto pb-[60px]">
				<div className="bg-eccblue flex items-center px-3 rounded-t-[20px] w-[90%] h-[50px] justify-end ">
					<div
						className=" cursor-pointer justify-self-end "
						onClick={() => setShowing(false)}
					>
						<img
							className="w-[25px] h-[25px]"
							src="../../Icons/admin-icons/x-close.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="bg-white w-[90%] h-auto pb-6 border border-[#c5c5c5] rounded-b-[20px]  shadow-lg ">
					<div className="w-auto border flex text-[#848484] flex-row justify-evenly mt-[10px] border-x-0 border-t-0 border-b border-b-[#dcdcdc]">
						<div
							onClick={() => {
								setSection("Personal Information");
							}}
							className={`w-[315px] cursor-pointer h-auto flex transition-[3000ms] justify-center items-center  text-[20px] ${section == "Personal Information" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Personal Information
						</div>
						<div
							onClick={() => setSection("Complaint History")}
							className={`w-[315px] cursor-pointer h-auto flex items-center justify-center transition-[3000ms]  text-[20px] ${section == "Complaint History" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Complaint History
						</div>
					</div>
					{section == "Personal Information" && (
						<div className="w-full mt-4 ">
							<div className=" grid grid-cols-2  justify-items-center ">
								<ScamInput
									label="Name"
									value={name}
									setValue={setName}
									errors={""}
								/>
								<ScamInput
									label="Email Address"
									value={email}
									setValue={setEmail}
									errors={""}
								/>
								<ScamInput
									label="Bank Details"
									value={bankDetails}
									setValue={setBankDetails}
									errors={""}
								/>
								<ScamInput
									label="Website URL"
									value={website}
									setValue={setWebsite}
									errors={""}
								/>
								<ScamInput
									label="Phone Number"
									value={phone}
									setValue={setPhone}
									errors={""}
								/>
								<ScamInput
									label="Social Media Handle"
									value={socialMediaHandle}
									setValue={setSocialMediaHandle}
									errors={""}
								/>
							</div>
						</div>
					)}
					{section == "Complaint History" && (
						<div className="h-full w-full flex flex-col items-center">
							<div className="w-[70%] ">
								<div className="w-full mb-[30px]">
									<h1 className=" mb-[10px] w-full border-b border-b-[#c5c5c5] text-eccblue text-[18px]">Report</h1>
									<textarea
										className="w-full h-[100px] bg-white resize-none border  focus:border-eccblue focus:outline-none p-4 rounded-md "
										value={report}
										placeholder="write a report"
										onChange={(e) => {
											setReport(e.currentTarget.value);
										}}
									></textarea>
								</div>
								<div className="w-full">
									<h1 className=" mb-[10px] w-full border-b border-b-[#c5c5c5] text-eccblue text-[18px]">Upload Files</h1>

									<label htmlFor="file-input">
										<div className="border w-[70px] cursor-pointer hover:scale-110 h-[70px] rounded-md flex justify-center items-center border-dashed border-eccblue">
											<img
												src="../Icons/admin-icons/plusButton.svg"
												alt=""
											/>
										</div>
									</label>
									<input
										id="file-input"
										type="file"
										className="bg-eccblue hidden"
										onChange={(e) => fileSelectHandler(e)}
									/>
								</div>
							</div>
						</div>
					)}
					<div className="w-full flex items-center">
						<button className="bg-eccblue rounded-md w-[40%] mx-auto mt-[10px] text-center text-white h-[40px] ">Save Information</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScamOperation;
