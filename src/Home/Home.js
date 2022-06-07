import React from "react";
import RecommendedCard from "./RecommendedCard";
import Swiper from "./Swiper";

export default function Home({ data }) {
	return (
		<div className="home">
			<div className="home__section">
				<p className="home__title">Trending</p>
				<Swiper data={data} />
			</div>
			<div className="home__section">
				<p className="home__title">Recommended for you</p>
				<div className="home__container home__container-recommended">
					{data.map((item) => {
						if (item.isTrending === false) {
							return <RecommendedCard item={item} key={item.title} />;
						}
						return false;
					})}
				</div>
			</div>
		</div>
	);
}
