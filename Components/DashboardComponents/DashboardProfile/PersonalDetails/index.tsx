interface DetailsProps {
	label: string;
	text: string;
}

const Details: React.FC<DetailsProps> = ({ label, text }) => {
	return (
		<div className="flex flex-col border-b border-gray-400 pt-6 px-4 justify-between">
			<p className="text-eccblue text-[14px] mb-4">{label}</p>
			<p className=" text-[16px] text-gray-500 text-base">{text}</p>
		</div>
	);
};

export default Details;
