import type { NextPage } from "next";
import ProfileCard from "../../../Components/DashboardComponents/DashboardProfile/ProfileCard";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../../Sections/ComplaintsCardSection";

const profile: NextPage = (props) => {
	return (
		<NavWrapper>
			<div className="grid grid-cols-[auto_438px] gap-x-[50px] w-full">
				<ProfileCard />
				<ComplaintsCardSection />
			</div>
		</NavWrapper>
	);
};

export default profile;
