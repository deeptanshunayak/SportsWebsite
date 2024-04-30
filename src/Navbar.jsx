import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import web1 from './Images/Brand logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [color,setcolor]=useState(false);
  const changecolor=()=>{
    if(window.scrollY>=10){
      setcolor(true)
    }
    else{
      setcolor(false)
    }
  }
  window.addEventListener('scroll',changecolor)
  return (
    <>
   
      <nav class={color?' navbar navbar-expand-lg d-none':' navbar navbar-expand-lg navb fixed-top'} >
        <div class="container-fluid">
          <img src={web1} className='imager'></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item padder">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="/page">About Us</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="#sports">Contact</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="#sports">Sports</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="/page2">Registration</a>
              </li>
              <li class="nav-item dropdown padder">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            T & C
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/tc1">Terms & Condition (General)</a></li>
            <li><a class="dropdown-item" href="/tc">Terms & Condition (Atheletics)</a></li>
            
            
          </ul>
        </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
