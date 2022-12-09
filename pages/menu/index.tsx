import Link from "next/link";
import { NextPage } from "next";
import MenuLink from "../../Components/Menu/menuLinks";
import { useRouter } from "next/router";

const Menu: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<div className="h-screen w-screen bg-clearblue">
				<header className="  h-1/6">
					<div className="flex items-center">
						<img
							src="./images/logo.svg"
							className="ml-5 h-32 w-32 -my-10"
							alt="Adetunji's Adeyinka's Logo"
						/>
					</div>
				</header>

				<div className="flex flex-col items-center  justify-around h-5/6 ">
					<div className=" items-center">
						<ul className="flex flex-col  items-center h-full justify-between">
							<MenuLink
								name="Write a complaint letter"
								href="/file-complaint"
							/>
							<MenuLink
								name="Complaints"
								href="/Complaints"
							/>
							<MenuLink
								name="Latest scams"
								href="/latest"
							/>
							<MenuLink
								name="Statistics"
								href="/statistics"
							/>
						</ul>
					</div>

					<div className="flex flex-row items-start p-1 gap-4">
						<div>
							<button className="bg-eccblue  w-40 h-11 rounded-md font-semibold text-white">
								<span>File a complaint</span>
							</button>
						</div>
						<div>
							<button className="bg-clearblue w-[142.27px] h-11 border border-solid border-eccblue   rounded-md font-semibold text-eccblue">
								<Link href={"/login"}>
									<p>Login/Signup</p>
								</Link>
							</button>
						</div>
					</div>

					<div>
						<div>
							<button
								onClick={() => router.back()}
								className="bg-eccblue w-12 h-12  rounded-[27.5px] font-semibold text-white"
							>
								X
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
