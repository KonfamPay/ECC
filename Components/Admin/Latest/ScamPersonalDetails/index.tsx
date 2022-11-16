import PersonalInfoInputs from "./../ScamOperation/PersonalInfoInputs/index";
import { useState, useEffect } from "react";

interface PersonalDetailsProps {
	scamData: any;
}

const ScamPersonalDetails: React.FC<PersonalDetailsProps> = ({ scamData }) => {
	const [Data, setData] = useState({});
	const [editMode, setEditMode] = useState(false);

	const saveInformation = () => {
		console.log(Data);
	};

	return (
		<div className="mt-[20px]">
			{!editMode && scamData && Object.keys(scamData).length > 0 && (
				<div className=" mx-auto w-[80%] grid grid-cols-2 h-[60vh] overflow-y-scroll justify-items-start">
					<div className="  flex mb-[10px] flex-col ">
						<p className="font-regular  text-eccblue text-[18px] border-b border-b-[#c5c5c5] w-[322px] ">Name</p>

						<p>{scamData.scammer}</p>
					</div>
					<div className="  flex mb-[10px] flex-col ">
						<p className="font-regular text-eccblue text-[18px] border-b border-b-[#c5c5c5] w-[322px] ">Email Address</p>
						<p>{scamData.scammer}</p>
					</div>
					<div className="  flex mb-[10px] flex-col ">
						<p className="font-regular text-eccblue text-[18px] border-b border-b-[#c5c5c5] w-[322px] ">Bank Details</p>
						<div>
							{Object.keys(scamData.bankAccountDetails).map((input: string) => (
								<p>{scamData.bankAccountDetails[input]}</p>
							))}
						</div>
					</div>
					<div className="  flex mb-[10px] flex-col ">
						<p className="font-regular border-b border-b-[#c5c5c5] w-[322px] text-eccblue text-[18px] ">Website URL</p>
						<div>
							{Object.keys(scamData.website).map((input: string) => (
								<p>{scamData.website[input]}</p>
							))}
						</div>
					</div>
					<div className="  flex mb-[10px] flex-col ">
						<p className="font-regular text-eccblue border-b border-b-[#c5c5c5] w-[322px] text-[18px] ">Phone Number</p>
						<div>
							{Object.keys(scamData.phoneNumber).map((input: string) => (
								<p>{scamData.phoneNumber[input]}</p>
							))}
						</div>
					</div>

					<div className=" flex mb-[10px] flex-col ">
						<p className="font-regular border-b border-b-[#c5c5c5] w-[322px] text-eccblue text-[18px] ">Social Media Hanlde</p>
						<div>
							{Object.keys(scamData.socialMediaHandle).map((input: string) => (
								<p>{scamData.socialMediaHandle[input]}</p>
							))}
						</div>
					</div>
				</div>
			)}

			{editMode && scamData && Object.keys(scamData).length > 0 && (
				<PersonalInfoInputs
					SocialMediaInputValues={scamData.socialMediaHandle}
					SocialMediaInputs={Object.keys(scamData.socialMediaHandle)}
					BankDetailsValues={scamData.bankAccountDetails}
					BankDetailsInput={Object.keys(scamData.bankAccountDetails)}
					PhoneNumberInputValues={scamData.phoneNumber}
					Name={scamData.scammer}
					Email={scamData.scammer}
					PhoneNumberInputs={Object.keys(scamData.phoneNumber)}
					WebsiteInputValues={scamData.website}
					WebsiteInputs={Object.keys(scamData.website)}
					setData={setData}
				/>
			)}
			<div
				onClick={() => (editMode ? saveInformation() : setEditMode(true))}
				className="w-full flex items-center justify-center "
			>
				<button className="bg-eccblue w-[50%] text-white text-center text-[16px] mx-auto mb-4 py-2 rounded-md">{editMode ? "Save Information" : "Edit Information"}</button>
			</div>
		</div>
	);
};

export default ScamPersonalDetails;
