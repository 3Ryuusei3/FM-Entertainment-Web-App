import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import "./App.css";
import "./Reset.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Tv from "./Pages/Tv";
import Bookmark from "./Pages/Bookmark";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import { data } from "./Data.js";
import Landing from "./Pages/Landing";

function App() {
	const [username, setUsername] = useState({});
	return (
		<UserContext.Provider value={{ username, setUsername }}>
			<BrowserRouter>
				<div className="app">
					<Header />
					<Routes>
						<Route path="/" element={<Landing />}></Route>
						<Route path="/home" element={<Home data={data} />} />
						<Route path="/movies" element={<Video data={data} />} />
						<Route path="/tv" element={<Tv data={data} />} />
						<Route path="/bookmark" element={<Bookmark data={data} />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Register />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
