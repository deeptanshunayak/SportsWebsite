import React,{ useState } from 'react'
import web from './Images/svg1.svg'
import web1 from './Images/svg2.png'
import v from './Images/scouting.png'
export default function Scouting() {
    const [show, setshow]=useState(true);
    const [show1,setshow1]=useState(false);
  return (
    <>
      <div className='overflow1 hero'>
        <div class="container pt-5">
          <div className='row pt-5 pb-5'>
            <h1><img src={v}></img></h1>
            <div className='d-flex justify-content-center pb-5'>
              <div>
           <button className='button2' onClick={()=>{setshow(true);setshow1(false)}}>&#x2190;</button>
           </div>
           <div className='ps-5'>
           <button className='button2' onClick={()=>{setshow(false);setshow1(true)}}>&#x2192;</button>
           </div>
           </div>
           {show &&
           <img src={web} className='d-block w-100'></img>}
           {show1 &&
           <img src={web} className='d-block w-100'></img>}
            {/* <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-item active">
                  <img src={web} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={web1} class="d-block w-100" alt="..." />
                </div>

              </div>

            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
