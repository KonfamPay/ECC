import type { NextPage } from "next";
import JoinLawyersSection from "Components/JoinLawyersSection";
import { MakeThingsRightSection } from "Components/MakeThingsRightSection";
import { ResolveComplaintsSection } from "Components/ResolveComplaints";
import { Footer } from "../../Components";
import { NavBar } from "../../Components";

const LawPracitioners: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className="lg:mt-[200px]">
				<ResolveComplaintsSection />
				<MakeThingsRightSection />
				<JoinLawyersSection />
				<Footer />
			</div>
		</>
	);
};
export default LawPracitioners;
