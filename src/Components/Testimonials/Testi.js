import React from 'react'
import Img1 from './../../Assets/n.png'
import Img2 from './../../Assets/16.jpeg'
import Img3 from './../../Assets/17.jpeg'
import Img4 from './../../Assets/18.jpeg'
import Img5 from './../../Assets/19.jpeg'
import Img6 from './../../Assets/20.jpeg'
import Img7 from './../../Assets/21.jpeg'
import './Testi.css'
import { Carousel } from 'react-bootstrap'

function Testi() {
    return (
        <section className='testi'>
            <div className='container'>
                <div className='text'>
                    <h6>Testimonials</h6>
                    <h2>See What Are The Patients <br /> Saying About us</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='images'>
                            <img className='one' src={Img1} />
                            <ul>
                                <li className='two'><img src={Img2} /></li>
                                <li className='three'><img src={Img3} /></li>
                                <li className='four'><img src={Img4} /></li>
                                <li className='five'><img src={Img5} /></li>
                                <li className='six'><img src={Img6} /></li>
                                <li className='seven'><img src={Img7} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='slider'>
                        <i class="fa-solid fa-quote-right"></i>
                            <Carousel>
                                <Carousel.Item>
                                    <div className='text'>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."</p>
                                        <h3>Joe Adam</h3>
                                        <p>Patient</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='text'>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."</p>
                                        <h3>Joe Adam</h3>
                                        <p>Patient</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='text'>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."</p>
                                        <h3>Joe Adam</h3>
                                        <p>Patient</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testi
