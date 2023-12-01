import React, { useRef, useState } from 'react'
import circle from '../Assets/circle.png';
import cross from '../Assets/cross.png';

import './TicTacToe.css';


let data = ["","","","","","","","",""];

function TicTacToe() {

  
    let [count, setCount] = useState(0);
    let [lock,setLock] = useState(false);

    let winnerRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxArray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const resetGame =()=>{


        setCount(0);
        data = ["","","","","","","","",""];
        setLock(false);
        winnerRef.current.innerHTML = "";

        boxArray.map( (e)=>{
        e.current.innerHTML="";
        } );
    } 

    const toggle = (e, num) => {
        if (lock || count>8) {
           alert("GAME ALREADY WON OR TIED \n RESET THE GAME TO START AGAIN");
            return 0;
       
        }


        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' />`;
            data[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src='${circle}' />`;
            data[num] = "O";
            setCount(count + 1);
        }
        
        checkWin();
        console.log(data);
    };
    

    const checkWin = () => {

        
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {   
        won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
        won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
        won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[5] && data[5]!=="")
        {
        won(data[5])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
        won(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
        won(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
        won(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
        won(data[6])
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
        won(data[2])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
        won(data[6])
        }

        if(count>8)
       alert("game over");

    }

    const won = (winner)=>{
        document.getElementById("winner").innerHTML = "Winner is "+ winner;
       
        setLock(true);
    }

  return (
    <div className='container'>
            <h1 className='title'>TIC_TAC_TOE game in <span>REACT.js </span></h1>

            <h3 id="winner" ref={winnerRef}></h3>

            <div className="board">

                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{ toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{ toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{ toggle(e,2)}}></div>
                </div>



                <div className="row2">
                    <div className="boxes" onClick={(e)=>{ toggle(e,3)}}ref={box4}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,4)}}ref={box5}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,5)}}ref={box6}></div>
                </div>


                
                <div className="row3">
                    <div className="boxes" onClick={(e)=>{ toggle(e,6)}}ref={box7}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,7)}}ref={box8}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,8)}}ref={box9}></div>
                </div>
            </div>

            <button className="reset" onClick={resetGame}>Reset Game</button>

            
    </div>
  )
}

export default TicTacToe
