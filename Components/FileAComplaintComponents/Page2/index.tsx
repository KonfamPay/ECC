import { Dispatch, SetStateAction, useRef, useState } from "react";

interface Page2Props {
	setCurrentPage: Dispatch<SetStateAction<number>>;
	setSelectedFiles: any;
	selectedFiles: any[];
	setIsOpaque: Dispatch<SetStateAction<boolean>>;
}

const Page2: React.FC<Page2Props> = ({ setCurrentPage, selectedFiles, setSelectedFiles, setIsOpaque }) => {
	const filePickerRef = useRef(null);
	const addDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = [...selectedFiles];
		if (e.target.files) files.push(e.target.files[0]);
		setSelectedFiles(files);
	};
	const onFileDelete = (currentItem: any) => {
		setSelectedFiles(selectedFiles.filter((item) => item != currentItem));
	};
	const onSubmit = () => {
		setIsOpaque(false);
		setTimeout(() => {
			setIsOpaque(true);
			setCurrentPage(3);
		}, 300);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="mt-[20px] lg:mt-[90px]">
			<p className="text-[14px] lg:text-[24px] leading-[23px] lg:leading-[37px]">
				Kindly upload documents or picture that includes evidence of Payment, proof of payment or anythhing that might help us resolve your complaint.
				<span className="text-eccblue">{"    "} You can upload multiple documents</span>
			</p>
			<div className="mt-[66px]">
				<div>
					<p className="text-[14px] lg:text-[20px]">Upload Documents</p>
				</div>
				<div className={`w-full lg:h-[571px] py-[27.5px] lg:pt-[120px] rounded-xl bg-clearblue border-eccblue mt-[25px] border-2 border-dashed mx-auto ${selectedFiles ? "" : "pt-[170px]"}`}>
					<img
						src="icons/paste.svg"
						alt=""
						className="mx-auto cursor-pointer w-[41px] lg:w-full h-[41px] lg:h-full"
						onClick={() => filePickerRef.current.click()}
					/>
					<input
						type="file"
						ref={filePickerRef}
						hidden
						onChange={addDocument}
						id="inputfile"
					/>
					<div className="text-center mt-[16px] lg:mt-[22px]">
						<p className="text-[14px] lg:text-[20px] font-[500]">
							Click to upload your documents here {""}
							<span
								className="text-eccblue cursor-pointer"
								onClick={() => filePickerRef.current.click()}
							>
								browse files
							</span>
						</p>
						<p className="text-[12px] lg:text-[18px] mt-[6px] lg:mt-[22px]">Supported format: JPEG, PNG, PDF</p>
					</div>
					<div className="grid grid-cols-2 px-[40px] gap-x-[14px]">
						{selectedFiles.length > 0 &&
							selectedFiles.map((item) => (
								<div className="bg-eccblue h-[101px] w-full mx-auto mt-[43px] rounded-xl">
									<div className="ml-[33px] mr-[50px]">
										<div className="pt-[27px] relative">
											<div className="flex flex-row space-x-[37px]">
												<img
													src="icons/file-check.svg"
													alt=""
												/>
												<p className="text-[20px] font-[600] text-white">{item.name ? item.name : ""}</p>
											</div>
											<img
												src="icons/close-1.svg"
												className=" absolute right-0 top-[27px] w-[18px] h-[18px] mt-[5px] cursor-pointer"
												onClick={() => onFileDelete(item)}
												alt=""
											/>
										</div>
										{/* <hr className="mt-[12.12px] border-[3.5px] rounded-full"/> */}
										<div className="w-full mt-[12.12px] bg-[#C5C5C5] h-[5px] rounded-full">
											<div
												className="bg-white h-[5px] rounded-full"
												style={{ width: "70%" }}
											></div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<button
					onClick={onSubmit}
					className="bg-eccblue mt-[45px] lg:mt-[110px] w-[572.15px] rounded-xl text-[20px] font-[600] text-white py-[22px]"
					type="submit"
				>
					Continue
				</button>
			</div>
		</div>
	);
};
export default Page2;
