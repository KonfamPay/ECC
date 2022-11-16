export interface ComplainDetailType {
	grievanceId: string;
	title: string;
	description: string;
	date: string;
	socialMediaHandle: string;
	status: string;
	productCategory: string;
	resolutionWanted: { refund: boolean; compensation: boolean; apology: boolean; replacement: boolean };
	companyName: string;
	amountLost: string;
	transactionLocation: string;
}
