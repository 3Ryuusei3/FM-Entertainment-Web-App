import React, { useState, useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import notBookMarked from "../assets/icon-bookmark-empty.svg";
import bookMarked from "../assets/icon-bookmark-full.svg";
import moviesCategory from "../assets/icon-category-movie.svg";
import tvCategory from "../assets/icon-category-tv.svg";
import playIcon from "../assets/icon-play.svg";

const Swipper = ({ data }) => {
	const dataTrending = data.filter((data) => data.isTrending);

	const [matches, setMatches] = useState(window.matchMedia("(min-width: 1250px)").matches);

	useEffect(() => {
		window.matchMedia("(min-width: 1250px)").addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	return (
		<Swiper
			slidesPerView={matches ? 2.5 : 1.5}
			spaceBetween={15}
			freeMode={true}
			modules={[FreeMode]}
			className="mySwiper"
		>
			{dataTrending.map((data, idx) => (
				<SwiperSlide className="bloc" key={idx}>
					<img src={`${data.thumbnail.trending.large}`} alt={data.title} />
					<div className="card__txtContainer">
						<p>{data.year}</p>
						<span>&#8226;</span>
						{data.category === "TV Series" ? (
							<img className="icon-card" src={tvCategory} alt="tv-icon" />
						) : (
							<img className="icon-card" src={moviesCategory} alt="icon-movie" />
						)}
						<p>{data.category}</p>
						<span>&#8226;</span>
						<p>{data.rating}</p>
					</div>
					<h3>{data.title}</h3>
					<div className="playContainer">
						<div className="playBtn">
							<img src={playIcon} alt="play" />
							<p>Play</p>
						</div>
					</div>
					<div className="bookMarked">
						<img
							className="bookMarked-img"
							src={data.isBookmarked ? bookMarked : notBookMarked}
							alt={data.isBookmarked ? "icon-bookarmed-full" : "icon-bookmarked-empty"}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Swipper;
