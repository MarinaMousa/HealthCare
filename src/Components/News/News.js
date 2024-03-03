import React from 'react'
import './News.css'
import { Card, Button } from 'react-bootstrap'
import Img1 from './../../Assets/22.jpg'
import Img2 from './../../Assets/23.jpg'
import Img3 from './../../Assets/24.jpg'
import Img4 from './../../Assets/21.jpeg'
import Img5 from './../../Assets/16.jpeg'
import Img6 from './../../Assets/17.jpeg'
import { Link } from 'react-router-dom'

function News() {
    return (
        <section className='news'>
            <div className='container'>
                <div className='text'>
                    <h6>Latest News</h6>
                    <h2>Our Latest News</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Img1} />
                            <Card.Body>
                                <div className='dr'>
                                    <img className='two' src={Img4} />
                                    <h6>Michel</h6>
                                    <h6><i class="fa-regular fa-calendar-days"></i> 17 July 2024</h6>
                                </div>
                                <h3>In this hospital there are special surgeon</h3>
                                <Link to="/blog" className='btn'><button>Learn More <i class="fa-solid fa-angle-right"></i></button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Img2} />
                            <Card.Body>
                                <div className='dr'>
                                    <img className='two' src={Img5} />
                                    <h6>Sara</h6>
                                    <h6><i class="fa-regular fa-calendar-days"></i> 17 July 2024</h6>
                                </div>
                                <h3>In this hospital there are special surgeon</h3>
                                <Link to="/blog" className='btn'><button>Learn More <i class="fa-solid fa-angle-right"></i></button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Img3} />
                            <Card.Body>
                                <div className='dr'>
                                    <img className='two' src={Img6} />
                                    <h6>Jessy</h6>
                                    <h6><i class="fa-regular fa-calendar-days"></i> 17 July 2024</h6>
                                </div>
                                <h3>In this hospital there are special surgeon</h3>
                                <Link to="/blog" className='btn'><button>Learn More <i class="fa-solid fa-angle-right"></i></button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
