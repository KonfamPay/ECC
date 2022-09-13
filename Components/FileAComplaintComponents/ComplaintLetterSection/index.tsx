const ComplaintLetterSection = () => {
	return (
		<div className="h-[150px] lg:h-fit w-full bg-darkblue mt-[14px] lg:mt-[72px] lg:pb-[58px]">
			<div className="relative px-[10px] lg:px-[100px] leading-[10.1px] lg:leading-[37px] text-[20px] font-medium lg:w-full max-w-[1600px] mx-auto">
				<p className="text-white w-[64.3%] lg:w-full pt-[17px] lg:pt-[67px] text-[12px] lg:text-[20px] leading-[14.1px] lg:leading-[37px]">
					Always try to resolve a problem with a business before seeking help from <br /> ecommerce complaint . You can do this by writing a complaint letter.
				</p>
				<p className="text-[#FCB714] w-[253px] lg:w-full mt-[6px] lg:mt-[10px] text-[12px] lg:text-[20px] leading-[15.1px] lg:leading-[37px]">Don’t worry you just have to fill in little details. We will finish it up for you!!</p>
				<button className="bg-white py-[7px] lg:py-[17px] px-[11.5px] lg:px-[21px] text-[8px] lg:text-[18px] font-semibold rounded-[4px] lg:rounded-xl mt-[10px] lg:mt-7 absolute right-[33px] bottom-0 lg:static">Write a complaint letter</button>
				<img
					className="absolute h-[92px] w-[164px] lg:w-[375px] lg:h-[170px] right-0 lg:right-[46.24px] top-0 -z-[]"
					src="/Images/handShake.png"
				/>
			</div>
		</div>
	);
};
export default ComplaintLetterSection;
