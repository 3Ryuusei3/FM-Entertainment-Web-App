import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Reset.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Video from "./Pages/Video";
import Tv from "./Pages/Tv";
import Bookmark from "./Pages/Bookmark";
import { data } from "./Data.js";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<Home data={data} />} />
					<Route path="/movies" element={<Video data={data} />} />
					<Route path="/tv" element={<Tv data={data} />} />
					<Route path="/bookmark" element={<Bookmark data={data} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
