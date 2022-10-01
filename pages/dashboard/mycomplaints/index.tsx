import type { NextPage } from "next";
import ComplaintsNavBar from "../../../Components/DashboardComponents/DashboardProfile/ComplaintsNavBar";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import { useState } from "react";
import ComplaintList from "../../../Components/DashboardComponents/DashboardProfile/ComplaintList";

const mycomplaints: NextPage = (props) => {
	const [page, setPage] = useState("All");
	return (
		<NavWrapper>
			<div className="bg-white h-full mb-10">
				<ComplaintsNavBar
					page={page}
					setPage={setPage}
				/>
				<ComplaintList page={page} />
			</div>
		</NavWrapper>
	);
};

export default mycomplaints;
