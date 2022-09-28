import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { UserContext } from "./Context/UserContext";

function App() {
	const [img, setImg] = useState("");

	const imgData = (img) => {
		// console.log(img);
		return setImg(img);
	};

	window.onbeforeunload = () => {
		localStorage.removeItem("windowImg");
	};

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<UserContext.Provider value={img}>
					<Routes>
						<Route path="/" element={<Home passImgData={imgData} />} />
						<Route path="/services" element={<Services />} />
						<Route path="/products" element={<Products />} />
						<Route path="/sign-up" element={<SignUp />} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
