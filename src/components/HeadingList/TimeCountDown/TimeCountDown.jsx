import { useState,useEffect } from "react";
import styles from './styles.module.scss'

function TimeCountDown({target ="2026-01-01T00:00:00"}) {
    const {boxTime,objTime, valueTime,labelTime} = styles
    const targetTime = new Date(target).getTime();
   

    const calculate = () => {
         const now = Date.now()
       
        const total = Math.max(0, targetTime - now);
        
        const totalSecond = Math.floor(total / 1000);
        const Day = Math.floor( totalSecond / ( 24 * 3600));
        const Hour = Math.floor((totalSecond % (24 * 3600)) / 3600)
        const Minute = Math.floor((totalSecond % 3600) / 60);
        const Second = Math.floor((totalSecond % 60))
        return {
            Day,Hour,Minute,Second
        };
    }

    const [time, Settime] =  useState(calculate());
   useEffect(() => {
    const id = setInterval(() => {
        Settime(calculate());
    }, 1000)

    return () => {
        clearInterval(id);
    }
    
   },[])
    return (
    <>
    <div className={boxTime}>
        {
        [{value: time.Day, label: 'Days'},
         {value: time.Hour, label: 'Hours'},
         {value: time.Minute, label: 'Mins'},
         {value: time.Second, label: 'Secs'},
        ].map((item,index) => {
            return (
                <div className={objTime} key ={index}>
                    <div className={valueTime}>{item.value}</div>
                    <span className={labelTime}>{item.label}</span>
                </div>
            )
        })
        }
    </div>
    
    </> 
    );
}

export default TimeCountDown;