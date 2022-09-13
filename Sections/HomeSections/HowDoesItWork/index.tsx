import Image from "next/image";
import { HowItWorksCard } from "../../../Components";

const HowDoesItWork: React.FC = (props) => {
	return (
		<div className="mt-[119px] mb-[62px]">
			<div className="flex flex-col space-y-[30px] items-center justify-center mx-auto">
				<div className="mx-[20px]">
					<p className="font-[600] text-[24px] md:text-[48px] leading-[72px] text-center">
						How Does It <span className="text-eccblue">Work?</span>
					</p>
					<p className="font-[300] text-[12px] md:text-[24px] mx- md:mx-0 leaing-0 md:leading-[36px] text-center">You will only need to file a complaint and we will handle the remaining processes </p>
				</div>
				<div className="pt-[32px] md:pt-[85px] flex flex-col space-y-[54px] md:space-y-[100px] px-[20px]">
					<div className="flex flex-col lg:flex-row space-x-[0px] lg:space-x-[19px] space-y-[54px] lg:space-y-0 mx-[20px] sm:mx-0 howItWorksContent1">
						<HowItWorksCard
							title={"File a Complaint"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"file"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"notify"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"speak"}
							bgIcon={"#fff"}
						/>
					</div>
					<div className="flex flex-col lg:flex-row space-x-[0px] lg:space-x-[19px] space-y-[54px] lg:space-y-0 howItWorksContent2">
						<HowItWorksCard
							title={"Send legal notice"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"legal"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"time"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={"Get resolution with minimum efforts and reclaim your family time."}
							icon={"court"}
							bgIcon={"#fff"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HowDoesItWork;
