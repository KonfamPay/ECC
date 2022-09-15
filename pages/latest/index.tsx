import { NextPage } from "next";
import { useState } from "react";
import LatestScamStep from "../../Components/LatestScams/LatestScamsStep";
import { Footer, KonfamPayCallout, NavBar } from "../../Components/";
import WayIdentified from "../../Components/LatestScams/WayIdentified";
import ScamData from "../../Components/LatestScams/ScamData";
import SearchResultIndicator from "../../Components/LatestScams/SearchResultIndicator";
import PaginationSection from "../../Components/LatestScams/PaginationSection";
import ScamCard from "../../Components/LatestScams/ScamCard";

const LatestScams: NextPage = () => {
	const [scamData, setScamData] = useState(ScamData);
	const [searchResults, setSearchResults] = useState(scamData);
	const [searchText, setSearchText] = useState("");
	const [areSearchResults, setAreSearchResults] = useState(false);
	const [resultIndicatorShowing, setResultIndicatorShowing] = useState(false);
	const [currentSearchPage, setCurrentSearchPage] = useState(1);
	const pageSize = true;

	const maxResultsPerPage = 20;
	const maxResultsPerSmallPage = 6;
	const handleSearch = () => {
		setResultIndicatorShowing(true);

		const result = scamData.filter((item) => item.phoneNumber.includes(searchText) || item.socialMediaHandle.includes(searchText) || item.bankAccountDetails.includes(searchText) || item.website.includes(searchText));
		if (result.length !== 0 && searchText.length !== 0) {
			setSearchResults(result);
			setAreSearchResults(true);
		} else {
			setAreSearchResults(false);
			setSearchResults(scamData);
		}

		// scamData.forEach(item => )
	};
	return (
		<div className="poppinsFont">
			<NavBar />
			<div className="relative w-full mt-[73px] bg-darkblue pt-[115px] text-white text-center">
				<div className="mx-9">
					<p className="text-2xl leading-[125%] sm:text-5xl max-w-[513px] mx-auto font-semibold">
						Be Informed, stay woke, <br /> stay smart!
					</p>
					<p className="max-w-[1000px] text-2xl mx-auto mt-2 sm:mt-11 font-medium"> Search through over 10,000 scam details .They have scammed millions of Naira from Nigerian buyers. Beware of them and do not trust them or buy anything from them</p>
				</div>
				<img
					src="/Images/searchingImage.png"
					className="mx-auto"
				/>
				<div className="w-full px-3 sm:px-7 md:px-[50px] lg:px-[100px] absolute -bottom-[52px]">
					<div className="bg-white relative flex flex-row items-center space-x-3 sm:space-x-8 max-w-[1160px] mx-auto pl-2.5 sm:pl-14 py-[24px] sm:min-h-[106px] rounded-xl shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.1)]">
						<img
							onClick={handleSearch}
							src="/Images/searchIcon.svg"
							className="w-5 sm:w-10 h-5 sm:h-10"
						/>
						<input
							type="text"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							className="flex-grow mr-[93px] focus:outline-none text-[14px] sm:text-[20px] placeholder:text-sm sm:placeholder:text-[20px]  placeholder:font-light sm:placeholder:font-normal placeholder:text-black placeholder:opacity-[0.62] text-black"
							placeholder="Search for complaints made"
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
			<div
				className="px-[100px]
mt-[110px] "
			>
				{resultIndicatorShowing && (
					<SearchResultIndicator
						setIsShowing={setResultIndicatorShowing}
						areSearchResults={areSearchResults}
					/>
				)}

				<div className="w-full flex justify-start">
					<p className="text-eccblue text-left text-sm lg:hidden">{`showing ${maxResultsPerSmallPage} of ${searchResults.length} results`}</p>
				</div>
				{searchResults.length !== 0 && (
					<>
						<div className="lg:block hidden mx-auto ">
							<table className="mx-auto">
								<thead className="bg-eccblue text-white ">
									<tr>
										<th className="py-[16px]">Count</th>
										<th>Social Media Handle</th>
										<th>Bank Account Details</th>
										<th>Website</th>
										<th>Phone Number</th>
									</tr>
								</thead>
								<tbody>
									{searchResults.slice(maxResultsPerPage * (currentSearchPage - 1), maxResultsPerPage * currentSearchPage).map((item, index) => (
										<tr
											className="text-center border-2 border-l-0 border-r-0 border-b-[#E6E7E9]"
											key={index}
										>
											<td className="py-[16px]">{searchResults.indexOf(item) + 1}</td>
											<td className="border-b-[#E6E7E9]">{item.socialMediaHandle}</td>
											<td>{item.bankAccountDetails}</td>
											<td>{item.website}</td>
											<td>{item.phoneNumber}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="lg:hidden">
							{searchResults.slice(maxResultsPerSmallPage * (currentSearchPage - 1), maxResultsPerSmallPage * currentSearchPage).map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center mb-4"
								>
									<ScamCard data={item} />
								</div>
							))}
						</div>
						<div className="lg:block hidden">
							<PaginationSection
								pageSize={false}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
								maxResultsPerPage={maxResultsPerPage}
								currentSearchPage={currentSearchPage}
								setCurrentSearchPage={setCurrentSearchPage}
								numberOfPages={Math.ceil(searchResults.length / maxResultsPerPage)}
							/>
						</div>
						<div className="lg:hidden">
							<PaginationSection
								pageSize={pageSize}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
								maxResultsPerPage={maxResultsPerSmallPage}
								currentSearchPage={currentSearchPage}
								setCurrentSearchPage={setCurrentSearchPage}
								numberOfPages={Math.ceil(searchResults.length / maxResultsPerSmallPage)}
							/>
						</div>
					</>
				)}
			</div>
			<div className="mt-24 w-full bg-clearblue pt-[46px] px-4 sm:px-8 md:px-12 lg:px-24">
				<div className="max-w-[1231px] mx-auto">
					<h1 className="text-[40px] max-w-[500px] text-center mx-auto font-semibold leading-[50px]">
						How we have identified these <span className="text-eccblue">scams</span>
					</h1>
					<div className="flex flex-col sm:flex-row sm:space-x-[31px] space-y-3 sm:space-y-0 items-center mt-5 sm:mt-[144px]">
						<div className="w-8 sm:w-24 shrink-0 h-8 sm:h-24 bg-danger rounded sm:rounded-xl flex items-center justify-center self-start sm:self-auto">
							<img
								className="w-3.5 sm:w-[46px] h-3.5 sm:h-[46px]"
								src="/Images/pencilIcon.svg"
							/>
						</div>
						<p className="text-sm sm:text-xl text-danger font-medium ">The list is compiled based on inputs from our users. If you are a website or phone owner and think that your details are wrongly included please contact us so that we can remove you. We have taken below factors into consideration while categorizing a website as Scam</p>
					</div>
					<section className="flex flex-col space-y-7 sm:space-y-[73px] mt-[98px] pb-[109px]">
						<WayIdentified
							number={1}
							text={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
							}
						/>
						<WayIdentified
							number={2}
							text={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
							}
						/>
						<WayIdentified
							number={3}
							text={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
							}
						/>
					</section>
				</div>
			</div>
			<section className="pt-7 sm:pt-[88px] pb-7 sm:pb-[93px] px-6 sm:px-24  mb-7 text-center">
				<h1 className="text-[22px] text-center mx-auto sm:text-[48px] max-w-[290px] sm:max-w-none font-semibold">
					How to <span className="text-eccblue">stay away</span> from scams
				</h1>
				<div className="mt-7 flex flex-col space-y-5">
					<LatestScamStep
						number={1}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"}
					/>
					<LatestScamStep
						number={2}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"}
					/>
					<LatestScamStep
						number={3}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"}
					/>
					<LatestScamStep
						number={4}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"}
					/>
				</div>
			</section>
			<KonfamPayCallout />
			<Footer />
		</div>
	);
};
export default LatestScams;
