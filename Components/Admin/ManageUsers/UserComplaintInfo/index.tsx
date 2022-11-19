import ComplaintData from "./../../../Complaint/ComplaintData";
import { useRouter } from "next/router";

import ComplaintCard from "./userComplaintCard/index";
import { ComplainDetailType, User } from "./../../../../types/complaintTypes.d";

interface ComplaintProps {
	user: User;
}

const ComplaintInfo: React.FC<ComplaintProps> = ({ user }) => {
	const router = useRouter();
	const complaints = user.complaints;
	const listOfComplaints: ComplainDetailType[] = [];
	complaints.forEach((grievanceId: string) => {
		const complaint = ComplaintData.find((complaint) => complaint.grievanceId == grievanceId);
		if (complaint) {
			listOfComplaints.push(complaint);
		}
	});
	const pendingComplaints = listOfComplaints.filter((complaint: ComplainDetailType) => complaint.status == "Pending");
	const openComplaints = listOfComplaints.filter((complaints: ComplainDetailType) => complaints.status == "Open");
	const closedComplaints = listOfComplaints.filter((complaints: ComplainDetailType) => complaints.status == "Closed");
	const resolvedComplaints = listOfComplaints.filter((complaints: ComplainDetailType) => complaints.status == "Resolved");
	return (
		<div className="w-full ffflex flex-col items-center">
			<div className=" w-full pt-[30px] pb-[30px]  justify-around flex flex-row">
				<ComplaintCard
					text="Total Complaints"
					textColor="text-[#0B63C5]"
					backGround="bg-[#F1F7FE]"
					numberText={listOfComplaints.length}
					icon="./../../../icons/admin-icons/blueFile.svg"
				/>
				<ComplaintCard
					text="Complaints Resolved"
					textColor="text-[#008000]"
					backGround="bg-[#BDFFBD]"
					numberText={resolvedComplaints.length}
					icon="./../../../icons/admin-icons/greenFile.svg"
				/>
				<ComplaintCard
					text="Complaints Open"
					textColor="text-[#EF2E2E]"
					backGround="bg-[#FFBDBD]"
					numberText={openComplaints.length}
					icon="./../../../icons/admin-icons/redFile.svg"
				/>
				<ComplaintCard
					text="Complaints Pending"
					textColor="text-[#FFB330]"
					backGround="bg-[#FFFCB5]"
					numberText={pendingComplaints.length}
					icon="./../../../icons/admin-icons/yellowFile.svg"
				/>
			</div>

			<div className="w-full">
				<table className=" table-auto w-full">
					<tbody>
						{listOfComplaints.map((complaint: ComplainDetailType) => (
							<tr
								onClick={() => {
									router.push({ pathname: "/admin/complaints/details", query: { id: complaint.grievanceId } });
								}}
								key={complaint.grievanceId}
							>
								<td>
									<p className="py-2 pl-2 pr-4">{listOfComplaints.indexOf(complaint) + 1}</p>
								</td>
								<td>
									<p>{complaint.title.split(" ").slice(0, 6).join(" ")}</p>
								</td>
								<td>
									<div className="flex flex-row text-eccblue gap-x-2 items-center">
										<p>Grievance ID:</p>
										<p>{complaint.grievanceId}</p>
									</div>
								</td>
								<td>
									<p>{complaint.date}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ComplaintInfo;
