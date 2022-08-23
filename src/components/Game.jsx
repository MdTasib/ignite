import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadDetail } from "../actions/detailAction";
import { smallImage } from "../utils/utils";

const Game = ({ name, released, id, image }) => {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame layoutId={id} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${id}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	/* min-height: 30vh; */
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	display: grid;
	align-items: end;

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
