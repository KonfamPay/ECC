import Link from "next/link";

export const KonfamPayCallout = () => (
	<section className="bg-[#0F0F0F] pt-[40px]">
		<p className="text-white text-[36px] max-w-[600px] text-center mx-auto">You can avoid getting scammed by using a trusted escrow service</p>
		<p className="text-white text-center mt-[10px] font-medium">
			Avoid getting scammed, Use{" "}
			<Link href={""}>
				<span className="text-[#67B467] cursor-pointer">konfam Pay.</span>
			</Link>
		</p>
		<div className="flex items-center mt-[37px] flex-col">
			<button className="px-[88px] text-white py-[22px] bg-[#67B467] rounded-xl">Learn more</button>
			<img
				className="mt-[42px]"
				src="/Images/kfpImage.png"
			/>
		</div>
	</section>
);
