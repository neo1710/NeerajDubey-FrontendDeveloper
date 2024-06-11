import "./Feat.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";



export const Ai=()=>{
    const [p,setP]=useState(1)
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])


       setTimeout(()=>{
        if(p===4){
            setP(1);
        }else{
         setP(p+1);
        }
       },1000);

    return <div className="Ai">
        <div className="container">
            <div className="Aim" data-aos="fade-right" >

            </div>
            <div className="options">
                <h1>How it works</h1>
                <h2 style={{color:p===1?"skyblue":"grey"}}>Select an Avatar</h2>
                <h2 style={{color:p===2?"skyblue":"grey"}}>Create or Generate Script</h2>
                <h2 style={{color:p===3?"skyblue":"grey"}}>Select AI Voice</h2>
                <h2 style={{color:p===4?"skyblue":"grey"}}>Publish</h2>
            </div>
        </div>
    </div>
}