import "./App.css";
import "./Reset.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Search from "./Search/Search";
import { data } from "./Data.js";

function App() {
	return (
		<div className="App">
			<Header />
			<Search />
			<Home data={data} />
		</div>
	);
}

export default App;
