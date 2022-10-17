import Wrapper from "../../../Components/Admin/Navs/navWrapper";
import ComplaintsNavBar from "../../../Components/DashboardComponents/DashboardProfile/ComplaintsNavBar";
import { useState } from "react";
import UserData from "../../../Components/Admin/userData";
import ComplaintData from "../../../Components/Complaint/ComplaintData";
import ComplaintPill from "../../../Components/Admin/Complaints/ComplaintPill";

import { format } from "date-fns";

const Complaints = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [page, setPage] = useState("All");
	const [date, setDate] = useState(format(new Date(Date.now()), "yyyy-MM-dd"));
	const ComplaintList = page == "All" ? ComplaintData.filter((complaint: any) => complaint.date == date) : ComplaintData.filter((complaint) => complaint.status == page && complaint.date == date);

	return (
		<Wrapper>
			<div>
				<ComplaintsNavBar
					setPage={setPage}
					page={page}
					setPageNumber={setPageNumber}
				/>
				<div className="w-full flex flex-row justify-end">
					<input
						type="date"
						value={date}
						onChange={(e) => {
							setDate(e.currentTarget.value);
						}}
						id=""
					/>
				</div>
				<div>
					<h1 className="my-6 text-[28px] font-semibold text-eccblue">{date == format(new Date(Date.now()), "yyyy-MM-dd") ? "Today" : date}</h1>
					{ComplaintList.length > 0 &&
						UserData.length > 0 &&
						ComplaintList.map((complaint: any) => (
							<ComplaintPill
								complaint={complaint}
								users={UserData}
							/>
						))}
				</div>
			</div>
		</Wrapper>
	);
};

export default Complaints;
