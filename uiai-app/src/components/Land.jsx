import "./Land.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const Land=()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

return <div className="land">
    <div className="desc">
        <div className="frame"><div><p>🎉 New in AI.GEN: Real Time Interaction</p></div></div>
        <div className="Heading">
        <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
        <p>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
        </div>
       <div className="gs">
        <button>Get Started</button></div>
</div>
<div className="images">


    <div className="pImages" data-aos="fade-up">
   <div></div>
   <div></div>
   <div></div>
    </div>
    <div className="cImages" data-aos="fade-down">
    <div></div>
   <div></div>
   <div></div>
    </div>
    <div className="dImages" data-aos="fade-up">
    <div></div>
   <div></div>
   <div></div>
    </div>
</div>

</div>

}

// Image: image;

