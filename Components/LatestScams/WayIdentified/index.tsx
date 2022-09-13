interface WayIdentifiedProps {
	number: number;
	text: string;
}

const WayIdentified: React.FC<WayIdentifiedProps> = ({ number, text }) => {
	return (
		<div className="flex flex-col space-y-3 sm:space-y-[27px]">
			<div className="flex space-x-[18px] items-center">
				<div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-br from-eccblue to-[#073D79] text-xl sm:text-2xl font-semibold text-white flex items-center justify-center">{number}</div>
				<p className="text-base sm:text-2xl text-eccblue font-medium">ECC COMPLAINT</p>
			</div>
			<p className="text-sm sm:text-xl">{text}</p>
		</div>
	);
};
export default WayIdentified;
