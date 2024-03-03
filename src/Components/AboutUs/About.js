import React from 'react'
import Banner from '../Banner/Banner'
import AboutSec from './AboutSec'
import Testi from './../Testimonials/Testi'
import News from './../News/News'
import Counter from './Counter'
import Doctors from '../Team/Doctors'

function About() {
    return (
        <>
            <Banner title='About Us' />
            <AboutSec />
            <Counter />
            <Doctors />
            <Testi />
            <News />
        </>
    )
}

export default About
