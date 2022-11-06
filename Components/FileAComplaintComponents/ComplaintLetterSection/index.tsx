interface Props {
	place: string;
}

const ComplaintLetterSection: React.FC<Props> = ({ place }) => {
	return (
		<div className={`md:h-[150px] lg:h-fit w-full bg-darkblue ${place !== "dashboard" && "mt-[14px] lg:mt-[72px]"}`}>
			<div className="relative px-[10px] xl:px-[38.5px] flex flex-row justify-between leading-[14.1px] lg:leading-[37px] text-[12px] font-medium lg:w-full max-w-[1600px] mx-auto">
				<div className="w-[64.3%] lg:w-full text-[12px] lg:text-[18px] xl:text-[20px] pb-[28px] lg:pb-0 mb-[27.55px]">
					<div className="text-white pt-[17px] lg:pt-[27px] leading-[14.1px] lg:leading-[26.82px] flex-wrap">
						Always try to resolve a problem with a business before seeking help from <br /> ecommerce complaint . You can do this by writing a complaint letter.
						<p className="lg:block hidden text-[#FCB714] leading-[26.82px]">Don’t worry you just have to fill in little details. We will finish it up for you!!</p>
					</div>
					<p className="lg:hidden block text-[#FCB714] mt-[6px] lg:mt-[10px] leading-[15.1px] lg:leading-[37px] flex-wrap">Don’t worry you just have to fill in little details. We will finish it up for you!!</p>
				</div>
				{/* absolute h-[92px] w-[164px] lg:w-[375px] lg:h-[170px] right-0 lg:right-[-19px] top-0 z-99 */}
				<div className="absolute max-w-[375px] h-[170px] -right-[18px] top-0">
					<img
						className="w-full h-full"
						src="/Images/handShake.png"
					/>
				</div>
				<button className="bg-white py-[7px] lg:py-[17px] px-[11.5px] lg:px-[21px] text-[8px] lg:text-[18px] font-semibold rounded-[8.7px] lg:rounded-xl absolute right-[33px] top-[100px] lg:static mt-0 xl:mb-[26.45px]">Write a complaint letter</button>
			</div>
		</div>
	);
};
export default ComplaintLetterSection;
