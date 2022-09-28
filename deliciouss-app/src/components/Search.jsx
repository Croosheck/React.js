import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + input);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<FaSearch />
			<input
				placeholder="search"
				onChange={(e) => setInput(e.target.value)}
				type="text"
				value={input}
			/>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	margin: 2rem 5rem;
	display: flex;
	justify-content: center;

	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.2rem;
		color: white;
		padding: 0.5rem 3rem;
		border: none;
		border-radius: 0.7rem;
		outline: none;
		width: 10rem;
		box-shadow: 0 0 20px rgb(255, 255, 255);
		visibility: 10%;
		transition: width 0.5s;
		&:focus {
			background: linear-gradient(35deg, #111111, #836f6f);
			width: 30rem;
		}
	}

	svg {
		display: flex;
		justify-content: flex-start;
		transform: translate(200%, 70%);
		color: white;
	}
`;

export default Search;
