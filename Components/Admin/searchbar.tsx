import * as React from "react";
interface SearchBarProps {
	value: string;
	setValue: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, setValue }) => {
	return (
		<form>
			<div className="w-[465px] rounded-md bg-[#f0f0f0] h-[50px] flex flex-row items-center">
				<img
					className="w-[24px] h-[24px] mx-6"
					src="../../icons/search.svg"
					alt=""
				/>
				<input
					className=" w-[300px] h-[40px] bg-[#f0f0f0] focus:outline-none "
					type="text"
					placeholder="Search"
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
