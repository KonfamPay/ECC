import type { NextPage } from "next";
import ProfileCard from "../../../Components/DashboardComponents/DashboardProfile/ProfileCard";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../../Sections/ComplaintsCardSection";

const profile: NextPage = () => {
	return (
		<div>
			<NavWrapper>
				<div className="">
					<div className="lg:block hidden">
						<div className="grid xl:gap-x-[48px] xl:grid-cols-[auto_400px] w-full">
							<ProfileCard />
							<div className="lg:hidden xl:block">
								<ComplaintsCardSection />
							</div>
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

export default profile;
