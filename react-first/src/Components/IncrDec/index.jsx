import React, { Component } from "react";
import "./style.css"

export class Counter extends Component{
	constructor(props) {
		super(props)
		this.state={ 
			x:0,
			value:1,
			
		}
	}
	ChangePlus = ()=>{
		this.setState({x:  this.state.x+(+this.state.value)})
	}
	ChangeMinus = ()=>{
		if(this.state.x-this.state.value>=0){
			this.setState({x:  this.state.x-this.state.value})
		}	
	}
	ChangeValue = (evt)=>{
		this.setState({value:  evt.target.value})
	}
	
	render() {
		return <div>
			<button onClick={this.ChangePlus}>+</button>
			<p>{this.state.x}</p>
			<button onClick={this.ChangeMinus}>-</button>
			<br />
			<br />
			<input type="number" value = {this.state.value}  onChange={this.ChangeValue}/>
		</div>
	}
}



