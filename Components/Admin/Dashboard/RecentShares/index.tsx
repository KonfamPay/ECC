const RecentShares = () => {
	return (
		<div className="w-[50%] h-[600px] max-w-[700px] bg-white rounded-[10px] shadow-lg">
			<div className="w-full flex flex-row justify-between items-center px-4 h-[70px] border-b border-[#c5c5c5] ">
				<h1 className="text-black text-[18px] font-medium">Recent Shares</h1>
				<div className="text-eccblue">
					<h2>Total Shares</h2>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default RecentShares;
