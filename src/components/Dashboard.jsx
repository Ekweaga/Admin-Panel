import React from 'react'
import styled from 'styled-components'
import Analytics from './Analytics'
import Earnings from './Earnings'
import Faqs from './Faqs'
import Navbar from './Navbar'
import Profile from './Profile'
import Transfers from './TRansfers'

function Dashboard() {
  return (
    <Section>
        <Navbar/>
        <div className="grid">
            <div className="row_one">
                <Analytics/>
                <Faqs/>
            </div>
            <div className="row_two">
               <Earnings/>
               <Transfers/>
               <Profile/>
            </div>
        </div>
    </Section>
  )
}
const Section = styled.section`
color:white;
margin-left:18vw;
padding:2rem;
height:100%;
.grid{
    display:flex;
    flex-direction:column;
    height:100%;
    gap:1rem;
    margin-top:2rem;
    .row_one{
        display:flex;
      justify-content:space-between;
      height:50%;
      gap:1rem;
    }
    .row_two{
        display:flex;
      justify-content:space-between;
      height:50%;
      gap:1rem;
    }

}
`
export default Dashboard