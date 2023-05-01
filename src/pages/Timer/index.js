import { useState } from "react";

import { Stats } from "../../components/timer/Stats";
import { Timer as Clock } from '../../components/timer/Timer'

export const Timer = () => {
    const [isTimer,setTimer] = useState(true);
    const backgroundColor = isTimer ? '#D2DEFC' : '#fff';
    const backgroundColor2 = !isTimer ? '#D2DEFC' : '#fff';
    const handleButtonClick = () => {
        setTimer(prev=>!prev)
    }
    return (
        <div style={{backgroundColor:'white',width:'94%',height:'90%'}} className="m-10 flex flex-col items-center w-full rounded-3xl gap-36">
            <div className="flex">
                <div style={{border:'2px solid #2F56B8'}} className="flex rounded-xl mt-20 h-12 w-96">
                    <button onClick={handleButtonClick} style={{borderColor:'#2F56B8', backgroundColor:backgroundColor}} className={`rounded-xl w-full ${isTimer ? 'border-r-2' : null}`}>Timer</button>
                    <button onClick={handleButtonClick} style={{borderColor:'#2F56B8',backgroundColor:backgroundColor2}} className={`rounded-xl w-full ${!isTimer ? 'border-l-2' : null}`}>Stats</button>
                </div>
            </div>
            <div>
                {isTimer && <Clock />}
                {!isTimer && <Stats />}
            </div>
        </div>
    )
}