import ScamTable from "../../../Components/Admin/Latest/ScamTable";
import Wrapper from "../../../Components/Admin/Navs/navWrapper";
import ScamData from "../../../Components/LatestScams/ScamData";
import { useState, useEffect } from "react";
import PaginationSection from "../../../Components/LatestScams/PaginationSection";
import SearchBar from "../../../Components/Admin/searchbar";
import ScamOperation from "../../../Components/Admin/Latest/ScamOperation";

const Latest = () => {
	const [scamData, setScamData] = useState(ScamData);
	const [maxNumber, setMaxNumber] = useState(8);
	const [pageNumber, setPageNumber] = useState(1);
	const [isShowing, setShowing] = useState(false);
	const [action, setAction] = useState("add");
	const [value, setValue] = useState("");
	const [selected, setSelected] = useState<string[]>([]);
	const onSelect = (id: string) => {
		let selectedItems: Array<string> = [];
		//check if the item is already in the selected list if it is remove it from the list if not add it to the list
		if (selected.includes(id)) {
			const removedItems = selected.filter((item) => item !== id);
			selectedItems = removedItems;
		} else {
			selectedItems = [...selected, id];
		}
		setSelected(selectedItems);
	};
	useEffect(() => {
		function filterBySearch() {
			const filteredData = scamData.filter((scam) => scam.website.input1.toLowerCase().includes(value.toLowerCase()) || scam.scammer.toLowerCase().includes(value.toLowerCase()) || scam.phoneNumber.input1.toLowerCase().includes(value.toLowerCase()));
			if (filteredData.length > 0) {
				setScamData(filteredData);
			} else setScamData(ScamData);
			if (value.length === 0) {
				setScamData(ScamData);
			}
			setPageNumber(1);
		}

		filterBySearch();
	}, [value]);
	return (
		<Wrapper>
			<div>
				{isShowing && (
					<div className="w-full h-full">
						<ScamOperation
							setShowing={setShowing}
							action={action}
						/>
					</div>
				)}
				{scamData.length > 0 && (
					<>
						<div className="bg-white rounded-[15px]">
							<div className="w-full h-[100px] flex flext-col items-center justify-between px-4">
								<div>
									<SearchBar
										value={value}
										setValue={setValue}
									/>
								</div>
								<button
									//disabled={isOperation}
									onClick={() => {
										setShowing(true);
										setAction("add");
									}}
									// className={`h-[50px] ${false ? "bg-[#838181]" : "bg-eccblue"}  flex flex-row items-center gap-x-4 rounded-md text-white w-auto px-2`}
									className={`h-[50px] ${"bg-eccblue"}  flex flex-row items-center gap-x-4 rounded-md text-white w-auto px-2`}
								>
									<img
										src="../icons/admin-icons/userPlus.svg"
										alt=""
									/>
									Add Scam
								</button>
							</div>
							<ScamTable
								selected={selected}
								setSelect={onSelect}
								ScamData={scamData}
								maxNumber={maxNumber}
								pageNumber={pageNumber}
							/>
							<div className="bg-white rounded-b-[15px] px-4 justify-between flex flex-row items-center ">
								{maxNumber <= 5 ? (
									<div className="mb-6">
										<PaginationSection
											pageSize={true}
											searchResults={scamData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(scamData.length / maxNumber)}
										/>
									</div>
								) : (
									<div className="mb-6">
										<PaginationSection
											pageSize={false}
											searchResults={scamData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(scamData.length / maxNumber)}
										/>
									</div>
								)}

								<div>
									<p>{`Showing ${(pageNumber - 1) * maxNumber + 1} to ${(pageNumber - 1) * maxNumber + 1 + (maxNumber - 1) > scamData.length ? scamData.length : (pageNumber - 1) * maxNumber + 1 + (maxNumber - 1)} of ${scamData.length}`}</p>
								</div>

								<div className=" flex flex-row items-center">
									<div>
										<p>Rows per page</p>
									</div>
									<div>
										<input
											className="w-[30px] focus:outline-none border border-solid border-black ml-4"
											type="number"
											max={9}
											min={1}
											value={maxNumber}
											onChange={(e) =>parseInt(e.currentTarget.value)>0?setMaxNumber(parseInt(e.target.value)):setMaxNumber(8)}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</Wrapper>
	);
};

export default Latest;
