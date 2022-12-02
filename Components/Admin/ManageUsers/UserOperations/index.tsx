import * as React from "react";
import { useState } from "react";
import OperationsInput from "./OperationsInputGroup/index";
import { Dispatch, SetStateAction } from "react";
import UserData from "./../../userData";
import { User } from "./../../../../types/complaintTypes.d";

type UserObject = {
	fullName: string;
	email: string;
	phone: string;
	verify: string;
};

interface OperationProps {
	operationType: string;
	userId: string;
	setOperation: Dispatch<SetStateAction<boolean>>;
	userData: Array<User>;

	addUser: (userObject: any) => void;
	editUser: (userObject: any, userId: string) => void;
	deleteUser: (userId: string) => void;
}

const UserOperation: React.FC<OperationProps> = ({ deleteUser, editUser, addUser, userData, userId, operationType, setOperation }) => {
	const user = userData.filter((user: any) => user.userId == userId)[0];

	const [fullName, setFullName] = useState(user ? user.userName : "");
	const [email, setEmail] = useState(user ? user.userEmail : "");
	const [phone, setPhone] = useState(user ? user.userPhone : "");
	const [verify, setVerify] = useState(user ? user.status : "Unverified");
	const userObject: UserObject = { fullName, email, phone, verify };

	return (
		<div className="w-[40%] h-fit z-10 rounded-[15px] shadow-2xl py-4   bg-white fixed border border-solid  ">
			<div className="w-[90%] mx-auto flex justify-end">
				<button
					onClick={() => {
						setOperation(false);
					}}
					className="text-white bg-eccblue w-[24px] h-[24px]  rounded-full"
				>
					X
				</button>
			</div>

			{operationType == "delete" ? (
				<div className="w-full">
					<h1 className="text-center text-eccblue text-[18px] font-medium mb-4">Delete User</h1>

					<p className="w-[90%] mx-auto text-medium text-[18px]">Are you sure you want to delete this user permanently from the database?</p>

					<div className="w-[90%] flex justify-end mt-4 mx-auto">
						<button
							onClick={() => {
								deleteUser(userId);
								setOperation(false);
							}}
							className="w-[100px] h-[50px] rounded-md bg-eccblue text-white"
						>
							Delete
						</button>
						<button
							onClick={() => {
								setOperation(false);
							}}
							className="text-[#838181] ml-4 font-medium"
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<div className="w-full">
					{operationType == "add" && <h1 className="text-center text-eccblue text-[18px] font-medium mb-4">Add a new user</h1>}
					{operationType == "edit" && <h1 className="text-center text-eccblue text-[18px] font-medium mb-4">Edit user</h1>}

					<OperationsInput
						label="Full Name:"
						value={fullName}
						setValue={setFullName}
						errors={""}
					/>
					<OperationsInput
						label="Email Address:"
						value={email}
						setValue={setEmail}
						errors={""}
					/>
					<OperationsInput
						label="Phone Nummber:"
						value={phone}
						setValue={setPhone}
						errors={""}
					/>
					<div className="w-[90%] mx-auto flex flex-row items-center justify-between">
						<p>Status:</p>
						<div className="flex flex-row gap-x-[40px]">
							<div className="flex items-center  flex-row gap-x-2">
								<div
									onClick={() => {
										setVerify("Unverified");
									}}
									className={` ${verify == "Unverified" && "bg-eccblue"} w-[24px] h-[24px] flex justify-center items-center rounded-md border border-[#bdbcdb]`}
								>
									<img
										src="../../icons/check-white.svg"
										alt=""
									/>
								</div>
								<p className="p-2 rounded-md text-[#F93232] bg-[#FFF0F0]">Unverified</p>
							</div>
							<div className="flex items-center flex-row gap-x-2">
								<div
									onClick={() => {
										setVerify("Verified");
									}}
									className={`w-[24px] ${verify == "Verified" && "bg-eccblue"} flex justify-center items-center h-[24px] rounded-md border border-[#bdbcdb]`}
								>
									<img
										src="../../icons/check-white.svg"
										alt=""
									/>
								</div>
								<p className="p-2 rounded-md text-[#31AA27] bg-[#EBF6EB]">Verified</p>
							</div>
						</div>
					</div>

					<div className="w-[90%] flex justify-end mt-4 mx-auto">
						{operationType == "add" ? (
							<button
								onClick={() => {
									addUser(userObject);
									setOperation(false);
								}}
								className="w-[100px] h-[50px] rounded-md bg-eccblue text-white"
							>
								Add User
							</button>
						) : (
							<button
								onClick={() => {
									editUser(userObject, userId);
									setOperation(false);
								}}
								className="w-[100px] h-[50px] rounded-md bg-eccblue text-white"
							>
								Edit User
							</button>
						)}
						<button
							onClick={() => {
								setOperation(false);
							}}
							className="text-[#838181] ml-4 font-medium"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
export default UserOperation;
