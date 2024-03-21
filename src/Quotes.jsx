import React from 'react'
import web from './Images/flagf.svg'
export default function Quotes() {
    return (
        <>
            <div className='overflow1'>
                <div className='pb-5 pt-5 mt-5'>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={web} class="d-block w-100" alt="..." />

                                <div class="carousel-caption  d-md-block">
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"सफलता तब होती है जब तैयारी और मौका मिलते हैं।" - बॉबी अंसर</p>
                                            </div>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"Success is where preparation and opportunity meet." - Bobby Unser</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={web} class="d-block w-100" alt="..." />
                                <div class="carousel-caption  d-md-block">
                                <div className='container'>
                                        <div className='row'>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"स्वर्ण पदकों का वास्तव में सोना नहीं होता है। वे पसीने, दृढ़ता और साहस के एक संगीन बनाए जाते हैं।" - डैन गेबल</p>
                                            </div>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"Gold medals aren’t really made of gold. They’re made of sweat, determination, and a hard-to-find alloy called guts." - Dan Gable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={web} class="d-block w-100" alt="..." />
                                <div class="carousel-caption  d-md-block">
                                <div className='container'>
                                        <div className='row'>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"आप दर्शन के लिए नहीं खेलते, आप देश के लिए खेलते हैं।" - महेंद्र सिंह धोनी</p>
                                            </div>
                                            <div className='col'>
                                                <p className='text-left text-black align'>"You don’t play for the crowd, you play for the country." - Mahendra Singh Dhoni</p>
                                            </div>
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
