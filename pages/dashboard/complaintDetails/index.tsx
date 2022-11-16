import type { NextPage } from "next";
import { useState } from "react";
import  { useRouter }  from "next/router";
import ComplaintData from "../../../Components/Complaint/ComplaintData";
import Resolution from "../../../Components/ResolutionWanted";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import TransactionDetails from "../../../Components/Complaint/TransactionDetails";

const Mycomplaints: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState("");
	const router = useRouter();
	const complaintId = router.query.id;
	const complaint = ComplaintData.filter((complaint) => complaint.grievanceId == complaintId)[0];

	const documents = [
		{ src: "/Images/Frame-814.png", alt: "document" },
		{ src: "/Images/Frame-815.png", alt: "document" },
		{ src: "/Images/Frame-816.png", alt: "document" },
	];

	return (
		<NavWrapper>
			{complaint && (
				<div className="w-full h-full lg:mt-6 lg:pb-6 lg:px-2 bg-clearblue  ">
					<div className="lg:mx-[5px] lg:mt-[20px] w-full lg:h-[827px] h-auto bg-clearblue  lg:rounded-[20px]">
						<div className="bg-eccblue lg:rounded-t-[20px] h-[78px]">
							<div className="flex flex-row space-x-[40px]  ml-[27px] py-[17px] ">
								<img
									src="/icons/dashboard-icons/arrow.svg"
									className="w-[36px] h-[36px]"
									alt=""
									onClick={() => router.back()}
								/>
								<p className="text-[24px] text-white">{"Complaint details"}</p>
							</div>
						</div>
						<div className="bg-white lg:p-10 p-3 ">
							<div className=" w-full flex lg:flex-row flex-col mb-[50px]  lg:justify-between ">
								<div>
									<div className="flex flex-row gap-x-2">
										<p className=" text-eccblue sm:font-[600] mb-2 ">Greviance ID:{complaintId}</p>
										<img
											onClick={() => {
												alert("id has been copied to clipboard");
												navigator.clipboard.writeText(complaint.grievanceId);
											}}
											src="../icons/dashboard-icons/copy.svg"
											className="w-[26.15px] h-[26.15px]"
											alt=""
										/>
									</div>
									<p className="text-[#474747] my-2 ">Date Filed: {complaint.date}</p>
								</div>
								<div className="my-4 sm:mt-[1px] flex flex-col mx-auto lg:mx-0 items-center ">
									<p className="sm:font-[500]  sm:text-[15px]">Has this complaint been resolved?</p>
									<div className="bg-eccblue rounded-[9.375px] w-[150px] mt-[5px]">
										<div onClick={() => setShowModal(true)}>
											<p className="sm:text-[14.06px] text-white py-[12.935px] sm:font-[600] mx-auto text-center cursor-pointer">Mark as resolved</p>
										</div>
									</div>
								</div>
							</div>
							<TransactionDetails />
							<div className="mt-[14.13px]">
								<div className="mt-[30px]">
									<h6 className="text-[#0B63C5] border-b border-b-[#c5c5c5] text-[16px]  w-[100%] mb-3">Complaint's Description:</h6>
									<p className="sm:text-[20px] leading-[35px] text-[#474747] font-[300]">{complaint.description}</p>
								</div>
							</div>
							<div className="mt-[52px]">
								<p className="text-eccblue text-[19.64px]">Resolution wanted:</p>
								<div className="lg:grid w-full grid-cols-2 flex flex-col items-center justify-center">{Object.keys(complaint.resolutionWanted).map((resolution: string) => complaint.resolutionWanted[resolution] && <Resolution type={resolution} />)}</div>
							</div>
							<div className="my-5">
								<h5 className="text-eccblue m-auto">Uploaded Documents</h5>
								<div className="sm:flex ">
									{documents.map((document) => (
										<img
											src={document.src}
											alt={document.alt}
											className="m-3"
										/>
									))}
								</div>
							</div>
							<div className="my-3">
								<p className="text-[#474747]">Current status</p>
								<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
							</div>
						</div>
						<div className="bg-[#020D1B] w-full text-[#C4C4C4] p-6 ">
							<p className="p-5 mx-auto">
								We have seen your complaint, and will get back to you in 2-4 days. You will recive short messages here and it would reflect in your mail, but you can’t reply. You can also keep track of your complaints through the status tags. <span className="text-[#0B63C5]">Leanrn more.</span>
							</p>
						</div>
						{showModal && (
							<>
								<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
									<div className="my-6 mx-auto">
										<div className="bg-clearblue rounded-[10.3831px] w-[558px] h-[306px]">
											<div
												className="w-auto float-right mt-[21px] mr-[21.85px] cursor-pointer"
												onClick={() => setShowModal(false)}
											>
												<img
													src="/icons/close.svg"
													alt=""
												/>
											</div>
											<div className="pt-[89px] pl-[37px] pr-[66px]">
												<p className="text-[20px] font-[400]">Are you sure you want to mark this complaint as resolved?</p>
											</div>
											<div className="mt-[58px] mx-auto flex space-x-[48px] justify-end mr-[90px]">
												<div
													className="my-[11.5px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
													onClick={() => setShowModal(false)}
												>
													<p className="text-eccblue text-center">Cancel</p>
												</div>
												<div
													className="bg-eccblue rounded-[9.41px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
													onClick={() => setShowModal(false)}
												>
													<p className="text-center text-white py-[11.5px] px-[40px]">Proceed</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
							</>
						)}
					</div>
				</div>
			)}
		</NavWrapper>
	);
};

export default Mycomplaints;
