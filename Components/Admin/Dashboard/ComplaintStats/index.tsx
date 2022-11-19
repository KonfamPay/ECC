import { Stats } from "./../../../../types/complaintTypes.d";
interface statProps {
	stats: Array<Stats>;
}

const ComplaintStats: React.FC<statProps> = ({ stats }) => {
	const getIcon = (str: string): string => {
		switch (str) {
			case "Total Complaints":
				return "../icons/admin-icons/blueFileStat.svg";
			case "Total Open Complaints":
				return "../icons/admin-icons/redFileStat.svg";
			case "Total Closed Complaints":
				return "../icons/admin-icons/grayFileStat.svg";
			case "Total Pending Complaints":
				return "../icons/admin-icons/yellowFileStat.svg";
			default:
				return "../icons/admin-icon/new-users-icon.svg";
		}
	};
	return (
		<div className="w-full  flex flex-row justify-between    h-[193px]">
			{stats.map((stat: Stats) => (
				<div className="flex flex-col justify-around items-center w-[274px] bg-white rounded-md ">
					<div className="flex flex-row gap-x-4 items-center">
						<p className="text-[#8491A5] font-regular text-[16px]"> {stat.stat}</p>
						<img
							src={getIcon(stat.stat)}
							alt=""
						/>
					</div>
					<p className="font-bold text-[40px] text-[#09244B]">{stat.amount}</p>
					<div className="flex flex-row gap-x-2 text-[14px] ">
						<div className="flex flex-row">
							{stat.percentage.trend == "increase" ? (
								<img src="../icons/admin-icons/green-chev-up.svg" />
							) : (
								<img
									src="../icons/admin-icons/red-chev-down.svg"
									alt=""
								/>
							)}
							<p className={`${stat.percentage.trend == "increase" ? `text-[#2AC670]` : `text-[#FF6252]`}`}>{`%${stat.percentage.amount}`}</p>
						</div>
						<p className="text-[#8491A5]">{` vs. ${stat.relativity}`}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ComplaintStats;
