import axios from "axios";
import { popularGamesURL } from "../api";

// ACTIONS CREATOR

// LOAD ALL POPULAR GAMES
const loadGames = () => async dispatch => {
	// FETCH AXIOS
	const popularData = await axios.get(popularGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};

export { loadGames };
