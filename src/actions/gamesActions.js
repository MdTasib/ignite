import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

// ACTIONS CREATOR

// LOAD ALL POPULAR GAMES
const loadGames = () => async dispatch => {
	dispatch({
		type: "LOADING",
	});

	// FETCH DATA
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());

	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			newGames: newGamesData.data.results,
			upcoming: upcomingData.data.results,
		},
	});
};

export { loadGames };
