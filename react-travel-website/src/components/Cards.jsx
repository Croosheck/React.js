import React, { useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							classNameli="cards__item"
							classNameh5="cards__item__text__big"
							src="images/img-2.jpg"
							text="Travel through the Island of Bali in a Private Cruise"
							label="Luxury"
							path="/products"
							onClick={() => props.passImg("images/img-2.jpg")}
						/>
						<CardItem
							classNameli="cards__item"
							classNameh5="cards__item__text__big"
							src="images/img-8.jpg"
							text="Ride through the Sahara Desert on a guided camel tour"
							label="Survival"
							path="/products"
							onClick={() => props.passImg("images/img-8.jpg")}
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							classNameli="cards__item"
							classNameh5="cards__item__text"
							src="images/img-9.jpg"
							text="Explore the hidden waterfall deep inside the Amazon Jungle"
							label="Adventure"
							path="/products"
							onClick={() => props.passImg("images/img-9.jpg")}
						/>
						<CardItem
							classNameli="cards__item"
							classNameh5="cards__item__text"
							src="images/img-3.jpg"
							text="Discover the unexplored areas of the Atlantic Ocean"
							label="Mystery"
							path="/products"
							onClick={() => props.passImg("images/img-3.jpg")}
						/>
						<CardItem
							classNameli="cards__item"
							classNameh5="cards__item__text"
							src="images/img-1.jpg"
							text="Reach the highest tops, overcome your weaknesses"
							label="Discovery"
							path="/products"
							onClick={() => props.passImg("images/img-1.jpg")}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
