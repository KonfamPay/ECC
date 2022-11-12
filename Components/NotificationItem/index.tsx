interface NotificationItemProps {
	title: string;
	message: string;
	time: string;
	type: string;
}
export const NotificationItem: React.FC<NotificationItemProps> = ({ title, message, time, type }) => {
	const getType = (types: string) => {
		if (types === "account") return "../icons/documentation.svg";
		else if (types === "account") return "../icons/verification.svg";
		else if (types === "open") return "../icons/fileRed.svg";
		else if (types === "closed") return "../icons/fileGray.svg";
		else if (types === "pending") return "../icons/fileOrange.svg";
		else if (types === "resolved") return "../icons/fileGreen.svg";
	};

	return (
		<div>
			<div className=" pl-[54px] pr-[45px] flex justify-between items-center h-[20%]  bg-white cursor-pointer">
				<div className="flex items-center gap-x-[25px]">
					<img
						src={getType(type)}
						className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
						alt=""
					/>
					{/* <div className="w-[50px] h-[50px] p-4  bg-gradient-to-b from-eccblue/80 to-eccblue rounded-full "></div> */}
					<div>
						<p className="lg:text-[18px] text-[14px] font-medium poppinsFont">{title}</p>
						<p className="lg:text-[16px] text-[12px] text-grey-200 font-medium poppinsFont">{message}</p>
					</div>
				</div>
				<p className="text-[#666666E8] text-[12px] ml-2">{time}</p>
			</div>
		</div>
	);
};
export default NotificationItem;
