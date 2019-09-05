import React, {useState} from "react";
import Display from './Display';

export default function Dashboard(){

const [balls, setBalls] = useState(2);
const [strikes, setStrikes] = useState(1);

function manageFouls(){
  if(strikes < 2){
    setStrikes(strikes + 1)
   }
}

function resetCounts(){
  setStrikes(0);
  setBalls(0);
}

function addStrike(){
  if(strikes < 2){
    setStrikes(strikes + 1)
  } else {
    resetCounts();
  }
}

function addBalls(){
  if(balls < 3){
    setBalls(balls + 1)
  } else {
    resetCounts();
  }
}


  return(
    <div>
        <Display balls={balls} strikes={strikes} />
      <h2>dashboard</h2>
      <button onClick={() => addStrike()}>Strike</button>
      <button onClick={() => addBalls()}>Ball</button>
      <button onClick={() => manageFouls()}>Foul</button>
      <button onClick={() => resetCounts()}>Hit</button>
    </div>
  )
} 