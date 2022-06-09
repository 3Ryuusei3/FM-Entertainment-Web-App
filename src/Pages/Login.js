import React from "react";
import logo from "../assets/logo.svg";

export default function Login() {
	return (
		<form action="" className="login">
			<a href="/">
				<img className="login-logo" src={logo} alt="Logo" />
			</a>
			<div className="login-card">
				<p className="login-title">Login</p>
				<div className="field">
					<input className="login-input" type="email" placeholder="Email address" name="email" required />
				</div>
				<div className="field">
					<input className="login-input" type="password" placeholder="Password" name="password" required />
				</div>
				<div>
					<button className="submit-btn" type="submit">
						Login to your account
					</button>
				</div>
				<p className="no-acc">
					Don't have an account? <a href="/signup">Sign up</a>
				</p>
			</div>
		</form>
	);
}
