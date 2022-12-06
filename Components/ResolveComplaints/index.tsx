import Image from "next/image";

export const ResolveComplaintsSection: React.FC = () => {
	return (
		<div className=" pt-24 lg:pt-0  pb-[150px]">
			<h1 className="text-center mx-auto font-semibold text-[48px] lg:max-w-[826px]">Help resolve Users Complaints and make them happy again!</h1>
			<div className="flex justify-center mt-[81px] px-[40px]">
				<Image
					src="/images/LawyerShakingHands.png"
					width={1159}
					height={641}
				/>
			</div>
		</div>
	);
};
