import React from 'react'
import Count from 'react-countup';
export default function Helping() {
  return (

    <div className='overflow1'>
      <div class="container text-center">
        <div className='row align-items-center'>
          <h1 className='text-center pt-5 pb-3 mt-5'>Helping</h1>
          <div className='col'>
            <div className='text-center padder'>
              <div className='circle'>
                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
              </div>
            </div>
            <p className='pt-3 texter'>Helping 87% of sportspersons who below age of 10</p>
            <br></br>
          </div>
          <div className='col'>
            <div className='text-center padder'>
              <div className='circle'>
                <h1 className='text-center text-light padd'> <Count start={0} end={50} duration={2} delay={3} />% </h1>
              </div>
            </div>
            <p className='pt-3 texter'>Helping 50% of sportspersons who faces challenges like lack of coaches, equipment and physical infrastructure.</p>
          </div>
          <div className='col'>
            <div className='text-center padder'>
              <div className='circle'>
                <h1 className='text-center text-light padd'> <Count start={0} end={87} duration={2} delay={3} />% </h1>
              </div>
            </div>
            <p className='pt-3 texter'>Helping 87% of sportspersons who starts playing after age of 10 which is late for certain sports</p>
          </div>
        </div>
      </div>
    </div>
  )
}
