import ScamData from "../../../../Components/LatestScams/ScamData";
import { useRouter } from "next/router";
import Wrapper from "../../../../Components/Admin/Navs/navWrapper";
import { useState, useEffect } from "react";
import ComplaintData from "../../../../Components/Complaint/ComplaintData";
import ScamPersonalDetails from "../../../../Components/Admin/Latest/ScamPersonalDetails";
import ScamComplaintDetails from "../../../../Components/Admin/Latest/ScamDetails";
import ScamOperation from "../../../../Components/Admin/Latest/ScamOperation";

const scamDetails = () => {
	const router = useRouter();
	const scamId = router.query.id;
	const [section, setSection] = useState("Personal Information");
	const [isShowing, setShowing] = useState(false);
	const [action, setAction] = useState("add");

	const scammer = ScamData.find((scammer: any) => scammer.scamId == scamId);
	const [scamData, setScamData] = useState({});
	const [complaints, setComplaints] = useState([]);
	useEffect(() => {
		if (scammer) {
			setScamData(scammer);
			const complaints = ComplaintData.filter((complaint: any) => complaint.companyName == scammer.scammer);
			setComplaints(complaints);
		} else {
			setScamData({});
			setComplaints([]);
		}
	}, [scammer]);

	return (
		<Wrapper>
			<div
				className="w-full h-full
			 bg-white rounded-[15px] lg:pt-[0px]  lg:overflow-hidden"
			>
				{isShowing && (
					<ScamOperation
						setShowing={setShowing}
						action={action}
					/>
				)}
				<div className="py-[20px] flex flex-row gap-4 pl-4 w-full  bg-eccblue">
					<img
						src="/icons/arrow.svg"
						onClick={() => {
							router.back();
						}}
						alt=""
					/>
					<p className="text-[24px] font-medium poppinsFont text-white">User Details</p>
				</div>

				<div className="w-full ">
					<div className="w-full border cursor-pointer flex text-[#848484] flex-row justify-evenly mt-[30px] border-x-0 border-t-0 border-b border-b-[#dcdcdc]">
						<div
							onClick={() => {
								setSection("Personal Information");
							}}
							className={`w-[315px] h-auto flex transition-[3000ms] justify-center items-center  text-[30px] ${section == "Personal Information" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Personal Information
						</div>
						<div
							onClick={() => setSection("Complaint History")}
							className={`w-[315px] h-auto flex items-center justify-center transition-[3000ms]  text-[30px] ${section == "Complaint History" && "border-eccblue text-eccblue border-solid border-b-2"} `}
						>
							Complaint History
						</div>
					</div>

					<div className="w-full">
						{section == "Personal Information" ? (
							<div>
								<ScamPersonalDetails scamData={scamData} />
							</div>
						) : (
							<div className="w-full">
								<div>
									<ScamComplaintDetails
										setShowing={setShowing}
										complaints={complaints}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default scamDetails;
