import { useState } from "react";
import DeleteReplyButton from "../../Complaints/ComplaintDetails/DeleteReplyButton";
import DetailsComponent from "./ComplaintDetailsComp/index";
type Complaint = {
	id: string;
	grievanceId: string;
	title: string;
	description: string;
	date: string;
	socialMediaHandle: string;
	status: string;
	productCategory: string;
	resolutionWanted: {
		refund: boolean;
		compensation: boolean;
		apology: boolean;
		replacement: boolean;
	};
	companyName: string;
	amountLost: string;
	transactionLocation: string;
};
interface ComplaintDetailsProps {
	complaints: Array<Complaint>;
	setShowing: any;
}

const ScamComplaintDetails: React.FC<ComplaintDetailsProps> = ({ complaints, setShowing }) => {
	const [isEdit, setIsEdit] = useState(false);

	return (
		<div className="flex flex-col items-center">
			<div className="h-[60vh] w-full overflow-y-scroll ">
				{complaints.map((complaint: Complaint) => (
					<DetailsComponent
						key={complaint.id}
						isEdit={isEdit}
						complaint={complaint}
					/>
				))}
			</div>

			<div className="flex items-center justify-center py-4 ">
				{!isEdit ? (
					<DeleteReplyButton
						clearBorderColour="border-eccblue"
						filledButtonTextIcon=""
						clearButtonBgColour="bg-white"
						clearButtonTextColour="text-eccblue"
						filledButtonText="Add new complaint"
						clearButtonText="Edit Information"
						clearButtonIcon=""
						onClickDelete={() => setIsEdit(true)}
						onClickReply={() => {
							setShowing(true);
						}}
					/>
				) : (
					<button className="w-[300px] h-[40px] rounded-md bg-eccblue text-white">Save Information</button>
				)}
			</div>
		</div>
	);
};

export default ScamComplaintDetails;
