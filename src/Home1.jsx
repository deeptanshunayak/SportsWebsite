import React from 'react'
import image from './Images/b1.svg'
import image1 from './Images/b2.svg'
import image2 from './Images/b3.svg'
import image3 from './Images/b4.svg'
import medal from './Images/Medal.svg'
import v from './Images/young.png'
const Home1 = () => {
    return (
        <>
            <div className='overflow1 hero'>
                <div class="container pt-5">
                    <div className='row'>
                        
                        <div className='col'>
                            <h4 className='setcolor'>Know About Our Organisations</h4>
                            <h1><img src={v}></img></h1>
                            <p>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth, community development, social integration, gender equality, healthy lifestyle, national pride and economic opportunities related to sports development.</p>

                            <p className='pt-5'>We Focus on:</p>
                            <div className='row'>
                                <div className='col'>
                                    <img src={image}></img>
                                    <p className='text-center'>Health</p>
                                </div>
                                <div className='col'>
                                    <img src={image1}></img>
                                    <p className='text-center'>Education</p>
                                </div>
                                <div className='col'>
                                    <img src={image2}></img>
                                    <p className='text-center'>Livlihood</p>
                                </div>
                                <div className='col'>
                                    <img src={image3}></img>
                                    <p className='text-center'>Empowerment</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='col pt-3'>
                            <img src={medal} className='animated'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1

