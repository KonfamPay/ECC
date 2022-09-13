import type { NextPage } from "next";

const complaintsnavbar: NextPage = (props) => {
	const complaintsnavbarcontents = [
		{
			text: "All",
			active: true,
			link: "",
		},
		{
			text: "Resolved",
			active: false,
			link: "",
		},
		{
			text: "Open",
			active: false,
			link: "",
		},
		{
			text: "Pending",
			active: false,
			link: "",
		},
		{
			text: "Closed",
			active: false,
			link: "",
		},
	];

	return (
		<div className="bg-eccblue rounded-t-[15px] h-[104px] w-full">
			<div className="mx-[76.5px] text-white py-[23.5px] flex flex-row space-x-[60px]">
				{complaintsnavbarcontents.map((content) => (
					<div className={`border-2 border-white ${content.active && "bg-[#fff]"} w-fit h-[57px] rounded-[40px] text-center hoverAnimation`}>
						<a href={content.link}>
							<p className={`py-[15px] px-[40px] text-[18px] ${content.active && "text-[#000]"}`}>{content.text}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default complaintsnavbar;
