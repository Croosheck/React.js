import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
	let img = "images/img-home.jpg";

	const [toggle, setToggle] = useState(true);

	return (
		<div
			className="hero-container"
			style={
				toggle
					? {
							backgroundImage: "url(" + img + ")",
					  }
					: null
			}
		>
			{!toggle && <video src="/videos/video-1.mp4" autoPlay loop mute="true" />}
			<h1>ADVENTURE AWAITS</h1>
			<p>What are You waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					btnSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					btnSize="btn--large"
					onClick={() => setToggle(!toggle)}
				>
					WATCH TRAILER <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
