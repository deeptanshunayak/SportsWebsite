import React from 'react'
import image from './Images/group.svg'
import v from './Images/about1.png'
export default function About() {
  return (
    <>
     <div className='overflow1 hero'>
                <div class="container pt-5 mt-5">
                    <div className='row pt-5 pb-5'>
                    
                        <h1 className=''><img src={v}></img></h1>
                        
                        <div className='col-5'>
                        <p className='textboom'>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth, community development, social integration, gender equality, healthy lifestyle, national pride and economic opportunities related to sports development.
</p>
                        </div>
                        
                        <div className='col-7'>
                            <img src={image} className='img-fluid'></img>
                        </div>
                        </div>         

                </div>
     </div>
                
    </>
  )
}
