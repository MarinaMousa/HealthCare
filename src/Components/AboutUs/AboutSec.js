import React from 'react'
import Img1 from './../../Assets/3.jpg'
import Img2 from './../../Assets/2.jpg'
import Img3 from './../../Assets/4.jpg'
import './AboutUs.css'
import { Link } from 'react-router-dom'


function About() {
    return (
        <div className='about-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <ul className='images'>
                            <li><img src={Img1} /></li>
                            <li><img src={Img2} /></li>
                            <li><img src={Img3} /></li>
                            <li>
                                <div className='exp'>
                                    20
                                    <span>Year Experience</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 text'>
                        <h5>About Us</h5>
                        <h2>The Great Place Of Medical Hospital Center</h2>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                        <ul className='boxes'>
                            <li><i class="fa-solid fa-truck-medical"></i> Emergency Help</li>
                            <li><i class="fa-solid fa-bed"></i> Qualified Doctors</li>
                            <li><i class="fa-solid fa-droplet"></i> Best Professionals</li>
                            <li><i class="fa-solid fa-syringe"></i> Medical Treatment</li>
                        </ul>
                        <button><Link to='/about'>Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
