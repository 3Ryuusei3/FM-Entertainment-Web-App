import React from "react";
import bookmarkEmptyIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkFullIcon from "../assets/icon-bookmark-full.svg";
import moviesCategory from "../assets/icon-category-movie.svg";
import tvCategory from "../assets/icon-category-tv.svg";

export default function RecommendedCard({ item }) {
	return (
		<div className="home__card-container-recommended">
			<div
				className="home__card home__card-recommended"
				style={{
					backgroundImage: `url(${item.thumbnail.regular.small})`,
				}}
			>
				<div className="home__card__bookmark">
					<img
						className="home__card__icon"
						src={!item.isBookmarked ? bookmarkEmptyIcon : bookmarkFullIcon}
						alt="Not bookmarked icon"
					/>
				</div>
			</div>
			<div className="home__card__info">
				<div className="home__card__details">
					<p>{item.year}</p>
					<p>&#8226;</p>
					<img src={item.category === "Movie" ? moviesCategory : tvCategory} alt="" />
					<p>{item.category}</p>
					<p>&#8226;</p>
					<p>{item.rating}</p>
				</div>
				<div className="home__card__title">
					<p>{item.title}</p>
				</div>
			</div>
		</div>
	);
}
