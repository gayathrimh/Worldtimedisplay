import {useState} from 'react';

export default function Page2({city}){

    const [time,setTime]=useState(new Date());

    const formattedTime=

    return(
        <p>{city.name}:{time.toLocaleTimeString}</p>
    );
}