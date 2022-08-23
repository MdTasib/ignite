import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";
import { useDispatch } from "react-redux";
import { searchedGames } from "../actions/gamesActions";
import { fadeIn } from "../utils/animations";

const Navbar = () => {
	const [textInput, setTextInput] = useState("");
	const dispatch = useDispatch();

	const handleTextInput = e => setTextInput(e.target.value);

	const handleSearch = e => {
		e.preventDefault();
		dispatch(searchedGames(textInput));
		console.log(textInput);
		setTextInput("");
	};

	const handleClearSearch = () => dispatch({ type: "CLEAR_SEARCHED" });

	return (
		<StyledNav variants={fadeIn} initial='hidden' animate='show'>
			<Logo onClick={handleClearSearch}>
				<img src={logo} alt='logo' />
				<h1>Ignite</h1>
			</Logo>
			<form onSubmit={handleSearch} className='search'>
				<input
					value={textInput}
					onChange={handleTextInput}
					type='text'
					required
				/>
				<button type='submit'>SEARCH</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 2rem 4rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
		outline: 0;
	}
	button {
		font-size: 1rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
		box-shadow: 0px 0px 5px #ff7676;
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Navbar;
