import Notifications from "./../../DashboardNav/Notifications";
import SearchBar from "./../searchbar";
import { useState } from "react";

const TopNav = () => {
	const [value, setValue] = useState("");
	return (
		<div
			style={{ zIndex: 20 }}
			className="fixed left-[295px] top-0 w-[calc(100%-295px)] h-[110px] bg-white pl-[35px] pt-[0px] pr-[66px] flex justify-between items-center poppinsFont  "
		>
			<div>
				<SearchBar
					setValue={setValue}
					value={value}
				/>
			</div>
			<div className="flex flex-row gap-x-6  items-center">
				<Notifications />
				<div className="flex flex-row items-center gap-x-4">
					<div className="w-[30px] h-[30px] rounded-full overflow-hidden">
						<img
							className="w-full"
							src={"/Images/profilePic.png"}
						/>
					</div>
					<div>
						<p>KONFAM PAY</p>
						<p>Admin</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
