import React from "react";
import "../styles/navbar.css";
import lines from "../assests/navbar/3lines.svg"
export function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-inner">
				<span className="navbar-brandname">Gyaanam</span>
				<ul className="nav-buttons">
					<li>Product</li>
					<li>Services</li>
					<li>About</li>
					{/* <li>
						<button>Log In</button>
					</li> */}
				</ul>
				<img className="lines" src={lines} alt="" />
			</div>
		</div>
	);
}
