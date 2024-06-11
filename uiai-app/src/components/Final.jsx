import "./Final.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const Final=()=>{
  
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return <div className="final">

<div className="hor" >
<div className="hor1" data-aos="fade-left">
    <div>Analyze</div>
    <div>3d Model</div>
    <div>AI Chat Box</div>
    <div>Costomizable</div>
    <div>Marketing</div>
    <div>Design</div>
    <div>Outfits</div>
    <div>Artificial Intelligence</div>
    <div>People</div>
</div>
<div className="hor2"  data-aos="fade-right">

<div>Marketing</div>
    <div>Design</div>
    <div>Outfits</div>
    <div>People</div>
    <div>3d Model</div>
    <div>AI Chat Box</div>
    <div>Analyze</div>
    <div>Artificial Intelligence</div>
    <div>Costomizable</div>
  
</div>


</div>

<div className="next" >
<div className="outfit">
<h3>AI Outfits</h3>
</div>
<div className="ava">
    <h3>Realistic AI Avatar</h3>
</div>
</div>
<div className="next2" >
<div className="script">
<h3>Generate or Write<br/> your Script</h3>
</div>
<div className="voice">
    <h3>AI Powered Voice<br/> Generator</h3>
</div>
</div>


    </div>
}