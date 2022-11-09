const PageIndicator = ({ pageNumber, Message, isActive, PageSet }) => {
	return (
		<div
			onClick={() => {
				PageSet(pageNumber);
			}}
			className="flex flex-row gap-x-[7px] items-center font-medium cursor-pointer"
		>
			<p className={`xl:w-[63px] lg:w-[55px] w-[28px] xl:h-[63px] lg:h-[55px] h-[28px] text-[14px] flex items-center justify-center font-semibold lg:text-[20px] xl:text-[29px]  rounded-full border border-solid  ${isActive ? "border-white bg-white text-eccblue" : " border-slate-50 bg-eccblue text-white"} `}>{pageNumber}</p>
			<p className={`xl:text-[24px] lg:text-[20px] text-[14px] ${isActive ? "text-white" : "text-slate-50"}`}>{Message}</p>
		</div>
	);
};

const PageSectionNav = ({ currentPage, setPage }) => {
	return (
		<div className="w-full py-[11px] px-[10px] lg:rounded-t-[20px] flex lg:flex-row space-y-[13px] justify-center items-center lg:justify-around flex-col h-[100px] bg-eccblue">
			<div className="flex-row flex w-full gap-x-[20px] justify-around">
				<PageIndicator
					PageSet={setPage}
					pageNumber={1}
					Message="Complaint Info"
					isActive={1 <= currentPage ? true : false}
				/>
				<PageIndicator
					PageSet={setPage}
					pageNumber={2}
					Message="Upload Documents"
					isActive={2 <= currentPage ? true : false}
				/>
				<div className="lg:block hidden">
					<PageIndicator
						PageSet={setPage}
						pageNumber={3}
						Message="Resolution"
						isActive={3 <= currentPage ? true : false}
					/>
				</div>
			</div>
			<div className=" lg:w-[40%] flex w-full items-center justify-center lg:hidden">
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
