import type { NextPage } from "next";
import { FaqComponent, Footer, InputGroup, NavBar, SmallFaqComponent } from "../../Components";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<div className="mt-[106px]">
				<div className="items-center w-full text-center bg-clearblue relative">
					<p className="pt-[36px] lg:pt-[111px] pb-[60px] lg:pb-[118px] mx-auto text-[24px] lg:text-[48px] font-semibold text-black">
						Frequently Asked <span className="text-eccblue">Questions</span>
					</p>
					<div className="absolute hidden lg:block w-full rounded-xl -bottom-[53px] px-[141px] -mt-16">
						<form>
							<div className="relative">
								<img
									src="./icons/search.svg"
									className="absolute top-[37.95px] left-[63.75px] fill-[#0BC5]"
									alt=""
								/>
								<input
									type="text"
									name=""
									id=""
									className="h-[106px] rounded-xl pl-[126px] pr-[196px] w-full placeholder:text-[20px] placeholder:text-black text-[20px] outline-none"
									placeholder="Search here for questions"
								/>
								<button className="absolute right-7 top-[23.5px] rounded-xl text-[20px] bg-[#0A5EBC] px-[48.5px] py-[14.5px] text-white">
									<p>Search</p>
								</button>
							</div>
						</form>
					</div>
					<form
						action=""
						className="px-[18px] w-full lg:hidden absolute z-50  -bottom-[17%]"
					>
						<div className="relative">
							<img
								src="./icons/search.svg"
								className="absolute top-[30%] left-[9px] fill-eccblue w-[19px] h-[19px]"
								alt=""
							/>
							<input
								type="text"
								name=""
								id=""
								className="h-[44px] rounded-xl pl-[40px] w-full placeholder:text-[9px] placeholder:text-black text-[9px] outline-none"
								placeholder="Search here for questions"
							/>
						</div>
					</form>
				</div>
				<div className="lg:hidden bg-gradient-to-br from-eccblue to-[#073D79] h-fit w-full px-[12.5px] pt-[42px] pb-[27px] select-none relative">
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"1"}
					/>
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"2"}
					/>
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"3"}
					/>
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"4"}
					/>
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"5"}
					/>
					<SmallFaqComponent
						title={"How do i access saved  complains? "}
						text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
						id={"6"}
					/>
				</div>
				<div className="pt-[100px] pb-[180px] lg:pb-[100px] bg-gradient-to-br from-eccblue to-[#073D79] hidden lg:block">
					<div className="mt-[201px] mx-[100.5px] lg:mx-4">
						<div className="grid grid-cols-3 gap-y-[50px] justify-items-center">
							<FaqComponent
								iconPath={"faq-1"}
								title={"How do i access saved  complains? "}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>
							<FaqComponent
								iconPath={"faq-2"}
								title={"How do i gain access to my profile?"}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>
							<FaqComponent
								iconPath={"faq-3"}
								title={"How do i access saved  complains? "}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>

							<FaqComponent
								iconPath={"faq-2"}
								title={"How do i access saved  complains?"}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>
							<FaqComponent
								iconPath={"faq-4"}
								title={"How do i gain access to my profile?"}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>
							<FaqComponent
								iconPath={"faq-5"}
								title={"How do i access saved  complains?"}
								text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."}
							/>
						</div>
					</div>
				</div>
				<div className="mt-[32px] lg:mt-[111px] mx-[12px]">
					<div className="w-full">
						<p className="text-center text-[18px] lg:text-[40px]">Can’t find an answer yet?</p>
						<p className="mt-[25px] text-eccblue text-[14px] lg:text-[20px] text-center">Let’s help you better by referring you to customer service attendee. We will contact you through your email</p>
					</div>
					<form action="">
						<div className="mt-[72px] mx-auto max-w-[1201px]">
							<div className="flex flex-col lg:flex-row space-x-0 lg:space-x-[27px] space-y-[27px] lg:space-y-0">
								<InputGroup
									label={"Full Name"}
									placeholder={"Enter Legal Fisrt Name"}
									value={""}
									setValue={undefined}
									type={"text"}
								/>
								<InputGroup
									label={"Email Address"}
									placeholder={"Enter Email Address"}
									value={""}
									setValue={undefined}
									type={"text"}
								/>
							</div>
							<div className="mt-[65px]">
								<p className="text-[20px] mb-[24px]">Question/Complaint</p>
								<textarea
									name=""
									className="w-full h-[324px] border-[2px] border-[#C5C5C5] rounded-xl resize-none px-[11.28px] lg:px-[20px] pt-[25px] placeholder:text-[#C5C5C5] outline-eccblue"
									placeholder="Write about what you want us to attend to you about"
								></textarea>
							</div>
							<div className="mx-auto text-center mt-[27px] lg:mt-[135px] mb-[112px] cursor-pointer">
								<button className="mx-auto text-[20px] w-full max-w-[587px] py-[11.5px] lg:px-[256.5px] flex items-center justify-center bg-darkblue rounded-xl text-white font-[600]">
									<p>Submit</p>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
