import Wrapper from "../../Components/Admin/Navs/navWrapper";
import UserStats from "../../Components/Admin/Dashboard/UserStats";
import ComplaintStats from "../../Components/Admin/Dashboard/ComplaintStats";
import userStats from "./../../Components/Admin/userStats";
import ComplaintStatsData from "./../../Components/Admin/ComplaintStats";
import RecentActivity from "../../Components/Admin/Dashboard/RecentActivity";
import RecentShares from "./../../Components/Admin/Dashboard/RecentShares/index";
import Geographics from "../../Components/Admin/Dashboard/Geographics";
import ComplaintGeographics from "../../Components/Admin/Dashboard/ComplaintGeographics";
import { states } from "../verification/StatesAndLga";


const Admin = () => {
	return (
		<Wrapper>
			<div>
				<h1 className="text-eccblue text-[28px] font-regular">Dashboard</h1>
				<div className="w-full mb-[20px]">
					<UserStats stats={userStats} />
				</div>
				<div className="w-full mb-[20px]">
					<ComplaintStats stats={ComplaintStatsData} />
				</div>
				<div className="flex flex-row justify-between mb-[20px] gap-x-6">
					<RecentActivity />
					<RecentShares />
				</div>
				<div className="w-full flex flex-row justify-between gap-x-6">
					<Geographics states={states}/>
					<ComplaintGeographics states={states}/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Admin;
