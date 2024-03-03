import React from 'react'
import { Link } from 'react-router-dom'
import './Log.css'
import Img1 from './../../Assets/logo.png'

function PassWord() {
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
                                <input type='password' placeholder='Password' />
                                <input type='password' placeholder='New Password' />
                                <button> <Link to='/home'>Submit</Link>  </button>
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

export default PassWord
