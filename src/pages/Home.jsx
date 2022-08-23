import { useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/gamesActions";
import { useParams } from "react-router-dom";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import Spinner from "../components/Spinner";

const Home = () => {
	// FETCH GAMES DATA
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	// GET GAME ID
	const { id } = useParams();

	// GET DATA FROM REDUX STORE
	const { newGames, upcoming, popular, isLoading, searched } = useSelector(
		state => state.games
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			{!isLoading && (
				<GameList>
					<AnimateSharedLayout type='crossfade'>
						<AnimatePresence>{id && <GameDetail id={id} />}</AnimatePresence>

						{searched.length ? (
							<section>
								<h2>Searched Games</h2>
								<Games>
									{searched.map(game => (
										<Game
											name={game.name}
											released={game.released}
											id={game.id}
											image={game.background_image}
											key={game.id}
										/>
									))}
								</Games>
							</section>
						) : (
							""
						)}

						<section>
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
						</section>

						<section>
							<h2>Popular Games</h2>
							<Games>
								{popular.map(game => (
									<Game
										name={game.name}
										released={game.released}
										id={game.id}
										image={game.background_image}
										key={game.id}
									/>
								))}
							</Games>
						</section>

						<section>
							<h2>New Games</h2>
							<Games>
								{newGames.slice(0, 3).map(game => (
									<Game
										name={game.name}
										released={game.released}
										id={game.id}
										image={game.background_image}
										key={game.id}
									/>
								))}
							</Games>
						</section>
					</AnimateSharedLayout>
				</GameList>
			)}
		</>
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
