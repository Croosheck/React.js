import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<Grid>
			{searchedRecipes.map((item) => {
				return (
					<Card key={item.id}>
						<Link to={"/recipe/" + item.id}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	grid-gap: 1.5rem;
`;

const Card = styled.div`
	margin: 1rem;
	box-shadow: 7px 7px 10px black;
	border-radius: 2rem;
	background: white;

	img {
		width: 100%;
		border-radius: 0.7rem;
	}

	a {
		text-decoration: none;
	}

	h4 {
		text-align: center;
		padding: 0.5rem;
	}
`;

export default Searched;
