import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";

const Home = () => {
	// FETCH GAMES DATA
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	// GET DATA FROM REDUX STORE
	const { newGames, upcoming, popular } = useSelector(state => state.games);

	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map(game => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
				))}
			</Games>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 3rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
