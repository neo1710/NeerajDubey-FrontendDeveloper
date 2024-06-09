import styled from "styled-components";


 export const NavBar=()=>{



return <DIV>
<div className="nav1" >
<h2 className='logo'>A I . G E N</h2>
<div>Features</div>
<div>Roadmap</div>
<div>Tokenomics</div>
</div>

<div className="nav2">
  <div className="navBut"><button>Whitedpaper</button></div>

<div className="navBut"><button >Get Started</button></div>
</div>

</DIV>

}


const DIV=styled.div`
display:flex;
*font-family: "Outfit", sans-serif;
width:100%;
justify-content:space-between;

align-items:center;
.nav1{
display:flex;
width:30%;
justify-content:space-around;
align-items:baseline;

}

.nav2{
display:flex;
width:18%;
justify-content:space-around;
align-items:center;
}

.navBut{
width:45%;
height:40px;
Padding:13px, 24px, 11px, 24px;
display:flex;
align-items:center;
justify-content:space-around;
filter:blur;
background-color:grey;
}

.navBut>button{
color: #FFFFFF;
width:80%;
background:transparent;
filter:blur;
border:black;
}

.logo {
 font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  height: 25px; 
 
  color: #FFFFFF;


}

.nav1>div{
color: #FFFFFF;
height:24px;
}



`