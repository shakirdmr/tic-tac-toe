import React, { useState } from 'react'
import circle from '../Assets/circle.png';
import cross from '../Assets/cross.png';

import './TicTacToe.css';


let data = ["","","","","","","","",""];

function TicTacToe() {

  
    let [count, setCount] = useState(0);
    let [lock,setLock] = useState(false);
    console.log(data);
    
    const resetGame =()=>{
        setCount(0);
        data = ["","","","","","","","",""];
        setLock(false);
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
        won(data);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
        won(data);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
        won(data);
        }
        else if(data[0]===data[3] && data[3]===data[5] && data[5]!=="")
        {
        won(data)
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
        won(data)
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
        won(data)
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
        won(data)
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
        won(data)
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
        won(data)
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
        won(data)
        }
    }

    const won = (winner)=>{
        setLock(true);
    }

  return (
    <div className='container'>
            <h1 className='title'>TIC_TAC_TOE game in <span>REACT.js </span></h1>

            <div className="board">

                <div className="row1">
                    <div className="boxes" onClick={(e)=>{ toggle(e,0)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,1)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,2)}}></div>
                </div>



                <div className="row2">
                    <div className="boxes" onClick={(e)=>{ toggle(e,3)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,4)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,5)}}></div>
                </div>


                
                <div className="row3">
                    <div className="boxes" onClick={(e)=>{ toggle(e,6)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,7)}}></div>
                    <div className="boxes" onClick={(e)=>{ toggle(e,8)}}></div>
                </div>
            </div>

            <button className="reset" onClick={resetGame}>Reset Game</button>

            
    </div>
  )
}

export default TicTacToe