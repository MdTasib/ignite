import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	});

	return <div>hello</div>;
}

export default App;
