import type { NextPage } from "next";
import { useState } from "react";

interface navBarProps {
	setPage: any;
	page: string;
}

const complaintsnavbar: NextPage<navBarProps> = ({ setPage, page }) => {
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
				<div className="bg-eccblue  rounded-t-[15px] h-[104px] w-full flex justify-center items-center">
					<div className="mx-auto my-auto text-white py-[23.5px] flex flex-row space-x-[30px]">
						{complaintsnavbarcontents.map((content) => (
							<div
								onClick={() => {
									setPage(content.text);
								}}
								className={`border-2 border-white ${content.text === page && "bg-[#fff]"} w-fit h-[35px] rounded-[40px] flex items-center justify-center hoverAnimation hover:text-black`}
							>
								<p className={`py-[10px] px-[25px] text-[14px] ${content.text === page && "text-[#000]"}`}>{content.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-eccblue lg:hidden w-full flex items-center justify-center  h-[55px]">
				<div className="flex flex-row items-center justify-around space-x-2">
					{complaintsnavbarcontents.map((item) => (
						<div
							onClick={() => {
								setPage(item.text);
							}}
							className={` border  border-transparent ${item.text === page && "text-black  border-solid bg-white border-white"} w-auto py-2  rounded-lg text-center hoverAnimation hover:text-black  `}
						>
							<p className={` px-2 text-[12px] text-white ${item.text === page && "text-[black]"}`}>{item.text}</p>
						</div>
					))}{" "}
				</div>
			</div>
		</div>
	);
};

export default complaintsnavbar;
