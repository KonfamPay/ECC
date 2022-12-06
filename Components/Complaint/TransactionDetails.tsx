import { useRouter } from "next/router";
import React from "react";
import ComplaintData from "./ComplaintData";

const TransactionDetails = () => {
	const router = useRouter();
	const complaintId = router.query.id;
	const complaint = ComplaintData.filter((complaint) => complaint.grievanceId == complaintId)[0];

	return (
		<div>
			<div className="lg:grid gap-x-6 grid-cols-2 gap-y-[30px] flex flex-col ">
				<div>
					<h6 className=" border-b border-b-[#c5c5c5] text-[16px] text-[#0B63C5] mb-3">Product Category:</h6>
					<p className="text-[#474747] mb-4 ">{complaint.productCategory}</p>
				</div>
				<div>
					<h6 className=" border-b border-b-[#c5c5c5] text-[16px] text-[#0B63C5] mb-3">Where did this transaction happen?:</h6>
					<p className="text-[#474747] mb-4 ">{complaint.transactionLocation}</p>
				</div>

				<div>
					<h6 className=" border-b border-b-[#c5c5c5] text-[16px] text-[#0B63C5] mb-3">Title of Complaint:</h6>
					<p className="text-[#474747] mb-4 ">{complaint.title}</p>
				</div>
				<div>
					<h6 className="text-[#0B63C5] border-b border-b-[#c5c5c5] text-[16px]  mb-3">Total Amount Lost to this transaction: </h6>
					<p className="text-[#474747] mb-4 ">${complaint.amountLost}</p>
				</div>

				<div>
					<h6 className="border-b border-b-[#c5c5c5] text-[16px] text-[#0B63C5] mb-3">{"Company's/Brand's Name:"}</h6>
					<p className="text-[#474747] mb-4 ">{complaint.companyName}</p>
				</div>
				<div>
					<h6 className="border-b border-b-[#c5c5c5] text-[16px] text-[#0B63C5] mb-3">{"Company's / Brand's Contact:"}</h6>
					<p className="text-[#474747] mb-4 ">{complaint.socialMediaHandle}</p>
				</div>
			</div>
		</div>
	);
};

export default TransactionDetails;
