import { bool } from "joi";
import type { NextPage } from "next";
import { useRef, useState } from "react";
import { Footer, NavBar } from "../../Components";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";

const index: NextPage = () => {
	const [isActive, setIsActive] = useState(true);
	return (
		<div>
			<NavBar hasWhiteText={false} />
			<div className="mx-auto text-center mt-[70px]">
				<div className="bg-darkblue text-white pt-[82px] lg:pt-[235px] pb-[54px] lg:pb-[166px] w-full">
					<div className="relative">
						<div className="flex flex-row justify-center items-center text-[#80868D] space-x-[25px] lg:space-x-[100px]">
							<h1
								className={`text-[20px] lg:text-[48px] font-medium -tracking-wide cursor-pointer pb-3 lg:pb-6 ${isActive && "text-white border-b-white border-b-[6px]"}`}
								onClick={() => {
									setIsActive(true);
								}}
							>
								Terms & conditions
							</h1>
							<h1
								className={`text-[20px] lg:text-[48px] font-medium -tracking-wide cursor-pointer pb-3 lg:pb-6 ${!isActive && "text-white border-b-white border-b-[6px]"}`}
								onClick={() => setIsActive(false)}
							>
								Privacy policy
							</h1>
						</div>
						<div className="bg-white w-full absolute bottom-[2px] h-[2px]"></div>
					</div>
				</div>
			</div>
			<div className="ml-[19px] mr-[14px] lg:mx-[100px] mb-8 lg:mb-[100px] text-[#545454]">
				{isActive && (
					<div className="mt-[11px] lg:mt-[50px]">
						<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">Terms & conditions</h2>
						<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
							As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
							nearly ****/- lost because of them now there
						</p>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">Introduction</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them.
							</p>
							<div className="mt-6 hidden lg:block">
								<div className="flex flex-col justify-center space-y-[16px] text-[20px]">
									<div>
										<p className="inline mr-3 text-black">1</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">2</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">3</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">4</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-[52px] hidden lg:block">
								<p className="text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
									As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
									as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct
									all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
								</p>
							</div>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">How are complaint ressolved</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-[10px] lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">Payment refund</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-[10px] lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">Liability limitation</h2>
							<p className="block lg:hidden text-[14px] leading-[21px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our c As of now iam a distributor of pine tm from vizag andhra pradesh as
								of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our c
							</p>
							<div className="hidden lg:flex mt-8 flex-col justify-center space-y-[16px] list-decimal text-[20px]">
								<div>
									<p className="inline mr-3 text-black">1</p>
									<p className="inline text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
										As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
										as nearly ****/- lost because of them now there is no website of them.
									</p>
								</div>
								<div>
									<p className="inline mr-3 text-black">2</p>
									<p className="inline text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
										As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
										as nearly ****/- lost because of them now there is no website of them.
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
				{!isActive && (
					<div className="mt-[13px] lg:mt-[50px]">
						<div>
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">Privacy policy</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-3 lg:mt-12">
							<div>
								<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">About Us</h2>
								<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
									As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
									as nearly ****/- lost because of them now there is no website of them.
								</p>
							</div>
							<div className="mt-6 hidden lg:block">
								<div className="flex flex-col justify-center space-y-[16px] list-decimal text-[20px]">
									<div>
										<p className="inline mr-3 text-black">1</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">2</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">3</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
									<div>
										<p className="inline mr-3 text-black">4</p>
										<p className="inline leading-[21px] lg:leading-[37px]">
											As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from
											them as nearly ****/- lost because of them now there is no website of them.
										</p>
									</div>
								</div>
								<div className="mt-6">
									<p className="leading-[21px] lg:leading-[37px]">
										As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
										as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct
										all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
									</p>
								</div>
							</div>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">1 Third - Party link</h2>
							<p className="mt-0 lg:mt-8 leading-[21px] lg:leading-[37px] text-[14px] lg:text-[20px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">2 Right to ammendment</h2>
							<p className="mt-0 lg:mt-8 leading-[21px] lg:leading-[37px] text-[14px] lg:text-[20px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">3 How we use your personal information</h2>
							<p className="block lg:hidden text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our c 1 s of now iam a distributor of pine tm from vizag andhra pradesh as
								of **** oct all our costumer 2 2 ls got reversed and my money lost no responce from them as nearly ****/- lost 3 3 hhfhhhcause of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our c
							</p>
							<div className="hidden lg:flex flex-col justify-center space-y-[16px] list-decimal text-[20px] mx-[27.5px]">
								<div>
									<p className="inline mr-3 text-black">1</p>
									<p className="inline leading-[21px] lg:leading-[37px]">
										As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
										as nearly ****/- lost because of them now there is no website of them.
									</p>
								</div>
								<div>
									<p className="inline mr-3 text-black">2</p>
									<p className="inline leading-[37px]">
										As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them
										as nearly ****/- lost because of them now there is no website of them.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">4 Disclosure of your personal data</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="mt-3 lg:mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">5 Definition</h2>
							<p className="mt-0 lg:mt-8 text-[14px] lg:text-[20px] leading-[21px] lg:leading-[37px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
						<div className="hidden lg:block mt-12">
							<h2 className="text-[24px] lg:text-[50px] text-darkblue lg:text-black font-medium -tracking-wide">6 Protecting your information</h2>
							<p className="mt-8 leading-[37px] text-[20px]">
								As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as
								nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our
								costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...
							</p>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default index;
