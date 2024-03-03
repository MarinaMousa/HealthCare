import React from 'react'
import { Link } from 'react-router-dom'
import './Log.css'
import Img1 from './../../Assets/logo.png'

function Log() {
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
                                <input type='text' placeholder='Username' />
                                <input type='password' placeholder='Password' />
                                <button> Login</button>
                                <Link className='pass' to='/password' >Forgot Password</Link>
                                <p>Don't Have Any Account?</p>
                                <button className='reg'> <Link to='/register' >Register</Link> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Log
