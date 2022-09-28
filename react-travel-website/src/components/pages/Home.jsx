import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home(props) {
	return (
		<>
			<HeroSection />
			<Cards
				passImg={(image) => {
					props.passImgData(image);
				}}
			/>
			<Footer />
		</>
	);
}

export default Home;
