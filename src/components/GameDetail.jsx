import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { smallImage } from "../utils/utils";

const GameDetail = ({ id }) => {
	const { game, screen, isLoading } = useSelector(state => state.detail);
	const navigate = useNavigate();

	// EXIT DETAIL
	const exitDetailHandler = e => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			navigate("/");
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			{!isLoading && (
				<CardShadow onClick={exitDetailHandler} className='shadow'>
					<Detail layoutId={id}>
						<Stats>
							<div className='rating'>
								<motion.h3 layoutId={`title ${id}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map(data => (
										<h3 key={data.platform.id}>{data.platform.name}</h3>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img
								layoutId={`image ${id}`}
								src={smallImage(game.background_image, 1280)}
								alt=''
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className='gallery'>
							{screen.results.map(screen => (
								<img
									src={smallImage(screen.image, 1280)}
									key={screen.id}
									alt={screen.image}
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 4rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;
const Info = styled(motion.div)`
	text-align: center;
`;
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 2rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 3rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 3rem 0rem;
`;

export default GameDetail;
