import React from "react";

interface faqComponentProps {
	title: string;
	text: string;
	id: string;
}

 export const SmallFaqComponent: React.FC<faqComponentProps> = ({ title, text, id }) => {
	return (
		<div className="relative border-b-[0.5px] border-b-[#cccccc] pt-[16px] first:pt-0 last:border-b-0">
			<input
				type="checkbox"
				id={id}
				name="q"
				className="questions hidden"
			/>
			<label
				htmlFor={id}
				className="question text-white relative my-0 mx-auto opacity-[0.9] py-[10px] block cursor-pointer text-[16px] font-bold overflow-scroll pr-[30px]"
			>
				{title}
				<div className="plus absolute ml-[10px] z-[5] text-[1.8rem] leading-[100%] select-none right-[10px] top-[15px]">
					<div className="w-[15px] h-[15px] flex items-center justify-center bg-white rounded-full">
						<img
							src="../icons/chevron-down.svg"
							alt=""
						/>
					</div>
				</div>
			</label>
			<div className="answers text-white py-[0px] h-0 overflow-hidden z-[-1] opacity-0 leading-[170%]">{text}</div>
		</div>
	);
};
