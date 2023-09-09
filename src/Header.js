import { Component } from "react";

export class Header extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return(
      <div className="container"> 
        <h1>Smart list</h1>
      </div>
    )
  }
}
