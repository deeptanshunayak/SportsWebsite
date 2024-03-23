import React from 'react'
import web from './Images/mission2.svg'
import web1 from './Images/m1.svg'
import v from './Images/mission1.png'
export default function Mission() {
    return (
        <>
            <div className='overflow1'>
                <div class="container pt-5">
                    <div className='row pt-5 pb-5'>
                        
                        <h1 className='aligner'><img src={v}></img></h1>
                       
                       
                        
                        <div className='col-6 col-sm-3 pt-5'>
                            <p className='text-center pt-3 mission'><img src={web1}></img></p>
                            <p className='text-center setter mission'>To provide sports talent opportunity to compete in tournaments at all levels.</p>
                            <p className='text-center pt-5'><img src={web1}></img></p>
                            <p className='text-center setter'>To build teams at various levels leading up to the international stage.</p>
                            <p className='text-center pt-5 mission'><img src={web1}></img></p>
                            <p className='text-center setter mission'>To arrange for coaching at district, state and National levels.</p>
                        </div>
                        <div className='col-6 displayer'>
                            <img src={web} class="d-block w-100" alt="..." />
                        </div>
                        <div className='col-6 col-sm-3 pt-5'>
                        <p className='text-center pt-3 mission1'><img src={web1}></img></p>
                            <p className='text-center setter mission1'>Revive the sports culture in India at grassroot level</p>
                             <br className='displayer'></br>
                             <br className='displayer'></br>
                             <br className='displayer'></br>
                            <p className='text-center pt-5 mission1'><img src={web1}></img></p>
                            <p className='text-center setter mission1'>dentify talented players all over the nation</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
