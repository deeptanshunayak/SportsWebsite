import React from 'react'
import web from './Images/mission.svg'
import web1 from './Images/m1.svg'
export default function Mission() {
    return (
        <>
            <div className='overflow1'>
                <div class="container pt-5">
                    <div className='row pt-5 pb-5'>
                        <h1>Mission</h1>
                        <div className='col-2'>
                            <p className='text-center pt-3'><img src={web1}></img></p>
                            <p className='text-center'>To provide sports talent opportunity to compete in tournaments at all levels.</p>
                            <p className='text-center pt-3'><img src={web1}></img></p>
                            <p className='text-center'>To build teams at various levels leading up to the international stage.</p>
                            <p className='text-center pt-3'><img src={web1}></img></p>
                            <p className='text-center'>To arrange for coaching at district, state and National levels.</p>
                        </div>
                        <div className='col-8'>
                            <img src={web} class="d-block w-100" alt="..." />
                        </div>
                        <div className='col-2'>
                        <p className='text-center pt-3'><img src={web1}></img></p>
                            <p className='text-center'>Revive the sports culture in India at grassroot level</p>
                            <p className='text-center pt-3'><img src={web1}></img></p>
                            <p className='text-center'>dentify talented players all over the nation</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
