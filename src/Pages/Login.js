import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import logo from "../assets/logo.svg";

export default function Login() {
	const { username, setUsername } = useContext(UserContext);
	const LOGIN_URL = "https://manuflix.herokuapp.com/login";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [, /* errMsg */ setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post(LOGIN_URL, JSON.stringify({ email, password }), {
					headers: { "Content-Type": "application/json" },
				})
				.then((res) => {
					setUsername(res.data);
				});
			setEmail("");
			setPassword("");
			setSuccess(true);
		} catch (err) {}
	};

	return (
		<>
			{success ? (
				<div className="login">
					<div className="login-card success-card">
						<p className="login-title">{`Welcome ${username.username}!`}</p>
						<a href="/home">
							<button className="submit-btn">Go to the Home page</button>
						</a>
					</div>
				</div>
			) : (
				<form className="login" onSubmit={handleSubmit}>
					<a href="/">
						<img className="login-logo" src={logo} alt="Logo" />
					</a>
					<div className="login-card">
						<p className="login-title">Login</p>
						<div className="field">
							<label htmlFor="email"></label>
							<input
								className="login-input"
								id="email"
								type="email"
								placeholder="Email address"
								autoComplete="off"
								required
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className="field">
							<label htmlFor="password"></label>
							<input
								className="login-input"
								id="password"
								type="password"
								placeholder="Password"
								required
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
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
			)}
		</>
	);
}
