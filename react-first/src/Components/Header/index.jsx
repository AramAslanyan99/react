import React from "react";
import { Component } from "react";
import "./style.css";

class Header extends Component {
	constructor(props) {
		super(props)
		this.state={ 
			age:17,
			weight: '143kg'
		}
	}
	render() {
		return <div>
			<p>Hello World</p>
			<h2>{this.state.age}</h2>
			<h2>{this.state.weight}</h2>
		</div>
	}
}

export default Header