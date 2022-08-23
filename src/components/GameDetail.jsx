import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { smallImage } from "../utils/utils";

// IMAGES
import playstation from "../images/playstation.svg";
import steam from "../images/steam.svg";
import xbox from "../images/xbox.svg";
import nintendo from "../images/nintendo.svg";
import apple from "../images/apple.svg";
import gamepad from "../images/gamepad.svg";
import starEmpty from "../images/star-empty.png";
import starFull from "../images/star-full.png";

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

	//GET PLATFORM IMAGES
	const getPlatform = platform => {
		switch (platform) {
			case "PlayStation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
			default:
				return gamepad;
		}
	};

	// GET STARS
	const getStars = () => {
		const stars = [];
		const rating = Math.floor(game.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt='star' key={i} src={starFull} />);
			} else {
				stars.push(<img alt='star' key={i} src={starEmpty} />);
			}
		}
		return stars;
	};

	// LOADING SPINNER
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
								{getStars()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map(data => (
										<img
											src={getPlatform(data.platform.name)}
											key={data.platform.id}
											alt={data.platform.name}
										/>
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
		width: 1.2rem;
		height: 1.2rem;
		display: inline;
		object-fit: cover;
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
