import React from "react";
import { Component } from "react";
import "./style.css";
import LogoImg from '../../assets/images/logo.png';


export class Header1 extends Component {
	render() {
		return (
			<div className="HeaderImg">
				<div className="container">
					<div className="HeaderText">
						<div className="LogoText">
							<div className="Logo">
								<img src={LogoImg} alt="Logo" />
							</div>
							<div className="Text">
								<p> Simple House </p>
								<p>new restaurant template</p>
							</div>
						</div>
						<nav className="Navbar">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Contact</a></li>

							</ul>
						</nav>
					</div>
				</div>

			</div>
		)
	}
}