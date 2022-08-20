// API KEY
const key = "5cd47b7278d94d7e83a19d3b5e7cc8d0";

// BASE URL
const base_url = "https://api.rawg.io/api/";

// https://api.rawg.io/api/games?key=5cd47b7278d94d7e83a19d3b5e7cc8d0

// GETTING THE MONTH
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// GETTING THE DAY
const getCurrentDay = () => {
	const day = new Date().getDate() + 1;
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// GET FULLYEAR DD/MM/YYYY
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// POPULAR GAMES
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;
const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
const newGamesURL = () => `${base_url}${newGames}`;

export { popularGamesURL, upcomingGamesURL, newGamesURL };
