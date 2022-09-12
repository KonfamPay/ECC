interface PaginationButtonProps {
	text: string;
	isPage?: boolean;
	isActive?: boolean;
	onClick?: () => void;
	pageSize: boolean;
}
const PaginationButton: React.FC<PaginationButtonProps> = ({ text, pageSize, isPage, isActive, onClick }) => {
	return (
		<div>
			{!pageSize && (
				<div
					onClick={onClick ? () => onClick() : undefined}
					style={{
						backgroundColor: isPage ? (isActive ? "#0B63C5" : "white") : "#0B63C5",
						color: isPage ? (isActive ? "white" : "#979797") : "white",
						border: isPage ? (isActive ? "none" : "1px solid #979797") : "none",
					}}
					className="transition-[200ms] py-[17px] px-[25px] text-white text-[19px] rounded-[5.26px] cursor-pointer"
				>
					{text}
				</div>
			)}
			{pageSize && (
				<div
					onClick={onClick ? () => onClick() : undefined}
					style={{
						backgroundColor: isPage ? (isActive ? "#0B63C5" : "white") : "#0B63C5",
						color: isPage ? (isActive ? "white" : "#979797") : "white",
						border: isPage ? (isActive ? "none" : "1px solid #979797") : "none",
					}}
					className="transition-[200ms] py-[7px] px-[10px] text-white text-[7px] rounded-[5.26px] cursor-pointer"
				>
					{text}
				</div>
			)}
		</div>
	);
};
export default PaginationButton;
