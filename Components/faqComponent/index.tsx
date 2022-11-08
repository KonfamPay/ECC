import React from "react";

interface faqComponentProps {
	iconPath: string;
	title: string;
	text: string;
}

export const FaqComponent: React.FC<faqComponentProps> = ({ iconPath, title, text }) => {
	return (
		<div>
			<div className="bg-clearblue w-[70px] h-[70px] flex rounded-full">
				<img
					src={`../icons/${iconPath}.svg`}
					className="my-[17px] mx-[17px]"
					alt=""
				/>
			</div>
			<div className="mt-[36px] text-white  ">
				<p className="text-[22px] font-bold">{title}</p>
				<p className="mt-[11px] w-[364px] text-[20px]">{text}</p>
			</div>
		</div>
	);
};
