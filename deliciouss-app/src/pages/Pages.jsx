import React from "react";
import Home from "./Home";
import Cuisine from "../pages/Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";

function Pages() {
	return (
		// For 'path' render 'element' component
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:search" element={<Searched />} />
			<Route path="/recipe/:id" element={<Recipe />} />
		</Routes>
	);
}

export default Pages;
