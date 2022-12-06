import type { NextPage } from "next";
import ProfileCard from "../../../Components/DashboardComponents/DashboardProfile/ProfileCard";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../../Sections/ComplaintsCardSection";

const Profile: NextPage = () => {
	return (
		<div>
			<NavWrapper>
				<div className="">
					<div className="lg:block hidden">
						<div className="grid grid-cols-[auto_438px] gap-x-[50px] w-full">
							<ProfileCard />
							<ComplaintsCardSection />
						</div>
					</div>

					<div className="lg:hidden">
						<ProfileCard />
					</div>
				</div>
			</NavWrapper>
		</div>
	);
};

export default Profile;
