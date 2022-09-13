import Image from "next/image";

const JoinLawyersSection: React.FC = () => {
	return (
		<div className="px-[40px]">
			<div className="max-w-[1102px] mx-auto">
				<Image
					src="/images/multipleCircles.svg"
					width={1102}
					height={614}
				/>
			</div>
			<div className="flex flex-col items-center relative -top-28">
				<p className="font-medium text-[48px] max-w-[844px] text-center mx-auto">
					Join over <span className="text-eccblue">50,000 lawyers</span> in fighting for the rights of the people
				</p>
				<button className="font-bold py-[22px] px-[60px] bg-eccblue text-white rounded-xl text-[18px] mt-[56px]">Post a Complaint</button>
			</div>
		</div>
	);
};
export default JoinLawyersSection;
