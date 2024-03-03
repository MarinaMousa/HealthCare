import React from 'react'
import './BookSec.css'

function BookSec() {
  return (
    <div className='appointment-form'>
      <h3>Book Appointment</h3>
      <form>
        <select>
          <option>Select Department</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <select>
          <option>Select Doctor</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <input type='text' placeholder='Your Name' />
        <input type='number' placeholder='Your Number' />
        <input type='date' />
        <button type='submit'>Appointment Now</button>
      </form>
    </div>
  )
}

export default BookSec
