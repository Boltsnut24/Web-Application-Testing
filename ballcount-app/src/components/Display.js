import React from "react";

export default function Display(props){
  console.log("props in display", props)
  return(
    <div>
      <h2>display</h2>
      <div>Balls: {props.balls}</div>
      <div>Strikes: {props.strikes}</div>
    </div>
  )
}