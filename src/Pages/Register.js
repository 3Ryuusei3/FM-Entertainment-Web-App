import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import axios from "axios";

export default function Register() {
	const USERNAME_REGEX = /^[A-z][A-z0-9]{5,23}$/;
	const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
	const PWD_REGEX = /^(?=.*[A-z])(?=.*[0-9]).{5,24}$/;
	const SIGNUP_URL = "https://manuflix.herokuapp.com/signup";

	const [username, setUsername] = useState("");
	const [validUsername, setValidUsername] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);

	const [, /* errMsg */ setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const USERNAME_REGEX = /^[A-z][A-z0-9]{5,23}$/;
		setValidUsername(USERNAME_REGEX.test(username));
	}, [username]);

	useEffect(() => {
		const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		const PWD_REGEX = /^(?=.*[A-z])(?=.*[0-9]).{5,24}$/;
		setValidPassword(PWD_REGEX.test(password));
		setValidMatch(password === matchPassword);
	}, [password, matchPassword]);

	useEffect(() => {
		setErrMsg("");
	}, [username, email, password, matchPassword]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USERNAME_REGEX.test(username);
		const v2 = EMAIL_REGEX.test(email);
		const v3 = PWD_REGEX.test(password);
		if (!v1 || !v2 || !v3) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			await axios.post(SIGNUP_URL, JSON.stringify({ username, email, password }), {
				headers: { "Content-Type": "application/json" },
			});
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No server response");
			} else if (err.response?.status === 409) {
				setErrMsg("Username taken");
			} else {
				setErrMsg("Registration Failed");
			}
		}
	};

	return (
		<>
			{success ? (
				<div className="login">
					<div className="login-card success-card">
						<p className="login-title">Success!</p>
						<a href="/login">
							<button className="submit-btn">Click here to log in!</button>
						</a>
					</div>
				</div>
			) : (
				<form className="login signup" onSubmit={handleSubmit}>
					<a href="/">
						<img className="login-logo" src={logo} alt="Logo" />
					</a>
					<div className="login-card">
						<p className="login-title">Sign Up</p>
						<div className="field">
							<label htmlFor="username"></label>
							<input
								className={username && !validUsername ? "login-input invalid-input" : "login-input"}
								id="username"
								type="text"
								placeholder="Username"
								autoComplete="off"
								required
								onChange={(e) => setUsername(e.target.value)}
							/>
							<div className={username && !validUsername ? "error-message" : "inactive"}>
								6-24 characters. Must start with a letter.
								<br /> Only letters and numbers.
							</div>
						</div>
						<div className="field">
							<label htmlFor="email"></label>
							<input
								className={email && !validEmail ? "login-input invalid-input" : "login-input"}
								id="email"
								type="email"
								placeholder="Email address"
								autoComplete="off"
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div className={email && !validEmail ? "error-message" : "inactive"}>Enter a valid email.</div>
						</div>
						<div className="field">
							<label htmlFor="password"></label>
							<input
								className={password && !validPassword ? "login-input invalid-input" : "login-input"}
								id="password"
								type="password"
								placeholder="Password"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className={password && !validPassword ? "error-message" : "inactive"}>
								6-24 characters. Must include a number
								<br />
								and a letter.
							</div>
						</div>
						<div className="field">
							<label htmlFor="repassword"></label>
							<input
								className={password && !validPassword ? "login-input invalid-input" : "login-input"}
								id="repassword"
								type="password"
								placeholder="Repeat Password"
								name="repassword"
								required
								onChange={(e) => setMatchPassword(e.target.value)}
							/>
							<div className={matchPassword && !validMatch ? "error-message" : "inactive"}>
								Must match the password above.
							</div>
						</div>
						<div className="clearfix">
							<button
								className="submit-btn"
								type="submit"
								disabled={!validUsername || !validPassword || !validMatch ? true : false}
							>
								Create an account
							</button>
						</div>
						<p className="no-acc">
							Already have an account? <a href="/login">Login</a>
						</p>
					</div>
				</form>
			)}
		</>
	);
}
