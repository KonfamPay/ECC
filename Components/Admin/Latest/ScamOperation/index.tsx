import { useState } from "react";
interface ScamOperationProps {
	setShowing: any;
	action: string;
}

const ScamOperation: React.FC<ScamOperationProps> = () => {
	const [section, setSection] = useState("Personal Information");
	return (
		<div className="w-[80%] bg-transparent fixed p-4 z-40 h-[80vh] flex flex-col justify-center items-center  ">
			<div className="w-full h-full">
				<div className="bg-eccblue rounded-t-[20px] w-[90%] h-[70px] "></div>
				<div className="bg-white w-[90%] h-[70%] border border-[#c5c5c5]  shadow-lg ">
					<div className="w-full border flex text-[#848484] flex-row justify-evenly mt-[30px] border-x-0 border-t-0 border-b border-b-[#dcdcdc]">
						<div
							onClick={() => {
								setSection("Personal Information");
							}}
							className={`w-[315px] h-auto flex transition-[3000ms] justify-center items-center  text-[30px] ${section == "Personal Information" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Personal Information
						</div>
						<div
							onClick={() => setSection("Complaint History")}
							className={`w-[315px] h-auto flex items-center justify-center transition-[3000ms]  text-[30px] ${section == "Complaint History" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Complaint History
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScamOperation;
