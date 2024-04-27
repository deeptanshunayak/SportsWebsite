import React from 'react'
import image from './Images/b1.svg'
import image1 from './Images/b2.svg'
import image2 from './Images/b3.svg'
import image3 from './Images/b4.svg'
import medal from './Images/Medal.svg'
import v from './Images/Vector.svg'
const Home1 = () => {
    return (
        <>
            <div className='overflow1 hero'>
                <div class="container pt-5 mt-5">
                    <div className='row'>
                    <h4 className='setcolor'>Know About Our Organisations</h4>
                            <h1><img src={v} className=''></img></h1>
                            <h1 className='clear position-absolute'>Let's Retain & Grow <br></br> Young talent</h1>
                        <div className='col-12 col-sm-6 medal'>
                            
                            <p className='textboom'>The A4SBA  aims to encourage sports all over the country, thus allowing the population to harness the power of sports through its cross-cutting influence, namely,holistic development of children & youth, community development, social integration, gender equality, healthy lifestyle, national pride and economic opportunities related to sports development.</p>

                            <p className='pt-5'><b>We Focus on:</b></p>
                            <div className='displayer'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={image} className=''></img>
                                    <p className='text-left'>Health<p>
                                    Sare Khelo Bharat prioritizes holistic well-being, offering expert advice, personalized fitness plans, and mental wellness guidance. We empower students to thrive physically and mentally, ensuring they're ready to conquer any challenge.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image1} className=''></img>
                                    <p className='text-left'>Education<p>
                                    At Sare Khelo Bharat, we believe in unlocking potential through education. Our platform provides tailored academic support, career counseling, and skill-building resources, fostering a culture of learning excellence among students from diverse backgrounds.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image2} className=''></img>
                                    <p className='text-left ps-2'>Livlihood<p>
                                    Sare Khelo Bharat is dedicated to empowering futures. We offer practical insights, vocational training, and career development opportunities, equipping students with the skills needed to pursue rewarding livelihoods and contribute meaningfully to society.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image3} className=''></img>
                                    <p className='text-left'>Empowerment<p>Fostering self-reliance and confidence, Sare Khelo Bharat empowers students with leadership training, mentorship programs, and access to resources. We enable them to realize their full potential and become catalysts for positive change in their communities.</p></p>
                                </div>
                                
                            </div>
                            </div>
                            <div className='col dd1'>
                                <div className='col'>
                                    <p>
                                    <img src={image} className=''></img></p>
                                    <p className='text-left'>Health<p>
                                    Sare Khelo Bharat prioritizes holistic well-being, offering expert advice, personalized fitness plans, and mental wellness guidance. We empower students to thrive physically and mentally, ensuring they're ready to conquer any challenge.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image1} className=''></img>
                                    <p className='text-left'>Education<p>
                                    At Sare Khelo Bharat, we believe in unlocking potential through education. Our platform provides tailored academic support, career counseling, and skill-building resources, fostering a culture of learning excellence among students from diverse backgrounds.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image2} className=''></img>
                                    <p className='text-left'>Livlihood<p>
                                    Sare Khelo Bharat is dedicated to empowering futures. We offer practical insights, vocational training, and career development opportunities, equipping students with the skills needed to pursue rewarding livelihoods and contribute meaningfully to society.</p></p>
                                </div>
                                <div className='col'>
                                    <img src={image3} className=''></img>
                                    <p className='text-left'>Empowerment<p>Fostering self-reliance and confidence, Sare Khelo Bharat empowers students with leadership training, mentorship programs, and access to resources. We enable them to realize their full potential and become catalysts for positive change in their communities.</p></p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 pt-3 dd animater'>
                            <img src={medal} className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1

