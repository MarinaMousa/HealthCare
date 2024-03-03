import React from 'react'
import Banner from '../Banner/Banner'
import Counter from './../AboutUs/Counter'
import Doctors from './../Team/Doctors'
import News from './../News/News'
import './Services.css'
import { Service } from '../../Data'

function Services() {

  const serviceItem = Service.map((item) => {
    return (
      <div className='col-lg-4 col-sm-6'>
        <div className='content'>
          <div className='media'>
            <i class={item.icon}></i>
          </div>
          <div className='info'>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button> <a href='#'>View More</a> </button>
          </div>
        </div>
      </div>
    )
  })


  return (
    <div>
      <Banner title="Services" />

      <section className='services'>
        <div className='container'>
          <div className='row justify-content-center'>
            {serviceItem}
          </div>
        </div>
      </section>

      <Counter />
      <Doctors />
      <News />
    </div>
  )
}

export default Services
