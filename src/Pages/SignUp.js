import React from "react";
import logo from "../assets/logo.svg";
export default function SignUp() {
	return (
		<form action="" className="login">
			<a href="/">
				<img className="login-logo" src={logo} alt="Logo" />
			</a>
			<div className="login-card">
				<p className="login-title">Sign Up</p>
				<input className="login-input" type="email" placeholder="Email address" name="email" required />
				<input className="login-input" type="password" placeholder="Password" name="psw" required />
				<input className="login-input" type="password" placeholder="Repeat Password" name="psw-repeat" required />
				<div className="clearfix">
					<button className="submit-btn" type="submit">
						Create an account
					</button>
				</div>
				<p className="no-acc">
					Already have an account? <a href="/login">Login</a>
				</p>
			</div>
		</form>
	);
}
