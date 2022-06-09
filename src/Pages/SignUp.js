import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
export default function SignUp() {
	const initialValues = { email: "", password: "", repassword: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = "Required";
		} else if (!regex.test(values.email)) {
			errors.email = "Invalid";
		}
		if (!values.password) {
			errors.password = "Required";
		} else if (values.password.length < 6) {
			errors.password = "At least 6 characters";
		} else if (values.password.length > 12) {
			errors.password = "Cannot exceed 12 characters";
		}
		if (values.repassword !== values.password) {
			errors.repassword = "Must match";
		}
		return errors;
	};

	return (
		<form onSubmit={handleSubmit} className="login signup">
			<a href="/">
				<img className="login-logo" src={logo} alt="Logo" />
			</a>
			<div className="login-card">
				<p className="login-title">Sign Up</p>
				<div className="field">
					<input
						className="login-input"
						type="email"
						placeholder="Email address"
						name="email"
						value={formValues.email}
						onChange={handleChange}
					/>
					<div className="error-message">{formErrors.email}</div>
				</div>
				<div className="field">
					<input
						className="login-input"
						type="password"
						placeholder="Password"
						name="password"
						value={formValues.password}
						onChange={handleChange}
					/>
					<div className="error-message">{formErrors.password}</div>
				</div>
				<div className="field">
					<input
						className="login-input"
						type="password"
						placeholder="Repeat Password"
						name="repassword"
						value={formValues.repassword}
						onChange={handleChange}
					/>
					<div className="error-message">{formErrors.repassword}</div>
				</div>
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
