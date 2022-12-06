import type { NextPage } from "next";
import Head from "next/head";
import { Footer, NavBar } from "../Components/";
import AOS from "aos";
import { useEffect } from "react";
import { HeroSection, HowDoesItWork, Numbers, OurGoalsSection, PartnersSection, PostaComplaint, VentComplaintsSection } from "../Components/HomeSections/";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Head>
				<title>Ecommerce Complaint</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<NavBar searchIconIsPresent={true} />
			<HeroSection />
			<OurGoalsSection />
			<Numbers />
			<VentComplaintsSection />
			<HowDoesItWork />
			<Testimonials />
			<PartnersSection />
			<PostaComplaint />
			<Footer />
		</div>
	);
};

export default Home;
