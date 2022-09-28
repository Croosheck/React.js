import React, { useEffect, useState, useContext } from "react";
import "../../App.css";
import { UserContext } from "../../Context/UserContext";

function Products() {
	const image = useContext(UserContext);
	const [img, setImg] = useState("");

	useEffect(() => {
		if (image.length >= 1) {
			window.localStorage.setItem("windowImg", JSON.stringify(image));
		}
		setImg(window.localStorage.getItem("windowImg"));

		!Boolean(localStorage.getItem("windowImg")) && setImg("images/img-6.jpg");
	}, [image]);

	return (
		<>
			<h1
				style={{
					backgroundImage: "url(" + img + ")",
				}}
				className="products"
			>
				PRODUCTS
			</h1>
		</>
	);
}

export default Products;
