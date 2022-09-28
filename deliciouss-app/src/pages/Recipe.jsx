import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);

		// const memData = localStorage.getItem("popular");
		// setDetails(JSON.parse(memData));
		// console.log(details);
		// console.log(activeTab);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.id]);

	return (
		<DetailWrapper>
			<div className={"textImgContainer"}>
				<h2>{details.title}</h2>
				<div className={"imgContainer"}>
					<img src={details.image} alt="" />
				</div>
			</div>
			<Info>
				<Button
					className={activeTab === "instructions" ? "active" : ""}
					onClick={() => setActiveTab("instructions")}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}
				>
					Ingredients
				</Button>
				{activeTab === "instructions" && (
					<div>
						<h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
						<h7 dangerouslySetInnerHTML={{ __html: details.instructions }}></h7>
					</div>
				)}
				{activeTab === "ingredients" && (
					<ul>
						{details.extendedIngredients.map((ing) => (
							<li key={ing.id}>{ing.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}

	// .textImgContainer {
	// 	display: flex
	// 	flex-direction: column
	// }

	.imgContainer {
		// 	display: flex
		// 	flex-direction: column
		// 	justify-content: center
		// 	align-items: center
		// 	padding: 4px;
		// border-radius: 25px;
		// 	background: linear-gradient(45deg, #4347d3, #000000);
		// 	border: 4px solid #010101;
	}

	h2 {
		margin-bottom: 2rem;
		white-space: nowrap;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
	img {
		border-radius: 25px;
		border: 2px solid #cccccc;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	colos: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
	cursor: pointer;
`;

const Info = styled.div`
	margin-left: 10rem;
	h4 {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
`;

export default Recipe;
