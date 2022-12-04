const RecentActivity = () => {
	return (
		<div className="w-[50%] h-[600px] max-w-[700px] bg-white rounded-[10px] shadow-lg">
			<div className="w-full flex flex-row justify-between items-center px-4 h-[70px] border-b border-[#c5c5c5] ">
				<h1 className="text-black text-[18px] font-medium">Recent Activity</h1>
				<button className="p-2 rounded-md text-eccblue bg-[#F1F7FE] text-[14px]">View all activity</button>
			</div>
		</div>
	);
};

export default RecentActivity;
