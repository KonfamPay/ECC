export interface ComplainDetailType {
	id: string;
	grievanceId: string;
	title: string;
	description: string;
	date: string;
	socialMediaHandle: string;
	status: string;
	productCategory: string;
	resolutionWanted: {
		refund: boolean;
		compensation: boolean;
		apology: boolean;
		replacement: boolean;
	};
	companyName: string;
	amountLost: string;
	transactionLocation: string;
}

export type Stats = {
	stat: string;
	amount: string;
	percentage: {
		amount: string;
		trend: string;
	};
	relativity: string;
};

export type User = {
	userId: string;
	profilePic: string;
	userName: string;
	userEmail: string;
	registrationDate: string;
	userPhone: string;
	status: string;
	userAddress: string;
	state: string;
	lga: string;
	nin: string;
	complaints: Array<string>;
};

export type Scammer = {
	scamId: string;
	scammer: string;
	socialMediaHandle: { input1: string };
	bankAccountDetails: { input1: string };
	website: { input1: string };
	phoneNumber: { input1: string };
};

export type NotificationData = {
	id: string;
	title: string;
	additionalInfo: string;
	time: string;
};

export type States ={
	code:string,
	name:string,
	lgas:string[]
	complaints:number
	users:number

}

export type UserObject={
	fullName:string,
	userId:string,
	profilePic:string
	userEmail:string
}

export type Admin={
	username:string
	email:string
	id:string
	registered:string
}