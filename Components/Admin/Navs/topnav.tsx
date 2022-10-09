import Notifications from "./../../DashboardNav/Notifications";

const TopNav = () => {
	return (
		<div className="h-[100px] bg-white flex flex-row justify-between items-center px-4 w-full">
			<div>
				<form>
					<div className="w-[465px] rounded-md bg-[#f0f0f0] h-[50px] flex flex-row items-center">
						<img
							className="w-[24px] h-[24px] mx-6"
							src="./icons/search.svg"
							alt=""
						/>
						<input
							className=" w-[300px] h-[40px] bg-[#f0f0f0] focus:outline-none "
							type="text"
							placeholder="Search"
						/>
					</div>
				</form>
			</div>
			<div className="flex flex-row gap-x-6 items-center">
				<Notifications newNotifications={false} />
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
