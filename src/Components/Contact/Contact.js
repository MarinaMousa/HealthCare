import React from 'react'
import Banner from '../Banner/Banner'
import './Contact.css'
import Img1 from './../../Assets/conIcon3.png'
import Img2 from './../../Assets/conIcon2.png'
import Img3 from './../../Assets/conIcon1.png'

function Contact() {
    return (
        <>
            <Banner title="Contact Us" />
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <form>
                                <input type='text' placeholder='Your Name' />
                                <input type='email' placeholder='Email' />
                                <input type='text' placeholder='Your Number' />
                                <select>
                                    <option>Selecty Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <textarea placeholder='Type Message' />
                                <button type='sumit'>Submit</button>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='information'>
                                <div className='data'>
                                    <h2>Contact Us For Any Informations</h2>
                                    <h3><i class="fa-solid fa-map-location-dot"></i> Location</h3>
                                    <p>2005 Stokes Isle Apt. 896, <br /> Venaville 10010, USA</p>
                                    <h3><i class="fa-regular fa-id-card"></i> Email & Phone</h3>
                                    <p>info@yourdomain.com <br />
                                        (+68) 120034509</p>
                                    <h3><i class="fa-solid fa-globe"></i> Follow Us</h3>
                                    <div className='social'>
                                        <a href='#'><i class="fa-brands fa-twitter"></i></a>
                                        <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                                        <a href='#'><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='boxes' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='box one'>
                                <div className='image one'>
                                    <img src={Img1} />
                                </div>
                                <h5>Contact Number</h5>
                                <p>+001 123 456 790 <br />
                                    +002 3424 44 00</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='box two'>
                                <div className='image two'>
                                    <img src={Img2} />
                                </div>
                                <h5>Email Address</h5>
                                <p>info@yourdomain.com <br />
                                    example@support.com</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='box three'>
                                <div className='image three'>
                                    <img src={Img3} />
                                </div>
                                <h5>Address</h5>
                                <p>2005 Stokes Isle Apt. 896, <br />
                                    Venaville 10010, USA</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
