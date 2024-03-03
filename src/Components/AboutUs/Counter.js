import React from 'react'
import { Counters } from './../../Data'
import './AboutUs.css'

function Counter() {

    const counterItem = Counters.map((item) => {
        return (
            <div className='col-xl-3 col-sm-6'>
                <div className='counter-box'>
                    <h2>{item.number}</h2>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                </div>
            </div>
        )
    })


    return (
        <section className='counter'>
            <div className='container'>
                <div className='row'>
                    {counterItem}
                </div>
            </div>
        </section>
    )
}

export default Counter
