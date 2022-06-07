import React from "react";
import searchIcon from "../assets/icon-search.svg";

export default function Search() {
	return (
		<div className="search">
			<img className="search__icon" src={searchIcon} alt="" />
			<input className="search__input" type="text" placeholder="Search for movies or TV series" />
		</div>
	);
}
