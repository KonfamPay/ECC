import { Stats } from "./../../../../types/complaintTypes.d";
interface statProps {
	stats: Array<Stats>;
}

const UserStats: React.FC<statProps> = ({ stats }) => {
	const getIcon = (str: string): string => {
		switch (str) {
			case "Total Users":
				return "../icons/admin-icons/total-users-icon.svg";
			case "Avg Users":
				return "../icons/admin-icons/average-users-icon.svg";
			case "New Users":
				return "../icons/admin-icons/new-users-icon.svg";
			default:
				return "../icons/admin-icon/new-users-icon.svg";
		}
	};
	return (
		<div className="w-full rounded-md shadow-lg flex flex-row justify-around bg-white h-[193px]">
			{stats.map((stat: Stats, index) => (
				<div
					key={index}
					className="w-full h-full flex-row flex items-center justify-between "
				>
					<div className="flex flex-col justify-around h-full items-center w-[90%]  ">
						<div className="flex flex-row gap-x-4 items-center">
							<img
								src={getIcon(stat.stat)}
								alt=""
							/>
							<p className="text-[#8491A5] font-regular text-[16px]"> {stat.stat}</p>
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
					<span className={` ${stats.indexOf(stat) == stats.length - 1 && `hidden`} h-[96px] w-[1px] bg-[#c5c5c5]`}></span>
				</div>
			))}
		</div>
	);
};

export default UserStats;
