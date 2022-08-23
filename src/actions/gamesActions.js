import axios from "axios";
import {
	popularGamesURL,
	newGamesURL,
	upcomingGamesURL,
	searchGameURL,
} from "../api";

// ACTIONS CREATOR

// LOAD ALL POPULAR GAMES
const loadGames = () => async dispatch => {
	// LOADING
	dispatch({
		type: "LOADING",
	});

	// FETCH DATA
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());

	// DISPATCH
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			newGames: newGamesData.data.results,
			upcoming: upcomingData.data.results,
		},
	});
};

const searchedGames = game_name => async dispatch => {
	// LOADING
	dispatch({
		type: "LOADING",
	});

	// FETCH DATA
	const searchedGamesData = await axios.get(searchGameURL(game_name));

	// DISPATCH
	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchedGamesData.data.results,
		},
	});
};

export { loadGames, searchedGames };
