import React, { Component } from "react";
import "./style.css";
import nkar from '../../assets/images/img-01.jpg'; 

export class Section3 extends Component {
	render() {
		 return (
			<div className="section3Text">
				<div className="container">
                   <div className="sectionContent">
							<div className="sectionImg">
                         <img src={nkar} alt="avocado" />
							</div>
							<div className="text">
								<h2>Maecenas nulla neque</h2>
								<span>
									<p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.</p>
									<p> Ut id bibendum erat. Lorem ipsum dolor sit amet,</p> 
									<p>consectetur adipiscing elit. Maecenas interdum porttitor</p> 
									<p>imperdiet. Integer facilisis.</p>
								</span>
								<div className="button">
								<button><a href="#">Read More</a></button>
								</div>
								
							</div>
						 </div>
				</div>
			</div>
		 )
	}
}