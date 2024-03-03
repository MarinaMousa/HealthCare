import React from 'react'
import { Link } from 'react-router-dom'
import './Log.css'
import Img1 from './../../Assets/logo.png'

function Register() {
    return (
        <section className='log'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-5 col-lg-6 col-md-8'>
                        <div className='form'>
                            <div className='logo'>
                                <img src={Img1} />
                            </div>
                            <form action='#'>
                                <input type='text' placeholder='Your Name' />
                                <input type='email' placeholder='Your Email' />
                                <input type='text' placeholder='Username' />
                                <input type='password' placeholder='Password' />
                                <button> Register Now </button>
                                <p>Already Have An Account?</p>
                                <button className='reg'> <Link to='/login' >Login</Link> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
