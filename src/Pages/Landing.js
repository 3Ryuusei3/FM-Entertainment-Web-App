import React from "react";
import logo from "../assets/logo.svg";
import logoManuflix from "../assets/manuflix-logo.png";

export default function Landing() {
	return (
		<div className="landing">
			<div className="landing-nav">
				<img className="landing__logo" src={logoManuflix} alt="" />
				<img className="header__logo" src={logo} alt="Logo" />
			</div>
			<div className="landing-text">
				<p className="landing-title">
					Unlimited movies, <br />
					TV shows and more.
				</p>
				<p className="landing-subtitle">Watch anything anywhere</p>
				<div className="landing-links">
					<a className="landing-btn" href="/signup">
						Log in
					</a>
					<a className="landing-btn" href="/signup">
						Sign up
					</a>{" "}
				</div>
			</div>
		</div>
	);
}
