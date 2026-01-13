import {useState,useEffect} from 'react';

export default function Page2({city}){

    const [time,setTime]=useState(new Date());

    function updateTime(){
        setTime(new Date());
    }

    useEffect(function setupInterval(){
        const timer=setInterval(updateTime,1000);
    

    return function cleanup(){
        clearInterval(timer);
    };
},[]);

    const formattedTime=time.toLocaleTimeString('en-US',{
        timezone:city.timezone
    });

    return(
        <div>
            <p>{city.name}:{formattedTime}  </p>
        </div>
    );
}