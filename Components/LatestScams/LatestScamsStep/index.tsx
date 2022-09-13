interface LatestScamStepProps {
	number: number;
	text: string;
}

const LatestScamStep: React.FC<LatestScamStepProps> = ({ number, text }) => {
	return (
		<div className="flex flex-col gap-y-[18px] items-center">
			<div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0B63C5] to-[#073D79] text-2xl font-semibold text-white">{number}</div>
			<p>{text}</p>
		</div>
	);
};
export default LatestScamStep;
