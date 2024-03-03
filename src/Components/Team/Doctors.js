import React from 'react'
import './Doctors.css'
import Img1 from './../../Assets/d1.jpg'
import Img2 from './../../Assets/d2.jpg'
import Img3 from './../../Assets/d3.jpg'
import { Link } from 'react-router-dom'

function Doctors() {
    return (
        <section className='doctors'>
            <div className='container'>
                <div className='text'>
                    <h6>Our Doctor</h6>
                    <h2>Meet Best Doctors</h2>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='member'>
                            <div className='media'>
                                <img src={Img1} />
                            </div>
                            <div className='info'>
                                <div className='content'>
                                    <h4>Dr. Addition Smith</h4>
                                    <p>Dentist</p>
                                </div>
                                <ul className='social'>
                                    <li> <Link to='https://www.twitter.com/'> <i class="fa-brands fa-twitter"></i> </Link> </li>
                                    <li> <Link to='https://www.linkedin.com/'> <i class="fa-brands fa-linkedin"></i> </Link> </li>
                                    <li> <Link to='https://www.instagram.com/'> <i class="fa-brands fa-instagram"></i> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='member'>
                            <div className='media'>
                                <img src={Img2} />
                            </div>
                            <div className='info'>
                                <div className='content'>
                                    <h4>Dr. Addition Smith</h4>
                                    <p>Chiropractor</p>
                                </div>
                                <ul className='social'>
                                    <li> <Link to='https://www.twitter.com/'> <i class="fa-brands fa-twitter"></i> </Link> </li>
                                    <li> <Link to='https://www.linkedin.com/'> <i class="fa-brands fa-linkedin"></i> </Link> </li>
                                    <li> <Link to='https://www.instagram.com/'> <i class="fa-brands fa-instagram"></i> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='member'>
                            <div className='media'>
                                <img src={Img3} />
                            </div>
                            <div className='info'>
                                <div className='content'>
                                    <h4>Dr. David Benjamin</h4>
                                    <p>Cardiologist</p>
                                </div>
                                <ul className='social'>
                                    <li> <Link to='https://www.twitter.com/'> <i class="fa-brands fa-twitter"></i> </Link> </li>
                                    <li> <Link to='https://www.linkedin.com/'> <i class="fa-brands fa-linkedin"></i> </Link> </li>
                                    <li> <Link to='https://www.instagram.com/'> <i class="fa-brands fa-instagram"></i> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doctors
