import React from "react";

export default function ErrorPage() {
	return (
		<div className="errorpage">
			<svg className="error-img" xmlns="http://www.w3.org/2000/svg" stroke="white" fill="white" viewBox="0 0 32 32">
				<path
					d="M16 2a14 14 0 0 0-7.54 2.2 1 1 0 0 0 1.08 1.69 12 12 0 1 1-3.65 3.65 10.12 10.12 0 0 1 .65-.92A1 1 0 1 0 5 
              7.38c-.27.35-.52.71-.76 1.08A14 14 0 1 0 16 2z"
				/>
				<path
					d="M14 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM20 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM9.2 20.4a1 1 0 1 0 1.6 
              1.2A6.79 6.79 0 0 1 16 19a6.81 6.81 0 0 1 5.2 2.6 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2 1 1 0 0 0 .2-1.4A8.74 8.74 0 0 0 16 
              17a8.76 8.76 0 0 0-6.8 3.4z"
				/>
			</svg>

			<p>Did you get lost?</p>
			<a href="/">Go back to the home page</a>
		</div>
	);
}
