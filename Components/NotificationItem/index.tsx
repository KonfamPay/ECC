interface NotificationItemProps {
	title: string;
	additionalInfo: string;
	time: string;
}
export const NotificationItem: React.FC<NotificationItemProps> = ({ title, additionalInfo, time }) => {
	return (
		<div className="pl-[35px] pr-[45px] flex justify-between items-center bg-white">
			<div className="flex items-center gap-x-[15px]">
				<div className="w-[70px] h-[70px] bg-gradient-to-b from-eccblue/80 to-eccblue rounded-full"></div>
				<div>
					<p className="text-[20px] font-medium poppinsFont">{title}</p>
					<p className="text-[20px] text-grey-200 font-medium poppinsFont">{additionalInfo}</p>
				</div>
			</div>
			<p className="text-[#666666E8]">{time}</p>
		</div>
	);
};
