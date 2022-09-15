interface ComplaintsCardProps {
	icon: string;
	iconBg: string;
	textColor: string;
	text: string;
	number: number;
}

export const ComplaintsCard: React.FC<ComplaintsCardProps> = ({ icon, iconBg, textColor, text, number }) => {
	return (
		<div className="w-full px-[75px] py-[45px] bg-white poppinsFont flex items-center justify-center gap-x-[52px] rounded-[15px] max-w-[438px]">
			<div
				style={{ backgroundColor: iconBg }}
				className={`w-[80px] h-[80px] rounded-[27.2px] flex items-center justify-center`}
			>
				<img
					className="w-[36px] h-[36px]"
					src={icon}
				/>
			</div>
			<div>
				<p
					style={{ color: textColor }}
					className={`text-[48px] font-medium -mt-2`}
				>
					{number}
				</p>
				<p className="font-medium opacity-60 -mt-2">{text}</p>
			</div>
		</div>
	);
};
