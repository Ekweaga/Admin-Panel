import React from 'react'
import styled from 'styled-components'
import {BsFillCalendar2WeekFill} from 'react-icons/bs'
import {IoStatsChart} from 'react-icons/io5'
import {BiGroup} from 'react-icons/bi'
import {FiActivity} from 'react-icons/fi'

function Analytics() {
  return (
   <Section>
   <div className="analytic">
    <div className="content">
        <h5>Spent this month</h5><h2>674.55</h2>

    </div>
    <div className="logo">
        <BsFillCalendar2WeekFill/>
    </div>
   </div>
   <div className="analytic">
    <div className="content">
        <h5>Earnings</h5><h2>674.55</h2>

    </div>
    <div className="logo">
        <IoStatsChart/>
    </div>
   </div>
   <div className="analytic">
    <div className="content">
        <h5>Spent this month</h5><h2>674.55</h2>

    </div>
    <div className="logo">
        <BiGroup/>
    </div>
   </div>
   <div className="analytic">
    <div className="content">
        <h5>Spent this month</h5><h2>674.55</h2>

    </div>
    <div className="logo">
        <FiActivity/>
    </div>
   </div>
   </Section>

  )
}

const Section = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:1rem;
.analytic{
    background:#212121;
    padding:1rem 2rem 3rem 2rem;
    border-radius:10px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    gap:1rem;
    transition:0.5s ease-in-out;
    &:hover{
        background:crimson;
        color:black;
        svg{
            color:white;
        }
    }
    .logo{
        background:black;
        border-radius:15px;
        padding:1.5rem;
        display:flex;
        align-items:center;
        justify-content:center;
        svg{
            font-size:1.5rem;
        }
    }
}


`
export default Analytics