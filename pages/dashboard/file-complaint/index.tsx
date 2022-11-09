import ComplaintLetterSection from "../../../Components/FileAComplaintComponents/ComplaintLetterSection";
import NavWrapper from "./../../../Components/DashboardNav/NavWrapper";
import PageSectionNav from "../../../Components/FileAComplaintComponents/PageSectionNav";

import type { NextPage } from "next";

import { useState } from "react";

import Page1 from "../../../Components/FileAComplaintComponents/Page1";
import Page2 from "../../../Components/FileAComplaintComponents/Page2";
import Page3 from "../../../Components/FileAComplaintComponents/Page3";

import { motion } from "framer-motion";

const fileComplaint: NextPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [productCategory, setProductCategory] = useState("");
	const [titleOfComplaint, setTitleOfComplaint] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [placeOfTransaction, setPlaceOfTransaction] = useState("");
	const [amountLost, setAmountLost] = useState("");
	const [complaintDetails, setComplaintDetails] = useState("");
	const [brandContact, setBrandContact] = useState("");
	const [brandHandle, setBrandHandle] = useState("");
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [wantsRefund, setWantsRefund] = useState(false);
	const [wantsCompensation, setWantsCompensation] = useState(false);
	const [wantsApology, setWantsApology] = useState(false);
	const [wantsReplacement, setWantsReplacement] = useState(false);
	const [termsAndConditions, setTermsAndConditions] = useState(false);
	const [isOpaque, setIsOpaque] = useState(true);
	const [accountName, setAccountName] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [bankName, setBankName] = useState("");
	return (
		<NavWrapper>
			<div>
				<PageSectionNav
					setPage={setCurrentPage}
					currentPage={currentPage}
				/>
				{/* <ComplaintLetterSection place="dashboard" /> */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isOpaque ? 1 : 0 }}
				>
					{currentPage == 1 && (
						<Page1
							place="dashboard"
							accountName={accountName}
							setAccountName={setAccountName}
							accountNumber={accountNumber}
							setAccountNumber={setAccountNumber}
							bankName={bankName}
							setBankName={setBankName}
							setCurrentPage={setCurrentPage}
							productCategory={productCategory}
							setProductCategory={setProductCategory}
							titleOfComplaint={titleOfComplaint}
							setTitleOfComplaint={setTitleOfComplaint}
							companyName={companyName}
							setCompanyName={setCompanyName}
							placeOfTransaction={placeOfTransaction}
							setPlaceOfTransaction={setPlaceOfTransaction}
							amountLost={amountLost}
							setAmountLost={setAmountLost}
							complaintDetails={complaintDetails}
							setComplaintDetails={setComplaintDetails}
							brandContact={brandContact}
							setBrandContact={setBrandContact}
							brandHandle={brandHandle}
							setBrandHandle={setBrandHandle}
							setIsOpaque={setIsOpaque}
						/>
					)}
					{currentPage == 2 && (
						<Page2
							place="dashboard"
							setCurrentPage={setCurrentPage}
							selectedFiles={selectedFiles}
							setSelectedFiles={setSelectedFiles}
							setIsOpaque={setIsOpaque}
						/>
					)}
					{currentPage == 3 && (
						<Page3
							setCurrentPage={setCurrentPage}
							setIsOpaque={setIsOpaque}
							place="dashboard"
							wantsRefund={wantsRefund}
							setWantsRefund={setWantsRefund}
							wantsCompensation={wantsCompensation}
							setWantsCompensation={setWantsCompensation}
							wantsApology={wantsApology}
							setWantsApology={setWantsApology}
							wantsReplacement={wantsReplacement}
							setWantsReplacement={setWantsReplacement}
							termsAndConditions={termsAndConditions}
							setTermsAndConditions={setTermsAndConditions}
						/>
					)}
				</motion.div>
			</div>
		</NavWrapper>
	);
};

export default fileComplaint;
