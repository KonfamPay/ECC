import Link from "next/link";
import { NextPage } from "next";

import { useRouter } from "next/router";

const Success: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<div className="h-screen w-screen bg-eccblue">
				<header className="  h-1/6">
					<div className="flex items-center">
						<img
							src="./Images/whiteEccLogo.svg"
							className="ml-5 h-32 w-32 -my-10"
							alt="Adetunji's Adeyinka's Logo"
						/>
					</div>
				</header>

				<div className="flex flex-col items-center  justify-around h-5/6 ">
					<div className=" items-center">
						<ul className="flex flex-col  items-center h-full justify-between">
							<div className="text-white font-semibold text-3xl">Successful</div>
							<div>
								<img
									className="w-[100px] h-[100px] text-white"
									src="./icons/check.svg"
									alt="check"
								/>
							</div>
							<div>
								<p className="text-white text-center">your password has been successfuly reset you can now login into your account with your new password</p>
							</div>
						</ul>
					</div>

					<div className="w-[80%]">
						<button
							onClick={() => router.push("/login")}
							className="bg-white w-full h-[40px]  rounded-[27.5px] font-normal text-black"
						>
							Procees to login
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Success;
