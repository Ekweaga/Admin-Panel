import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from 'react-icons/io'
import {AiFillCalendar} from 'react-icons/ai'
import {MdTimelapse} from 'react-icons/md'
import {IoMdCash} from 'react-icons/io'

function Faqs() {
    const faqs = [
        {
            icon:<AiFillCalendar/>,
            text:"How to manange your spending habits"
        },
        {
            icon:<MdTimelapse/>,
            text:"How to regulate transactions over time"
        },
        {
            icon:<IoMdCash/>,
            text:"Tracking your expenditures"
        }
    ]
  return (
    <Section>
        <div className="title">
            <h2>Information for Users</h2></div>
            <div className="faqs">
                {faqs.map((faq)=>{
                    return (
                        <div className="faq">
                            <div className="info">
                                {faq.icon}
                                <h4>{faq.text}</h4>
                            </div>
                            <IoIosArrowForward/>
                            </div>
                    )
                })}
            </div>
    </Section>
  )
}

const Section = styled.div`
background:#212121;
padding:1rem 2rem 3rem 2rem;
border-radius:10px;
.title{
    h2{
        color:crimson;
        margin-bottom:10px;
        font-family:Permanent Marker;
    }
}
.faqs{
    display:flex;
    flex-direction:column;
    gap:2rem;
    margin-top:1rem;
    .faq{
        display:flex;
        align-items:center;
        justify-content:space-between;
        cursor:pointer;
        .info{
            display:flex;
            gap:1rem;
            align-items:center;
        }

        svg{
           font-size:1.2rem;
        }
    }
}

`

export default Faqs