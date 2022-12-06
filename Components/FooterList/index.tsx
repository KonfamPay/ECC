import Link from "next/link";

interface FooterListProps {
	title: string;
	items: string[];
	areButtons?: boolean;
}

export const FooterList: React.FC<FooterListProps> = ({ title, items, areButtons }) => {
	return (
		<div>
			{!areButtons && <p className="text-eccblue text-[12px] poppinsFont mb-[23px] lg:mb-[40px]">{title}</p>}
			<div className="flex flex-col gap-[18px] lg:gap-[24px] items-start w-[100px] lg:w-[150px]">
				{!areButtons &&
					items.map((item) => (
						<p
							key={items.indexOf(item)}
							className="text-[14px] text-grey-200"
						>
							{item}
						</p>
					))}
				{areButtons && (
					<>
						<div className="flex gap-[20px] w-[100%] lg:w-[360px] justify-between">
							<button className="text-[14px] px-[30px] py-[14px] text-center text-white mb-[24px] rounded-[8px] bg-eccblue font-medium box-border hidden lg:block">{items[0]}</button>
							<button className="text-[10px] lg:text-[14px] lg:text-eccblue text-white font-medium py-[10px] px-[20px] lg:px-[0] bg-eccblue lg:bg-transparent lg:py-[14px]  mb-[24px] rounded-[8px] text-center">{items[1]}</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
