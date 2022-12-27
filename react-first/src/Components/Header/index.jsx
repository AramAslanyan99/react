import React from "react";
import { Component } from "react";
import "./style.css";

class Header extends Component {
	constructor(props) {
		super(props)
		this.state={ 
			a:{
				age:17,
				weight: '143kg'
			},
			flag:true,
			x:0,
			value:1,
			
		}
	}
	Change = ()=>{
		this.setState({flag:  !this.state.flag})
	}
	ChangePlus = ()=>{
		this.setState({x:  this.state.x+(+this.state.value)})
	}
	ChangeMinus = ()=>{
		if(this.state.x>0){
			this.setState({x:  this.state.x-this.state.value})
		}else {
			this.state.x = 0
		}		
	}
	ChangeValue = (evt)=>{
		this.setState({value:  evt.target.value})
	}
	
	render() {
		console.log(this.state.flag)
		return <div>
			{/* <p>Hello World</p>
			<h2>{this.state.age}</h2> 
			<h2>{this.state.weight}</h2> */}
			<button onClick={this.ChangePlus}>+</button>
			<p>{this.state.x}</p>
			<button onClick={this.ChangeMinus}>-</button>
			<br />
			<br />
			<input type="number" value = {1}  onChange={this.ChangeValue}/>
		</div>
	}
}

export default Header