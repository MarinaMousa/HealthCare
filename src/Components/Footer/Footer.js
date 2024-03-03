import React from 'react'
import './Footer.css'
import Logo from './../../Assets/logo.png'
import Face from './../../Assets/face.png'
import Twitter from './../../Assets/twitter.png'
import Insta from './../../Assets/instagram.png'
import Linkedin from './../../Assets/linkedin.png'
import Img1 from './../../Assets/15.png'
import Img2 from './../../Assets/123.png'
import Img3 from './../../Assets/321.png'
import Img4 from './../../Assets/15.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src={Logo} />
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className='phone'>
                            <i class="fa-solid fa-phone"></i>
                            <div className='number'>
                                <h6>Contact Us</h6>
                                <h4>+01 123 456 7890</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to='/about' >About Us</Link></li>
                            <li><Link to='/service' >Services</Link></li>
                            <li><Link to='/booking' >Booking</Link></li>
                            <li><Link to='/faq' >FAQ's</Link></li>
                            <li><Link to='/blog' >Blogs</Link></li>
                            <li><Link to='/team' >Our Team</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h2>Our Service</h2>
                        <ul>
                            <li><Link to='/service' >Dental Care</Link></li>
                            <li><Link to='/service' >Cardiac Clinic</Link></li>
                            <li><Link to='/service' >Massege Therapy</Link></li>
                            <li><Link to='/service' >Cardiology</Link></li>
                            <li><Link to='/service' >Precise Diagnosis</Link></li>
                            <li><Link to='/service' >Abmbulance Services</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h2>Subcribe</h2>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button type='submit'>Subcribe Now</button>
                        </form>
                        <ul className='social'>
                            <li><a href='https://www.facebook.com/' ><img src={Face} /></a></li>
                            <li><a href='https://www.twitter.com/' ><img src={Twitter} /></a></li>
                            <li><a href='https://www.instagram.com/' ><img src={Insta} /></a></li>
                            <li><a href='https://www.linkedin.com/' ><img src={Linkedin} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 end'>
                        <p>Copyright © 2024 Design & Developed by <span>Marina Mousa</span></p>
                    </div>
                </div>
            </div>

            <div className='shapes'>
                <img src={Img1} className='one' />
                <img src={Img2} className='two' />
                <img src={Img3} className='three' />
                <img src={Img4} className='four' />
            </div>

        </footer>
    )
}

export default Footer
