import React from 'react'
import Banner from './../Banner/Banner'
import './../News/News.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Blogs } from '../../Data'

function Blog() {


    const blogItem = Blogs.map((item) => {
        return (
            <div className='col-lg-4 col-md-6'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <div className='dr'>
                            <img className='two' src={item.img2} />
                            <h6>{item.name}</h6>
                            <h6><i class={item.icon}></i> {item.date}</h6>
                        </div>
                        <h3>{item.text}</h3>
                        <Link to="/contact" className='btn'><button>Learn More <i class="fa-solid fa-angle-right"></i></button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    })


    return (
        <>
            <Banner title='Blog' />

            <section className='news'>
                <div className='container'>
                    <div className='row'>
                    {blogItem}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog
