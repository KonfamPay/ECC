import type { NextPage } from "next";
import ComplaintsNavBar from "../../../Components/DashboardComponents/DashboardProfile/ComplaintsNavBar";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";

const mycomplaints: NextPage = (props) => {
	return (
		<NavWrapper>
			<div className="">
				<ComplaintsNavBar />
			</div>
		</NavWrapper>
	);
};

export default mycomplaints;
