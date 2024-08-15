import React from 'react'
import "./Faq.css";
import FAQ from "../../assets/FAQ.png"
import Accordian from './Accordian.jsx';

const Faq = () => {
  return (
    <div className='faq'>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="drop">
        <div className='menu'>
          <img src={FAQ}></img>
          <div>
            <Accordian/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
