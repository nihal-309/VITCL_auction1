import React, { useState } from "react";

function Card(props){
    let[player, setPlayer]=useState("");
    let[amount, setAmount]=useState("");
    let[entries, setEntries]=useState([]);
    let xx=parseInt(props.purse);
    let [purse1, setPurse1]=useState(xx);
    let [count, setCount]=useState(1);


    function handleChange1(event){
        const {value}=event.target;
        setPlayer(player=value);
    } 

    function handleChange2(event){
        const {value}=event.target;
        setAmount(amount=value);
    }

    function handleClick(){
        setCount(prevState => prevState +1);
        let x=player;let y=amount;let yy=parseInt(y,10);
        if((x&&y)!=="" && !isNaN(yy) && Number.isInteger(yy) && y.trim()!== '' && y===yy.toString()){
            (setEntries(prevState => {return [...prevState, [x, y]];}));
            setPurse1(prevState => (prevState - yy));
            console.log(props.name, x, y, count);
         }
        setPlayer("");
        setAmount("");
    }


    return(
        <div className="Card">
            <div className="head">{props.name}</div>
            <div className="head1">Remaining Purse: {purse1}</div>
            <div className="desc1">
                Player: <input value={player} onChange={handleChange1} type="text" placeholder="Player Name"></input>
            </div>
            <div className="desc1">
                Amount: <input value={amount} onChange={handleChange2} type="text" placeholder="Amount"></input>
            </div>
            <div className="but1">
                <button onClick={handleClick}>Submit</button>
            </div>
            <ol>
                {entries.map((toDoEntry, count) => (<li key={count}>{toDoEntry[0]} {toDoEntry[1]}</li>))}
            </ol>
        </div>
    )
}

export default Card;
