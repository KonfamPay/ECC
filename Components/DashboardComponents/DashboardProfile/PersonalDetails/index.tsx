interface DetailsProps {
	label: string;
	text: string;
}

const Details: React.FC<DetailsProps> = ({ label, text }) => {
	return (
		<div className="flex flex-col border-b border-gray-400 pt-6 justify-between">
			<p className="text-eccblue text-[14px] font-medium mb-2 -tracking-[0.02em]">{label}</p>
			<p className=" text-[16px] text-black opacity-70 font-medium leading-[24px] text-base">{text}</p>
		</div>
	);
};

export default Details;
