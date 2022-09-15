interface VentComplaintsCardProps {
	title: string;
	description: string;
	opacity: number;
}

export const VentComplaintsCard: React.FC<VentComplaintsCardProps> = ({ title, description, opacity }) => {
	return (
		<div
			data-aos="zoom-in-up"
			style={{ opacity }}
			className="w-full bg-white bg-opacity-10 rounded-[16px] flex flex-row items-center px-[14px] sm:px-[24px] gap-[20px] py-[20px] sm:py-[30px]"
		>
			<div className="min-w-[60px] sm:min-w-[72px] w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] rounded-full border-[0.4px] border-[#C4C4C4]"></div>
			<div className="max-w-[328px]">
				<h3 className="text-[19px] sm:text-[22px] font-semibold poppinsFont text-white">{title}</h3>
				<p className="text-white text-[14px] sm:text-[16px] poppinsFont">{description}</p>
			</div>
		</div>
	);
};
