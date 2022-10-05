const PageIndicator = ({ pageNumber, Message, isActive, PageSet }) => {
	return (
		<div
			onClick={() => {
				PageSet(pageNumber);
			}}
			className="flex flex-row gap-x-4 items-center"
		>
			<p className={`lg:w-[63px] w-[35px] h-[35px] text-[15px]    lg:h-[63px] flex items-center justify-center font-semibold lg:text-[29px]  rounded-full border border-solid  ${isActive ? "border-white bg-white text-eccblue" : " border-slate-50 bg-eccblue text-white"} `}>{pageNumber}</p>
			<p className={`lg:text-[24px] text-[14px] ${isActive ? "text-white" : "text-slate-50"}`}>{Message}</p>
		</div>
	);
};

const PageSectionNav = ({ currentPage, setPage }) => {
	return (
		<div className="w-full pt-2 lg:rounded-t-[20px] flex lg:flex-row lg:justify-around flex-col h-[100px] bg-eccblue">
			<div className="flex-row flex  lg:w-[60%] w-full justify-around">
				<PageIndicator
					PageSet={setPage}
					pageNumber={1}
					Message="Complaint Info"
					isActive={1 <= currentPage ? true : false}
				/>
				<pageIndicator />
				<PageIndicator
					PageSet={setPage}
					pageNumber={2}
					Message="Uplaod Documents"
					isActive={2 <= currentPage ? true : false}
				/>
			</div>
			<div className=" lg:w-[40%] flex w-full items-center justify-center">
				<PageIndicator
					PageSet={setPage}
					pageNumber={3}
					Message="Resolution"
					isActive={3 <= currentPage ? true : false}
				/>
				<pageIndicator />
			</div>
		</div>
	);
};
export default PageSectionNav;
