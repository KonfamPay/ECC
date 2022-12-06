import React from "react";

const PostaComplaint: React.FC = () => {
	return (
		<div className="lg:mt-48 bg-white items-center justify-center text-center relative">
			<img
				src="./images/rectangle2.svg"
				alt=""
				className="w-full min-h-[250px] object-cover"
			/>
			<div
				data-aos="zoom-in"
				className="absolute w-full h-full items-center justify-center text-center top-0 flex flex-col"
			>
				<p className="text-white font-semibold text-[19px] sm:text-[30px] lg:text-[40px] xl:text-[48px] px-[15px]">
					Not getting refund response or <span className="block sm:pt-2 lg:pt-5">replacement?</span>
				</p>
				<div className="pt-[20px] sm:pt-[40px] lg:pt-[72px]">
					<button className="items-center justify-center text-center bg-blue-600 rounded-[10px] py-3 sm:py-4 px-[15px] sm:px-[30px] lg:px-[45px]">
						<p className="mx-auto items-center justify-center text-center text-white font-semibold text-[10px] md:text-[13px] lg:text-[15px] xl:text-[18px]">Post a complaint</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostaComplaint;
