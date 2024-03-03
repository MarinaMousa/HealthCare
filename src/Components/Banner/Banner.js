import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import Img1 from './../../Assets/321.png'
import Img2 from './../../Assets/123.png'

function Banner(props) {
    const {title} = props
    return (
        <section className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <h1>{title}</h1>
                        <ul>
                            <li><Link to="/"><i class="fa-solid fa-house"></i> Home</Link></li>
                            <li>/</li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='shapes'>
                <img src={Img1} className='one' />
                <img src={Img2} className='two' />
            </div>

        </section>
    )
}

export default Banner
