import React,{useState} from "react"
import '../Time/time.css'


const Time = () =>{
setInterval(updateTime, 1000);
const now = new Date().toLocaleTimeString();
const [time,setTime]=useState(now);

const date = new Date().toLocaleDateString();

const options= {weekday: 'long'};
const daysOfWeek = new Date().toLocaleString('en-US', options)

function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}



    return(
        <div className="container">
            <p className="title">Created by @jurgenhideni</p>
            <div className="clock">
            <h1>{time}</h1>
            <h2>{date}</h2>
            <h2>{daysOfWeek}</h2>
            </div>
            
        </div>
    )
}

export default Time




