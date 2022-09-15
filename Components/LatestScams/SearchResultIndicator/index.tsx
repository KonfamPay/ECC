import { Dispatch, SetStateAction } from "react";

interface SearchResultIndicatorProps {
	areSearchResults: boolean;
	setIsShowing: Dispatch<SetStateAction<boolean>>;
}
const SearchResultIndicator: React.FC<SearchResultIndicatorProps> = ({ areSearchResults, setIsShowing }) => {
	const closeResultIndicator = () => {
		setIsShowing(false);
	};

	return (
		<div>
			{!areSearchResults && (
				<div
					onClick={() => closeResultIndicator()}
					className="w-full sm:py-4 sm:px-5 flex space-x-3 bg-warn-bg rounded-xl border border-warn-border text-warn-text"
				>
					<p>No item on our list match your search. Make sure you enter the correct keyword</p>
					<img
						className="cursor-pointer"
						src="/icons/orangeXIcon.svg"
					/>
				</div>
			)}
			{areSearchResults && (
				<div
					onClick={() => closeResultIndicator()}
					className="w-full sm:py-4 sm:px-5 flex space-x-3 bg-complaint-success-bg rounded-xl border border-complaint-success-border"
				>
					<p className="text-complaint-success-text">Your search succesfully made a match on our list. It has been highlighted on our list</p>
					<img
						className="cursor-pointer"
						src="/icons/greenXIcon.svg"
					/>
				</div>
			)}
		</div>
	);
};
export default SearchResultIndicator;
