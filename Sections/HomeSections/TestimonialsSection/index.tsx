import TestimonialCard from "./TestimonialCard";

const index: React.FC = () => {
	return (
		<div className="relative xl:w-full object-cover pb-[80px] xl:pb-0 xl:h-[960px] testimonialSection overflow-hidden">
			{/* <img src="./images/hourglass.svg" className="xl:w-full h-full xl:h-[960px] left-0 absolute -z-20"/>  */}
			<div className="xl:pl-[138px]">
				<div
					data-aos="fade-up"
					className="pl-[20px] pt-[30px] lg:pt-[40px] xl:pt-[72px]"
				>
					<p className="uppercase font-regular text-[13px] xl:text-[16px]">Testimonials</p>
					<p className="font-medium pt-[4px] text-[20px] xl:text-[40px]">Testimonies from vindicated customers</p>
				</div>
				<div
					data-aos="fade-up"
					className="pr-7 pt-[40px] lg:pt-0 lg:pl-0 flex flex-row gap-7 w-[1696px] lg:w-[1968px] xl:w-[2970px] relative testimonialCarousel"
				>
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
				</div>
			</div>
		</div>
	);
};

export default index;
