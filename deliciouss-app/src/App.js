import React from "react";
// BrowserRouter gives the functionality to navigate around pages
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Nav>
					<GiKnifeFork />
					<Logo to={"/"}>deliciouss</Logo>
				</Nav>
				<Category />
				<Search />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 3rem;
	font-weight: 400;
	font-family: "Lobster Two", cursive;
	color: #e6e6e6;
`;

const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		font-size: 4rem;
	}
`;

export default App;
