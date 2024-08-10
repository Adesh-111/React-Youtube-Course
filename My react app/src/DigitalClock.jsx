import React, {useState, useEffect} from "react";

function DigitalClock() {

    const[time, setTime] = useState(new Date());

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
        });

        return () =>{
            clearInterval(intervalId);
        }

    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minute = time.getMinutes();
        const seconds = time.getSeconds();

        const meridiem = hours >=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minute)}:${addZero(seconds)} ${addZero(meridiem)}`
    }

    function addZero(num){
        return (num < 10 ? "0" : "") + num
    }


    return (  <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
        
    </div>    );
}

export default DigitalClock;