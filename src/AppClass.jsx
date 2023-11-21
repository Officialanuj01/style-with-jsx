import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const  array = this.imageData()
    
    return(
      <div>
        
        <h1 id="heading">Kalvium gallary</h1>
        <div className='imgcontainer'>
        {array.map((images) => (
        
          <div key={images.id}>
            <img className="images" src={images.img} alt="" />
          </div>
        ))}
    
          
        
        </div>
      </div>
    )
  }

}

