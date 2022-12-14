import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
	return (
		<>
			<li className={props.classNameli}>
				<Link
					to={props.path}
					className="cards__item__link"
					onClick={props.onClick}
				>
					<figure className="cards__item__pic-wrap" data-category={props.label}>
						<img
							src={props.src}
							alt="Travel Image"
							className="cards__item__img"
						/>
					</figure>
					<div className="cards__item__info">
						<h5 className={props.classNameh5}>{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default CardItem;
