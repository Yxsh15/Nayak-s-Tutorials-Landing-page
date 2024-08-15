import React from 'react'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='Course_container'>
      <h1>Our Courses</h1>
      <div className="course">
        <a href='https://nayakstutorials.com/cbse-classes/'>
        <button className='btn'>
            <p>CBSE</p>
            Class-8,9 & 10
        </button>
        </a>
        <a href='https://nayakstutorials.com/icse-classes/'>
        <button className='btn'>
           <p> ICSE</p>
            Class-8,9 & 10
        </button>
        </a>
        <a href='https://nayakstutorials.com/igcse-classes/'>
        <button className='btn'>
            <p>IGCSE</p>
            Class-8,9 & 10
        </button>
        </a>
        <a href='https://nayakstutorials.com/classes-for-mh-ssc-board/'>
        <button className='btn' >
            <p>SSC</p>
            Class-8,9 & 10
        </button>
        </a>
      </div>
    </div>
  )
}

export default Courses
