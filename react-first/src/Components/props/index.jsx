import React from "react";
import { Component } from "react";

export class Box extends Component {

	render() {
		const { title } = this.props;
		return <div className="box">
			{title.map((elem, index) => {
				return <div key={index} >
					<img src={elem.img} alt="nkar" />
					<h2>{elem.title}</h2>
					<p>{elem.description}</p>
					<span>{elem.price}</span>
				</div>
			})}
		</div>

	}
}