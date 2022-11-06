import UserData from "../../../../Components/Admin/userData";
import ComplaintData from "../../../../Components/Complaint/ComplaintData";
import { useRouter } from "next/router";
import Wrapper from "../../../../Components/Admin/Navs/navWrapper";
import { useState, useEffect } from "react";
import UserPersonalInfo from "../../../../Components/Admin/ManageUsers/userPersonalInfo";
import ComplaintInfo from "./../../../../Components/Admin/ManageUsers/UserComplaintInfo/index";
import ComplaintDetails from "./../../../../Components/Admin/Complaints/ComplaintDetails/complaintDetails";

const userDetails = () => {
	const router = useRouter();
	const grievanceId = router.query.id;
	const [complaint, setComplaint] = useState({});
	const [user, setUser] = useState({});

	useEffect(() => {
		if (grievanceId) {
			const complaint = ComplaintData.filter((currentComplaint: any) => currentComplaint.grievanceId == grievanceId)[0];
			const user = UserData.filter((currentUser: any) => currentUser.complaints.find((id: string) => id == grievanceId))[0];
			if (complaint) {
				setComplaint(complaint);
			}
			if (user) {
				setUser(user);
			}
		}
	}, [grievanceId]);

	return (
		<Wrapper>
			<div
				className="w-full h-full
			 bg-white rounded-[15px] lg:pt-[0px]  lg:overflow-hidden"
			>
				<div className="py-[20px] flex flex-row gap-4 pl-4 w-full  bg-eccblue">
					<img
						src="/icons/arrow.svg"
						onClick={() => {
							router.back();
						}}
						alt=""
					/>
					<p className="text-[24px] font-medium poppinsFont text-white">Complaint Details</p>
				</div>

				<div className="w-full ">
					{user && complaint && (
						<div>
							<ComplaintDetails
								user={user}
								complaint={complaint}
							/>
						</div>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default userDetails;
