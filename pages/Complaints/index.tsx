import type { NextPage } from "next";
import { Key, useState } from "react";
import { Complaint, Footer, NavBar, PaginationButton } from "../../Components";
import PaginationSection from "../../Components/LatestScams/PaginationSection";
// import ComplaintData from "../../Components/Complaint/ComplaintData";
import PostaComplaint from "../../Sections/HomeSections/PostaComplaint";
import SearchResultIndicator from "../../Components/LatestScams/SearchResultIndicator";
import { useQuery } from "react-query";

const Index: NextPage = (props) => {
	const [page, setPage] = useState(1);
	const { data: complaints, status } = useQuery(["complaints", page], ({ queryKey }) => fetchComplaints(queryKey, page));
	const [complaintData, setComplaintData] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const fetchComplaints = async (queryKey: (string | number)[], page: number) => {
		const res = await fetch(`http://127.0.0.1:4000/api/complaints`).then((response) => response.json());

		setComplaintData(res);
		setSearchResults(res);
		return res;
	};
	const [searchText, setSearchText] = useState("");
	const [areSearchResults, setAreSearchResults] = useState(false);
	const [resultIndicatorShowing, setResultIndicatorShowing] = useState(false);
	const [currentSearchPage, setCurrentSearchPage] = useState(1);
	const maxResultsPerPage = 10;
	const handleSearch = () => {
		complaintData.forEach((item: { socialMediaHandle: string | string[]; title: string | string[]; description: string | string[] }) => {
			setResultIndicatorShowing(true);
			if (item.socialMediaHandle.includes(searchText) || item.title.includes(searchText) || item.description.includes(searchText) || item.socialMediaHandle.includes(searchText)) {
				setAreSearchResults(true);
			} else {
				setAreSearchResults(false);
				setSearchResults(
					complaintData.filter((item: { socialMediaHandle: string | string[]; title: string | string[]; description: string | string[] }) => {
						return item.socialMediaHandle.includes(searchText) || item.title.includes(searchText) || item.description.includes(searchText) || item.socialMediaHandle.includes(searchText);
					})
				);
			}
		});
	};
	return (
		<div className="">
			<NavBar hasWhiteText={true} />
			<div className="relative w-full pt-[73px] bg-eccblue text-white text-center">
				<div className="mx-9 pt-24 pb-44">
					<p className="text-2xl sm:text-5xl max-w-[513px] mx-auto font-semibold">
						Complaints from the <br /> people
					</p>
				</div>
				<div className="w-full px-3 sm:px-7 md:px-[50px] lg:px-[100px] absolute -bottom-[36px] sm:-bottom-[52px]">
					<div className="bg-white relative flex flex-row items-center space-x-3 sm:space-x-8 max-w-[1160px] mx-auto pl-2.5 sm:pl-14 py-[24px] sm:min-h-[106px] rounded-xl shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.1)]">
						<img
							src="/Images/searchIcon.svg"
							className="w-5 sm:w-10 h-5 sm:h-10 select-none"
						/>
						<input
							type="text"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							className="flex-grow mr-24 focus:outline-none text-[14px] sm:text-[20px] placeholder:text-sm sm:placeholder:text-[20px]  placeholder:font-light sm:placeholder:font-normal placeholder:text-black placeholder:opacity-[0.62] placeholder:select-none text-black"
							placeholder="Search for complaints made"
							onKeyDownCapture={(e) => e.key === "Enter" && handleSearch()}
						/>
						<button
							onClick={handleSearch}
							className="absolute right-7 top-6 hidden sm:block py-[14.5px] px-[48px] bg-[#0A5EBC] rounded-xl active:scale-95 transition-[100ms]"
						>
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="xl:w-screen mx-auto">
				<div className="mt-20 ml-16 w-fit">
					{resultIndicatorShowing && (
						<SearchResultIndicator
							setIsShowing={setResultIndicatorShowing}
							areSearchResults={areSearchResults}
						/>
					)}
				</div>

				{status === "loading" && <div>Loading data...</div>}
				{status === "error" && <div>Error fetching data</div>}
				{status === "success" && searchResults.length !== 0 && (
					<>
						<div className="mt-36 ml-16 mr-40">
							<div className="space-y-10 mb-8">
								{searchResults.slice(maxResultsPerPage * (currentSearchPage - 1), maxResultsPerPage * currentSearchPage).map((item: { title: string; description: string; date: string; socialMediaHandle: string; status: string }, index: Key | null | undefined) => (
									<Complaint
										title={item.title}
										complaintContent={item.description}
										date={item.date}
										author={item.socialMediaHandle}
										status={item.status}
										key={index}
									/>
								))}
							</div>
						</div>
						<PaginationSection
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							maxResultsPerPage={maxResultsPerPage}
							currentSearchPage={currentSearchPage}
							setCurrentSearchPage={setCurrentSearchPage}
							numberOfPages={Math.ceil(searchResults.length / maxResultsPerPage)}
							pageSize={undefined}
						/>
					</>
				)}
			</div>
			<PostaComplaint />
			<Footer />
		</div>
	);
};

export default Index;
