import React from 'react'
import Home from './Home'
import Helping from './Helping'
import Home1 from './Home1'
import About from './About'
import Quotes1 from './Quotes1'
import Home2 from './Home2'
import Form from './Form'
import Bottom from './Bottom'
import Sports from './Sports'
export default function Page1() {
  return (
    <div>
      <Home></Home>
      <Helping></Helping>
      <Home1></Home1>
      <About></About>
      <Quotes1></Quotes1>
      <section id='sports'>
      <Home2></Home2>
      </section>
      <section id='form'>
      <Form></Form>
      </section>
      <Bottom></Bottom>
    </div>
  )
}
