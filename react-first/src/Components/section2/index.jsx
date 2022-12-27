import React, { Component } from "react";
import "./style.css";
import Nkar1 from '../../assets/images/gallery/01.jpg';
import Nkar2 from '../../assets/images/gallery/02.jpg';
import Nkar3 from '../../assets/images/gallery/03.jpg';
import Nkar4 from '../../assets/images/gallery/04.jpg';
import Nkar5 from '../../assets/images/gallery/05.jpg';
import Nkar6 from '../../assets/images/gallery/06.jpg';
import Nkar7 from '../../assets/images/gallery/07.jpg';
import Nkar8 from '../../assets/images/gallery/08.jpg';
import Nkar9 from '../../assets/images/gallery/09.jpg';
import Nkar10 from '../../assets/images/gallery/10.jpg';
import Nkar11 from '../../assets/images/gallery/11.jpg';
import Nkar12 from '../../assets/images/gallery/12.jpg';
import Nkar13 from '../../assets/images/gallery/13.jpg';
import Nkar14 from '../../assets/images/gallery/14.jpg';
import Nkar15 from '../../assets/images/gallery/15.jpg';
import Nkar16 from '../../assets/images/gallery/16.jpg';
import Nkar17 from '../../assets/images/gallery/17.jpg';
import Nkar18 from '../../assets/images/gallery/18.jpg';
import Nkar19 from '../../assets/images/gallery/19.jpg';
import Nkar20 from '../../assets/images/gallery/20.jpg';
import { Box } from "../props";

export class Section2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [
				{
					img: Nkar1,
					title: "Fu1sce dictum finibus",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$45 / $55",
					type: "pizza",

				},
				{
					img: Nkar2,
					title: "Aliquam sagittis",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$65 / $70",
					type: "pizza",
				},
				{
					img: Nkar3,
					title: "Sed varius turpis",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$30.5",
					type: "pizza",
				},
				{
					img: Nkar4,
					title: "Aliquam sagittis",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$25.5",
					type: "pizza",
				},
				{
					img: Nkar5,
					title: "Maecenas eget justo",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$80.25",
					type: "pizza",
				},
				{
					img: Nkar6,
					title: "Quisque et felis eros",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$20 / $40 / $60",
					type: "pizza",
				},
				{
					img: Nkar7,
					title: "Sed ultricies dui",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$94",
					type: "pizza",
				},
				{
					img: Nkar8,
					title: "Donec porta consequat",
					description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
					price: "$15",
					type: "pizza",
				},
				{
					img: Nkar9,
					title: "Salad Menu One",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$25",
					type: "salad",

				},
				{
					img: Nkar10,
					title: "Second Title Salad",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$30",
					type: "salad",
				},
				{
					img: Nkar11,
					title: "Third Salad Item",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$45",
					type: "salad",
				},
				{
					img: Nkar12,
					title: "Superior Salad",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$50",
					type: "salad",
				},
				{
					img: Nkar13,
					title: "Sed ultricies dui",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$55 / $60",
					type: "salad",
				},
				{
					img: Nkar14,
					title: "Maecenas eget justo",
					description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
					price: "$75",
					type: "salad",
				},
				{
					img: Nkar15,
					title: "Noodle One",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$12.5",
               type: "noodle",
				},
				{
					img: Nkar16,
					title: "Noodle Second",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$15.5",
					type: "noodle",
				},
				{
					img: Nkar17,
					title: "Third Soft Noodle",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$20.5",
					type: "noodle",
				},
				{
					img: Nkar18,
					title: "Aliquam sagittis",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$30.25",
					type: "noodle",
				},
				{
					img: Nkar19,
					title: "Maecenas eget justo",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$35.5",
					type: "noodle",
				},
				{
					img: Nkar20,
					title: "Quisque et felis eros",
					description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					price: "$40.5",
					type: "noodle",
				},
			],
			active: false,
			newList : []    
		}
	}
	Filtered = (a)=>{
		this.setState({newList: this.state.products.filter(x => x.type === a)})
		this.setState({active: a})
  }

  componentDidMount(){
		this.Filtered('pizza')
  }
	render() {
		return (
			<div className="section2Text">
				<div className="container">
					<div className="menu">
						<ul>
							<li><button className={this.state.active === 'pizza'? "active" : null} name="Pizza" onClick={()=>this.Filtered("pizza")}>Pizza</button> </li>
							<li><button className={this.state.active === 'salad'? "active" : null} name="Salad" onClick={()=>this.Filtered("salad")}>Salad</button> </li>
							<li><button className={this.state.active === 'noodle'? "active" : null} name="Noodle" onClick={()=>this.Filtered("noodle")}>Noodle</button> </li>
						</ul>
					</div>
					<Box title={this.state.newList} />  
					{/* pizza->value */}
				</div>
			</div>
		)
	}
}
