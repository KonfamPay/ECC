import React from "react";

interface ResolutionProps {
	type: string;
}

const Resolution: React.FC<ResolutionProps> = ({ type }) => {
	const getResolution = () => {
		switch (type) {
			case "refund":
				return {
					icon: "../../icons/refund.svg",
					title: "A Refund",
					description: "All expenses incured will be returned to you",
				};

			case "apology":
				return {
					icon: "../../icons/apology.svg",
					title: "An Apology",
					description: "You will receive a formal apology",
				};
			case "compensation":
				return {
					icon: "../../icons/compensation.svg",
					description: "You will be compensated by the company",
					title: "A Compensation",
				};
			case "replacement":
				return {
					icon: "../../icons/replacement.svg",
					title: "A Replacement",
					description: "Your item will be replaced with the right one",
				};

			default:
				return {
					icon: "../../icons/compensation.svg",
					title: "An Apology",
					description: "You will receive a formal apology",
				};
		}
	};
	return (
		<div className="w-full ">
			<div className="mt-[21.27px] mx-auto w-[80%]">
				<div className="border border-eccblue lg:w-[312.8px] w-full  rounded-[6.92px]">
					<div className="pt-[16.73px] pb-[15.68px]">
						<div className="flex space-x-[17.31px]">
							<div className="flex space-x-[5.77px] ml-[14.42px]">
								<img
									className="w-[23px] h-[23px]"
									src={getResolution().icon}
									alt=""
								/>
								<div className="border-r-[1px] border-r-eccblue h-[16.62px] mt-[10px]" />
							</div>
							<div>
								<p className="text-eccblue text-[11.54px] font-bold">{getResolution().title}</p>
								<p className="text-[10.39px] font-[400]">{getResolution().description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resolution;
