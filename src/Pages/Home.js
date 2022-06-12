import React, { useState } from "react";
import Swiper from "./Swiper";
import searchIcon from "../assets/icon-search.svg";
import bookmarkEmptyIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkFullIcon from "../assets/icon-bookmark-full.svg";
import moviesCategory from "../assets/icon-category-movie.svg";
import tvCategory from "../assets/icon-category-tv.svg";

export default function Home({ data }) {
	const [dataNotTrending, setDataNotTrending] = useState(data.filter((data) => !data.isTrending));
	const dataHandler = (e) => {
		if (e.target.value.length >= 1) {
			setDataNotTrending(data.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase())));
		} else {
			setDataNotTrending(data.filter((data) => !data.isTrending));
		}
	};
	/* 	const [currentTitle, setCurrentTitle] = useState("");
	const bookmarkHandler = (title) => {
		setCurrentTitle(title.isBookmarked);

		console.log(title);
	}; */
	const cardsMapping = dataNotTrending.map((data, idx) => (
		<div key={idx} className="home__card-container-recommended">
			<div
				className="home__card home__card-recommended"
				style={{
					backgroundImage: `url(${data.thumbnail.regular.large})`,
				}}
			>
				<div className="home__card__bookmark" /* onClick={() => bookmarkHandler(data)} */>
					<img
						className="home__card__icon"
						src={!data.isBookmarked ? bookmarkEmptyIcon : bookmarkFullIcon}
						alt="Not bookmarked icon"
					/>
				</div>
			</div>
			<div className="home__card__info">
				<div className="home__card__details">
					<p>{data.year}</p>
					<p>&#8226;</p>
					<img src={data.category === "Movie" ? moviesCategory : tvCategory} alt="" />
					<p>{data.category}</p>
					<p>&#8226;</p>
					<p>{data.rating}</p>
				</div>
				<div className="home__card__title">
					<p>{data.title}</p>
				</div>
			</div>
		</div>
	));

	return (
		<div className="home">
			<div className="search">
				<img className="search__icon" src={searchIcon} alt="" />
				<input
					onChange={dataHandler}
					className="search__input"
					id="search"
					type="text"
					placeholder="Search for movies or TV series"
				/>
			</div>
			<div className="home__section">
				<p className="home__title">Trending</p>
				<Swiper data={data} />
			</div>
			<div className="home__section">
				<p className="home__title">Recommended for you</p>
				{dataNotTrending.length >= 1 ? (
					<div className="home__container home__container-recommended">{cardsMapping}</div>
				) : (
					<div className="errorHandler">
						<svg xmlns="http://www.w3.org/2000/svg" stroke="white" fill="white" viewBox="0 0 32 32">
							<path d="M16 2a14 14 0 0 0-7.54 2.2 1 1 0 0 0 1.08 1.69 12 12 0 1 1-3.65 3.65 10.12 10.12 0 0 1 .65-.92A1 1 0 1 0 5 7.38c-.27.35-.52.71-.76 1.08A14 14 0 1 0 16 2z" />
							<path
								d="M14 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM20 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM9.2 20.4a1 1 0 1 0 1.6 1.2A6.79 6.79 0 0 1 16 19a6.81 6.81 0 0 1 5.2 2.6 1 1 
              0 0 0 .8.4 1 1 0 0 0 .6-.2 1 1 0 0 0 .2-1.4A8.74 8.74 0 0 0 16 17a8.76 8.76 0 0 0-6.8 3.4z"
							/>
						</svg>
						<p>No results found</p>
					</div>
				)}
			</div>
		</div>
	);
}
