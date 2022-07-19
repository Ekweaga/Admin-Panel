import React from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'

function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h3>Hi Charles</h3>
        <h1>Welcome to <span>EXPENDOL DASHBOARD</span></h1>

      </div>
      <div className="search">
        <BiSearch/>
        <input type="text" placeholder="search"></input>
      </div>
      </Nav>
  )
}

const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.title{
  h1{
    span{
      color:crimson;
      margin-left:20px;
      font-family:Permanent Marker;
    }
  }
}
.search{
  background:#212121;
  display:flex;
  align-itmes:center;
  justify-content:center;
  gpa:1rem;
  padding:1rem 8rem 1rem 1rem;
  border-radius:1rem;
  svg{
    color:crimson;
  }
  input{
      background:transparent;
      border:none;
      color:crimson;
      padding-left:10px;
      font-family:Permanent Marker;

      &:focus{
        outline:none;
        border:none;
      }
      &::placeholder{
        color:crimson;
        font-size:15px;
      }
  }
}
`

export default Navbar