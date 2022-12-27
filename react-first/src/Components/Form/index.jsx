import React, { Component } from "react";
import "./style.css"

export class Form extends Component{
    state = {
            name: "",
            password: "",
            confirmPassword: "",
            email:"",
            tel:"",



        errors : {
            ErrorName: "",
            ErrorPassword: "",
            ErrorConfirmPassword: "",
            ErrorEmail:"",
            ErrorTel:"",
        }
    }
  
    Change = (e)=>{
        this.setState({...this.state, name : e.target.value})
    }


    Validation = ()=>{
        let valid = true
        const error = {
            ErrorName: "",
            ErrorPassword: "",
            ErrorConfirmPassword: "",
            ErrorEmail:"",
            ErrorTel:"",
        }

        if(!this.name){
            error.errorName = "Required name"
            valid = false
        }

        this.setState({errors : error})

        return valid

    }

    render(){

        // console.log(this.state.main.name)

        return <div>
            <input className={this.state.errors.errorName? "error" : null} onChange={this.Change} type="text" placeholder="Name" />
            {this.state.errors.errorName? <p>Errror</p> : null}
            <br />
            <br />
            

            <input className={this.state.errors.errorPassword? "error" : null} onChange={this.Change} type="password" placeholder="Password" />
            {this.state.errors.errorPassword? <p>Errror</p> : null}
            <br />
            <br />
            

            <input className={this.state.errors.errorConfirmPassword? "error" : null} onChange={this.Change} type="password" placeholder="Confirm password" />
            {this.state.errors.errorConfirmPassword? <p>Errror</p> : null}
            <br />
            <br />
            
            
            <input className={this.state.errors.errorEmail? "error" : null} onChange={this.Change} type="email" placeholder="Email" />
            {this.state.errors.errorEmail? <p>Errror</p> : null}
            <br />
            <br />
            
            
            <input className={this.state.errors.errorNTel? "error" : null} onChange={this.Change} type="tel" placeholder="number" />
            {this.state.errors.errorTel? <p>Errror</p> : null}
            <br />
            <br />
            
            
            <button onClick={this.Validation}>Click me</button>
        </div>
    }
}