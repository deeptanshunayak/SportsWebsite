import React from 'react'
import web1 from './Images/Brand logo.svg'
export default function Navbar1() {
    return (
        <>
        <nav class=' navbar navbar-expand-lg bg-black ' >
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
                <a class="nav-link" href="/page">About</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item padder">
                <a class="nav-link" href="#">Sports</a>
              </li>
              <li class="nav-item dropdown padder">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            T & C
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Terms & Condition (general)</a></li>
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
