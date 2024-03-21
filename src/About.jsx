import React from 'react'
import image from './Images/lm.svg'
import v from './Images/about1.png'
export default function About() {
  return (
    <>
     <div className='overflow1 hero'>
                <div class="container pt-5">
                    <div className='row pt-5 pb-5'>
                    
                        <h1 className=''><img src={v}></img></h1>
                        
                        <div className='col'>
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
