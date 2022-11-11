interface NotificationItemProps {
	title: string;
	additionalInfo: string;
	time: string;
	type: string;
}
export const NotificationItem: React.FC<NotificationItemProps> = ({ title, additionalInfo, time, type }) => {
	const getType = (types: string) => {
		if (types === "documentation") return "../icons/documentation.svg";
		if (types === "verification") return "../icons/verification.svg";
		if (types === "fileRed") return "../icons/fileRed.svg";
		if (types === "fileGray") return "../icons/fileGray.svg";
		if (types === "fileOrange") return "../icons/fileOrange.svg";
		if (types === "fileGreen") return "../icons/fileGreen.svg";
	};

	return (
		<div>
			<div className=" pl-[54px] pr-[45px] flex justify-between items-center h-[20%]  bg-white">
				<div className="flex items-center gap-x-[25px]">
					<img
						src={getType(type)}
						className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
						alt=""
					/>
					{/* <div className="w-[50px] h-[50px] p-4  bg-gradient-to-b from-eccblue/80 to-eccblue rounded-full "></div> */}
					<div>
						<p className="lg:text-[18px] text-[14px] font-medium poppinsFont">{title}</p>
						<p className="lg:text-[16px] text-[12px] text-grey-200 font-medium poppinsFont">{additionalInfo}</p>
					</div>
				</div>
				<p className="text-[#666666E8] text-[12px] ml-2">{time}</p>
			</div>
		</div>
	);
};
export default NotificationItem;
