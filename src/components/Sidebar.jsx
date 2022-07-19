import React, {useState} from 'react'
import styled from 'styled-components'
import {MdSpaceDashboard} from 'react-icons/md'
import {RiDashboard2Fill} from 'react-icons/ri'
import {GiTwirlCenter} from 'react-icons/gi'
import {BsFillChatTextFill} from 'react-icons/bs'
import {IoSettings} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/ri'
import {VscChromeClose} from 'react-icons/ri'
import {FaAddressCard, FaTaxi} from 'react-icons/fa'

function Sidebar() {
const [currentLink,setcurrentLink] = useState(1)
  return (
    <>
   <Section>
    <div className="top">
      <div className="brand">
        <FaTaxi/>
        <span>Expendol</span>
      </div>
   
      <div className="toggle">

      </div>
      <div className="links">
      
        <ul>
          <li onClick={()=>setcurrentLink(1)} className={currentLink === 1 ? "active" :""}>
            <a href="#"><MdSpaceDashboard/>
            <span>Dashboard</span></a>
          </li>
          <li onClick={()=>setcurrentLink(2)} className={currentLink === 2 ? "active" :""}>
            <a href="#"><RiDashboard2Fill/>
            <span>Riders</span></a>
          </li>
          <li onClick={()=>setcurrentLink(3)} className={currentLink === 3 ? "active" :""}>
            <a href="#"><FaAddressCard/>
            <span>Payment Details</span></a>
          </li>
          <li onClick={()=>setcurrentLink(4)} className={currentLink === 4 ? "active" :""}>
            <a href="#"><GiTwirlCenter/>
            <span>Learning Center</span></a>
          </li>
          <li onClick={()=>setcurrentLink(5)} className={currentLink === 5 ? "active" :""}>
            <a href="#"><BsFillChatTextFill/>
            <span>FAQs</span></a>
          </li>
        </ul>
      </div>
    </div>
<div className="logout">

            <a href="#"><FiLogOut/>
            <span className='logout'>Log Out</span></a>
          
</div>
   </Section>

   </>
  )
}

const Section = styled.section`
position:fixed;
height:100vh;
background-color:#212121;
width:18vw;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:2rem 0;
gap:2rem;
.top{
  display:flex;
  flex-direction:column;
  gap:2rem;
  width:100%;
  .toggle{
    display:none;
  }
  .brand{
    width:100%;
    display:flex;
    gap:2rem;
    align-items:center;
    justify-ontent:center;
    padding:0 10px;

    svg{
      color:crimson;
      font-size:2rem;
    }
    span{
      font-size:2rem;
      color:crimson;
      font-family: Permanent Marker
    }
  }
  .links{
    display:flex;
    justiyContent:center;
    ul{
      display:flex;
      flex-direction:column;list-style-type:none;
      gap:1rem;
      li{
        padding:0.6rem 1rem;
        border-radius:0.6rem;
        &:hover{
          background-color:crimson;
        }
        a{
          color:white;
          text-decoration:none;
          display:flex;
          gap:20px;
        }
      }
      .active{
        background:crimson;
        a{
          color:black;
        }
      }
    }
  }
 
}
.logout{
  padding:0.3rem 2rem;
  border-radius:0.6rem;
  &:hover{
    background:red;
    a{
      text-decoration:none;
      display:flex;
      align-items:center;
      color:white;
    }
  }
  a{
    text-decoration:none;
    display:flex;
    align-items:center;
    color:white;
    justifyContent:flex-start;
  }
}

`

export default Sidebar