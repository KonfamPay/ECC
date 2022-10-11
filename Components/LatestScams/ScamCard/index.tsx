interface ScamCardProps {
	data: object;
}

const ScamCard: React.FC<ScamCardProps> = ({ data }) => {
	return (
		<div className="w-[80vw] sm:w-[375px]  h-[197px] bg-[#f9fafc] flex flex-col justify-around ">
			<div className="flex flex-col justify-start ml-2 mt-6 mb-3">
				<p className=" font-[500] text-[14px] text-[#1a1a1a]">Francis Chukwuemeka</p>
				<p className=" font-normal text-sm text-[#5b5959]  ">{data.bankAccountDetails}</p>
			</div>
			<div className="w-full mb-[1rem] mt-0 mx-auto border-solid border border-[#c1c1c1] bg-[#c1c1c1] h-0"></div>
			<div className="flex flex-row justify-between text-[14px] px-4">
				<div>
					<p className=" font-normal text-sm text-[#5b5959]  ">Social media handle</p>
					<p className=" font-normal text-sm text-[#5b5959]  ">Phone number</p>
					<p className=" font-normal text-sm text-[#5b5959]  ">Website</p>
				</div>
				<div>
					<p className="font-sans font-normal text-sm text-black">{data.socialMediaHandle}</p>
					<p className="font-sans font-normal text-sm text-black">{data.phoneNumber}</p>
					<p className="font-sans font-normal text-sm text-black">{data.website}</p>
				</div>
			</div>
		</div>
	);
};

export default ScamCard;
