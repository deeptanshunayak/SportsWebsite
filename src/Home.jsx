import React, { useState } from 'react'
import Navbar from './Navbar'
import web from '../src/Images/Image4.png'
import web1 from '../src/Images/image.png'
import web2 from '../src/Images/Image5.png'
import web3 from '../src/Images/Imageadd.svg'

const Home = () => {

  return (
    <>
      <div className='overflow1'>
        <div className='row'>
         <Navbar></Navbar>
          <div className='col-12 mx-auto'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
             
              <div class="carousel-inner">
                
                <div class="carousel-item active c-item ">
                 
                  <img src={web} class="d-block w-100 sizing image-align" alt="..." />
                 
                  <div class="carousel-caption top-0 d-md-block">
                  <div className='col-6'>
                    <h1 className='hfixer'>Let's Retain & Grow Young talent</h1>
                    <p className='pfixer'>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth.</p>
                    </div>
                    
                  </div>
                </div>
                <div class="carousel-item c-item">
                
                  <img src={web1} class="d-block w-100 sizing image-align" alt="..." />
                  <div class="carousel-caption top-0 d-md-block">
                    <div className='col-6'>
                    <h1 className='hfixer'>Let's Retain & Grow Young talent</h1>
                    <p className='pfixer'>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item c-item">
                
                  <img src={web2} class="d-block w-100 sizing image-align" alt="..." />
                  <div class="carousel-caption top-0 d-md-block">
                  <div className='col-6'>
                    <h1 className='hfixer'>Let's Retain & Grow Young talent</h1>
                    <p className='pfixer'>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
