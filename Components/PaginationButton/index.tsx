interface PaginationButtonProps {
	page: number;
	active: boolean;
}
export const PaginationButton: React.FC<PaginationButtonProps> = ({ page, active }) => {
	return (
		<div className="">
			<button className={`${active ? "bg-eccblue text-white" : "text-grey-300 border-grey-300"} border  px-5 py-3 rounded-[5px] text-white text-center text-lg`}>{page}</button>
		</div>
	);
};
