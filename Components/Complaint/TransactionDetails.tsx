import { useRouter } from 'next/router';
import React from 'react'
import ComplaintData from './ComplaintData'


    
const TransactionDetails = () => {
    const router = useRouter()
	const complaintId = router.query.id
	const complaint = ComplaintData.filter((complaint) => complaint.grievanceId == complaintId)[0];

  return (
   <div>
     <div className="sm:grid grid-cols-2">
        <div >
            <h6 className="text-[#0B63C5] mb-2">Product Category:</h6>
            <p className="text-[#474747] mb-4 ">{ complaint.productCategory}</p>
        </div>
        <div>
            <h6 className="text-[#0B63C5] mb-2">Where did this transaction happen?:</h6>
            <p className="text-[#474747] mb-4 ">{complaint.transactionLocation}</p>
        </div>
    </div>
    <div className="sm:grid grid-cols-2 ">
        <div>
            <h6 className="text-[#0B63C5] mb-2">Title of Complaint:</h6>
            <p className="text-[#474747] mb-4 ">{complaint.title}</p>
        </div>
        <div>
            <h6 className="text-[#0B63C5] mb-2">Total Amount Lost to this transaction: </h6>
            <p className="text-[#474747] mb-4 ">${complaint.amountLost}</p>
        </div>
    </div>
    <div className="sm:grid grid-cols-2">
        <div >
            <h6 className="text-[#0B63C5] mb-2">Company's/Brand's Name:</h6>
            <p className="text-[#474747] mb-4 ">{complaint.companyName}</p>
        </div>
        <div>
            <h6 className="text-[#0B63C5] mb-2">Company's / Brand's Contact:</h6>
            <p className="text-[#474747] mb-4 ">{complaint.socialMediaHandle}</p>
        </div>
    </div>
    
   </div>
  )
}

export default TransactionDetails