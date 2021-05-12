import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
const link="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=13";

const heading = {
  color: "blueviolet",
  fontFamily: "'Josefin Slab', serif",
  textAlign: 'center',
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9cf"
}


ReactDOM.render(
  <>
  <h1 style={heading}>My name is khushi</h1>
  <p>todays date is = {currdate}</p>
  <p>Time is = {currtime}</p>
  <div className="img"> 
  <img  src={img1} alt="randompics"  />
  <img  src={img2} alt="randompics"  />
  <a href={link} target="blank">
  <img  src={img3} alt="randompics"  />
  </a>
  </div>
  
  
  </>,
  document.getElementById("root")
);