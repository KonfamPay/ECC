interface ComplaintsCardProps {
	icon: string;
	iconBg: string;
	textColor: string;
	text: string;
	number: number;
}

export const ComplaintsCard: React.FC<ComplaintsCardProps> = ({ icon, iconBg, textColor, text, number }) => {
	return (
		<div className="lg:w-full w-[60%] lg:px-[5%] px-[25px] mx-auto py-[30px] lg:py-[50px] bg-white poppinsFont flex items-center lg:justify-center justify-around gap-x-[52px] rounded-[10px] max-w-[438px]">
			<div
				style={{ backgroundColor: iconBg }}
				className={`lg:w-[30%] lg:h-[100%] lg:py-5 w-[75px] h-[55px] lg:rounded-[17px] rounded-[16px] flex items-center justify-center`}
			>
				<img
					className="lg:w-[35%] lg:h-[60%] w-[22px] h-[20px]"
					src={icon}
				/>
			</div>
			<div className="flex flex-col items-center">
				<p
					style={{ color: textColor }}
					className={`lg:text-[32px] text-[32px] text-center font-medium -mt-2`}
				>
					{number}
				</p>
				<p className="font-medium opacity-60 -mt-2">{text}</p>
			</div>
		</div>
	);
};
