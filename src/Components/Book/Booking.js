import React from 'react'
import Banner from '../Banner/Banner'
import BookSec from './BookSec'

function Booking() {
  return (
    <>
      <Banner title='Booking Appointment' />


      <section className='book-sec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-5 col-lg-6 col-md-6'>
              <BookSec />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Booking
