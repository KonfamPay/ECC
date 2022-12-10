import type { NextPage } from "next";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
interface navBarProps {
	setPage: Dispatch<SetStateAction<string>>;
	page: string;
	setPageNumber: Dispatch<SetStateAction<number>>;
}

const complaintsnavbar: NextPage<navBarProps> = ({ setPage, page, setPageNumber }) => {
	const complaintsnavbarcontents = [
		{
			text: "All",

			link: "",
		},
		{
			text: "Resolved",

			link: "",
		},
		{
			text: "Open",

			link: "",
		},
		{
			text: "Pending",

			link: "",
		},
		{
			text: "Closed",

			link: "",
		},
	];

	return (
		<div>
			<div className="hidden lg:block">
				<div className="bg-eccblue rounded-t-[15px] h-[104px] w-full flex justify-center items-center">
					<div className="text-white flex flex-row justify-between items-center space-x-[30px] xl:space-x-[50px]">
						{complaintsnavbarcontents.map((content, index) => (
							<div
								key={index}
								onClick={() => {
									setPage(content.text);
									setPageNumber(1);
								}}
								className={`border-2 border-white ${content.text === page && "bg-[#fff]"} w-fit h-[35px] rounded-[40px] flex items-center justify-center hoverAnimation hover:text-black`}
							>
								<p className={`py-[10px] font-normal -tracking-[0.02em] px-[25px] text-[14px] ${content.text === page && "text-[#000] font-medium"}`}>{content.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-eccblue lg:hidden w-full flex items-center justify-center h-[55px]">
				<div className="flex flex-row items-center justify-between gap-x-[10px] sm:gap-x-[40px]">
					{complaintsnavbarcontents.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								setPage(item.text);
								setPageNumber(1);
							}}
							className={`border border-transparent ${item.text === page && "text-black border-solid bg-white border-white"} w-[65px] rounded-2xl text-center hoverAnimation`}
						>
							<p className={`text-[12px]  text-center text-white font-medium -tracking-[0.02em] ${item.text === page && "text-[black] py-2"}`}>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default complaintsnavbar;
