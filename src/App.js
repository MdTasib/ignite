import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/game/:id' element={<Home />}></Route>
			</Routes>
		</>
	);
}

export default App;
