import UserData from "../../../../Components/Admin/userData";
import { useRouter } from "next/router";
import Wrapper from "../../../../Components/Admin/Navs/navWrapper";
import { useState } from "react";
import UserPersonalInfo from "../../../../Components/Admin/ManageUsers/userPersonalInfo";
import ComplaintInfo from "./../../../../Components/Admin/ManageUsers/UserComplaintInfo/index";

const UserDetails = () => {
	const router = useRouter();
	const userId = router.query.id;
	const [section, setSection] = useState("Personal Information");

	const user = UserData.filter((currentUser) => currentUser.userId == userId)[0];

	const [userData, setUserData] = useState(user ? user : null);

	return (
		<Wrapper>
			<div
				className="w-full h-full
			 bg-white rounded-[15px] lg:pt-[0px]  lg:overflow-hidden"
			>
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
					<div className="w-full border flex text-[#848484] flex-row justify-evenly mt-[30px] border-x-0 border-t-0 border-b border-b-[#dcdcdc]">
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
					{user && (
						<div className="w-full">
							{section == "Personal Information" ? (
								<UserPersonalInfo userData={user} />
							) : (
								<div className="w-full">
									{user.complaints.length > 0 ? (
										<div className="w-full">
											<ComplaintInfo user={user} />
										</div>
									) : (
										<div className="h-[300px] w-full flex justify-center items-center ">
											<h1 className="text-center text-[24px]">User does not have any registered complaints</h1>
										</div>
									)}
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default UserDetails;
