//import { useState } from 'react';
import './Events.css'

function Events({date, time, content, subContent}){
    var b = false
    if (subContent === "Holiday"){
        b = true
    }
    //const [holiday, isholiday] = useState(b);
    return(
        <div id="container">
            <div className='container1'>
                <div className='block-1-1'>
                    <div id="ellipse"></div>
                    <div id='date'>{date}</div>
                </div>
                {b ? <div className='block-1-2'>
                    <div className='img-rec'>
                        <div id="img">
                            {Image}
                        </div>
                    </div>
                </div> 
                : 
                <div className='block-1-2'>
                    <div id="ellipse"></div>
                    <div id='time'>{time}</div>
                </div>}
                <div id="text1">{content}</div>
                <div id="text2">{subContent}</div>                    
            </div>
        </div>
    );
}

export default Events;