import React from 'react'
import Banner from './../Banner/Banner'
import './Doctors.css'
import { Teams } from '../../Data'
import { Link } from 'react-router-dom'

function Team() {


    const teamItem = Teams.map((item) => {
        return (
            <div className='col-lg-4 col-sm-6'>
                <div className='member'>
                    <div className='media'>
                        <img src={item.img} />
                    </div>
                    <div className='info'>
                        <div className='content'>
                            <h4>{item.name}</h4>
                            <p>{item.title}</p>
                        </div>
                        <ul className='social'>
                            <li> <Link to='https://www.twitter.com/'> <i class="fa-brands fa-twitter"></i> </Link> </li>
                            <li> <Link to='https://www.linkedin.com/'> <i class="fa-brands fa-linkedin"></i> </Link> </li>
                            <li> <Link to='https://www.instagram.com/'> <i class="fa-brands fa-instagram"></i> </Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    })



    return (
        <>
            <Banner title='Our Team' />

            <section className='doctors'>
                <div className='container'>
                    <div className='text'>
                        <h6>Our Doctor</h6>
                        <h2>Meet Best Doctors</h2>
                    </div>
                    <div className='row justify-content-center'>
                        {teamItem}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
