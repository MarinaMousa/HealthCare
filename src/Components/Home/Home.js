import React from 'react';
import headerImg from './../../Assets/1.png';
import './Home.css'
import { Link } from 'react-router-dom';
import Img1 from './../../Assets/222.png';
import Img2 from './../../Assets/333.png';
import Img3 from './../../Assets/25.png';
import Img4 from './../../Assets/26.png';
import Img5 from './../../Assets/12.png';
import Img6 from './../../Assets/31.png';
import Img7 from './../../Assets/5.png';
import Img8 from './../../Assets/6.png';
import Img9 from './../../Assets/8.png';
import Img10 from './../../Assets/9.png';
import Img11 from './../../Assets/7.png';
import Img12 from './../../Assets/11.png';
import About from '../AboutUs/AboutSec';
import BookSec from '../Book/BookSec';
import Testi from '../Testimonials/Testi';
import News from '../News/News';

function Home() {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 text'>
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button><Link to='/about'>Read More</Link></button>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <img src={headerImg} className='main' title='headerImg' />
                        </div>
                    </div>
                </div>
                <div className='shapes'>
                    <img src={Img1} className='one' />
                    <img src={Img2} className='two' />
                    <img src={Img3} className='three' />
                    <img src={Img4} className='four' />
                    <img src={Img5} className='five' />
                </div>
                <img src={Img6} className='back' />
            </header>

            <About />

            <section className='cards'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card'>
                                <h1>01</h1>
                                <h3>Make Appointmnet</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                <button><Link to='/booking'>View More <i class="fa-solid fa-angle-right"></i></Link></button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card two'>
                                <h1>02</h1>
                                <h3>Take Treatment</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                <button><Link to='/booking'>View More <i class="fa-solid fa-angle-right"></i></Link></button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card'>
                                <h1>03</h1>
                                <h3>Registration</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                <button><Link to='/booking'>View More <i class="fa-solid fa-angle-right"></i></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='book'>
                <div className='main-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-6 col-md-6'><BookSec /></div>
                            <div className='col-xl-7 col-lg-6 col-md-6'>
                                <div className='images'>
                                    <img className='zero' src={Img7} />
                                    <div className='imgs'>
                                        <img className='one' src={Img8} />
                                        <img className='two' src={Img9} />
                                        <img className='three' src={Img10} />
                                        <img className='four' src={Img11} />
                                        <img className='five' src={Img12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testi />
            <News />

        </>

    )
}

export default Home
