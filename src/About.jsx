import React from 'react'
import image from './Images/About (2).svg'
export default function About() {
  return (
    <>
     <div className='overflow1'>
                <div class="container pt-5">
                    <div className='row'>
                        <div className='col'><h5 className='setcolor'>Know About us</h5>
                        <h1>About Us</h1>
                        <p>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth, community development, social integration, gender equality, healthy lifestyle, national pride and economic opportunities related to sports development.
</p>
                        </div>
                        
                        <div className='col'>
                            <img src={image}></img>
                        </div>
                        </div>         

                </div>
     </div>
                
    </>
  )
}
