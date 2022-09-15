import type { NextPage } from "next";
import Link from "next/link";
const profile: NextPage = (props) => {
	return (
		<div className="w-full bg-white rounded-[20px] h-[797px]">
			<img
				src="/icons/dashboard-icons/profile-header.svg"
				className="rounded-t-[20px] w-full"
				alt=""
			/>
			<div className="mx-auto w-[158px] h-[158px] -mt-[115px] relative">
				<img
					src="/images/dummy-profile.png"
					alt=""
				/>
				<img
					src="/icons/dashboard-icons/camera.svg"
					className="absolute bottom-0 right-0 cursor-pointer"
					alt=""
				/>
			</div>
			<div className="text-center mt-[19px] ">
				<p className="text-[24px] font-[500]">Voke Onoriode</p>
				<p className="mt-[10px] text-[18px] font-[500]">Vokeonoriode@gmail.com</p>
			</div>
			<div className="mx-[74.5px] mt-[29px] flex flex-col space-y-[96px]">
				<div className="flex flex-row space-x-[156px]">
					<div>
						<div>
							<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[165px]">
								<p className="text-eccblue text-[16px]">Phone Number</p>
							</div>
							<div className="mt-[10px]">
								<p className="text-[18px]">09065748390</p>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[122px]">
								<p className="text-eccblue text-[16px]">Date of Birth</p>
							</div>
							<div className="mt-[10px]">
								<p className="text-[18px]">12-01-2001</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row space-x-[81px]">
					<div>
						<div>
							<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[240px]">
								<p className="text-eccblue text-[16px]">Address</p>
							</div>
							<div className="mt-[10px]">
								<p className="text-[18px] w-[219px]">4. jubril Adejumobi Street Lagos, Nigeria</p>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[103px]">
								<p className="text-eccblue text-[16px]">State</p>
							</div>
							<div className="mt-[10px]">
								<p className="text-[18px]">Lagos</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-[73px] bg-eccblue mx-[73px] rounded-xl mt-[70px] flex flex-row justify-center">
				<img
					className="mr-4"
					src="/icons/dashboard-icons/camera-01.svg"
					alt=""
				/>
				<p className="text-center text-white font-[600] py-[16.5px]">Change Photo</p>
			</div>
		</div>
	);
};

export default profile;
