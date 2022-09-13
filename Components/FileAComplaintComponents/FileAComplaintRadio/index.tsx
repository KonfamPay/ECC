import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";

interface FileAComplaintRadioProps {
	iconPath: string;
	title: string;
	description: string;
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
}

const index: React.FC<FileAComplaintRadioProps> = ({ iconPath, title, description, value, setValue }) => {
	return (
		<div
			onClick={() => setValue(!value)}
			style={{ backgroundColor: value ? "#F1F7FE" : "white" }}
			className="transition-[80ms] cursor-pointer relative border border-eccblue w-[full] rounded-xl"
		>
			<div className="py-[29px] flex items-center space-x-[17.31px]">
				<div className="flex space-x-[10px] ml-[14.42px] mt-[5px]">
					<img
						src={`../icons/${iconPath}.svg`}
						className="lg:w-[40px] w-[20.46px] lg:h-[40px] h-[20.46px]"
						alt=""
					/>
					<div className="border-r-[2px] border-r-eccblue h-[17.39px] lg:h-[23px]" />
				</div>
				<div className="">
					<p className="text-eccblue text-[14px] lg:text-[20px] font-bold">{title}</p>
					<p className="text-[10px] lg:text-[18px] font-[400]">{description}</p>
				</div>
			</div>
			<div
				onClick={() => setValue(!value)}
				style={{ borderColor: value ? "#005cc8" : "#4f4f4f" }}
				className="transition-[80ms] cursor-pointer w-[18.34px] lg:w-[30px] h-[18.34px] lg:h-[30px] absolute right-[30px] bottom-[40%] lg:bottom-[35%] border rounded-full bg-transparent flex items-center justify-center"
			>
				<div
					style={{ opacity: value ? 1 : 0 }}
					className="transition-[80ms] w-[10.23px] lg:w-[20px] h-[10.23px] lg:h-[20px] bg-[#005cc8] rounded-full"
				></div>
			</div>
		</div>
	);
};

export default index;
