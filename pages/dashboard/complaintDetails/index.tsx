import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import ComplaintData from "../../../Components/Complaint/ComplaintData";


const mycomplaints: NextPage = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState("")
	const router = useRouter()
	const complaintId = router.query.id
	const complaint = ComplaintData.filter((complaint) => complaint.grievanceId == complaintId)[0];

	return (
		<div className="mx-[35px] mt-[60px] w-[1079px] h-[827px] rounded-[20px]">
			<div className="bg-eccblue rounded-t-[20px] h-[78px]">
				<div className="flex flex-row space-x-[40px]  ml-[27px] py-[17px]">
					<img
						src="/icons/dashboard-icons/arrow.svg"
						className="w-[36px] h-[36px]"
						alt=""
					/>
					<p className="text-[24px] text-white">{}</p>
				</div>
			</div>
			<div className="ml-[27px] mr-[40px] mt-[52px]">
				<div className="flex flex-row space-x-[304.95px]">
					<div className="flex space-x-[10.89px]">
						<p className="text-[20px] text-eccblue font-[600]">Greviance ID:{complaintId}</p>
						<img
							src="../icons/dashboard-icons/copy.svg"
							className="w-[26.15px] h-[26.15px]"
							alt=""
						/>
					</div>
					<div className="w-[348px] h-[93.88px] -mt-[33px]">
						<p className="text-[20px] font-[500] float-right">Has this complaint been resolved?</p>
						<div className="bg-eccblue rounded-[9.375px] w-[150px] float-right mt-[17px]">
							<div onClick={() => setShowModal(true)}>
								<p className="text-[14.06px] text-white py-[12.935px] font-[600] mx-auto text-center cursor-pointer">Mark as resolved</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[14.13px]">
					<div>
						<p className="text-[22px] font-[500]">
							{complaint.title} 
						</p>
						<p className="text-[20px] mt-[15px] font-[500]">
							You filed this case against <span className="text-eccblue">{complaint.companyName}</span> on {complaint.date}
						</p>
					</div>
					<div className="mt-[30px]">
						<p className="text-[20px] leading-[37px] font-[400]">
							{complaint.description}
						</p>
					</div>
				</div>
				<div className="mt-[52px]">
					<p className="text-eccblue text-[19.64px]">Resolution wanted:</p>
					<div className="flex space-x-[28.25px]">
						<div>
							<div className="mt-[21.27px]">
								<div className="border border-eccblue w-[312.8px] rounded-[6.92px]">
									<div className="pt-[16.73px] pb-[15.68px]">
										<div className="flex space-x-[17.31px]">
											<div className="flex space-x-[5.77px] ml-[14.42px]">
												<img
													src="../icons/dashboard-icons/refund.svg"
													alt=""
												/>
												<div className="border-r-[1px] border-r-eccblue h-[16.62px] mt-[10px]" />
											</div>
											<div>
												<p className="text-eccblue text-[11.54px] font-bold">A Refund</p>
												<p className="text-[10.39px] font-[400]">All expenses incurred will be returned to you</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="mt-[21.27px]">
								<div className="border border-eccblue w-[312.8px] rounded-[6.92px]">
									<div className="pt-[16.73px] pb-[15.68px]">
										<div className="flex space-x-[17.31px]">
											<div className="flex space-x-[5.77px] ml-[14.42px]">
												<img
													src="../icons/dashboard-icons/compensation.svg"
													alt=""
												/>
												<div className="border-r-[1px] border-r-eccblue h-[16.62px] mt-[10px]" />
											</div>
											<div>
												<p className="text-eccblue text-[11.54px] font-bold">A Compensation</p>
												<p className="text-[10.39px] font-[400]">You will be compensated by the company</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
	);
};

export default mycomplaints;
