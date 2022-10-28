import type { NextPage } from "next";
import ProfileCard from "../../../Components/DashboardComponents/DashboardProfile/ProfileCard";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../../Sections/ComplaintsCardSection";

const profile: NextPage = (props) => {
	return (
		<div>
			<NavWrapper>
				<div className="">
					<div className="lg:block hidden">
						<div className="flex flex-row w-full justify-evenly">
							<div className="w-[60%]">
								<ProfileCard />
							</div>
							<div className="w-[30%]">
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
