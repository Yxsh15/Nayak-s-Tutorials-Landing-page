import React from 'react'
import './Hero.css'
const Hero = () => {
    const style =  {    
        fontWeight: "700",
}
  return (
    <div className='hero_info'> 
      <h1>We will guide you to success</h1>
      <p>Secure Your Success Today! Limited Seats Available for ICSE, CBSE & SSC Boards. Get the best guidance from <span style={{ color: '#da1f24', fontWeight: 500 }}>Nayak’s Tutorials</span> with our smaller batches and better focus. Admissions are now open for academic year 2024-25. Book your seats now.</p>
      <h2>Admission Open For CBSE, ICSE, IGCSE & SSC</h2>
      <div className="info">
        <div className="desc">
            <p style={style}>Score Booster Course</p>
            <p style={style}>Want to excel in the Class 10 Board Exam?</p>
            <p>Enrol for the <span style={{fontWeight: 600 }}>Score Booster Course</span> at <span style={{ color: '#da1f24', fontWeight: 500 }}>Nayak’s Tutorials</span>. We have specialized courses created for the <span style={{fontWeight: 600 }}>CBSE, ICSE and SSC Boards</span>.</p>
            <p>Tailored specifically for the <span style={{fontWeight: 600 }}>CBSE, ICSE, SSC Board</span> Exam pattern and syllabus, our Nayak’s Score Booster Course is your key to confidence and success. This comprehensive program covers everything you need to excel in your exams, from enhancing subject knowledge to strengthening weak areas and improving problem-solving skills.</p>
            <p>With our board-focused approach, you'll gain clarity of concepts, bridge learning gaps, and sharpen exam writing skills. Plus, you'll master time management techniques essential for acing your exams. Thousands of students have already benefited from the <span style={{ color: '#da1f24', fontWeight: 500 }}>Nayak’s Tutorials</span>- Score Booster dose.</p>
            <p>Score Booster Course is available for <span style={{fontWeight: 600 }}>VIII, IX & X Board Exam- CBSE/ICSE/SSC</span></p>
        </div>
        <div className="features">
            <p style={style}>Course Highlights</p>
            <p style={style}>You can certainly Boost Your Score Up To 30%* With this Our ADD-ON Course in your VIII, IX & X Board Exam- CBSE/ICSE/SSC.</p>
            <ul>
                <li>✅Join this ADD ON course, whether you are self-studying, joined coaching or receiving home tuition.</li>
                <li>✅Just Commit Your 2 Hours A Week With <span style={{ color: '#da1f24', fontWeight: 500 }}>Nayak's Tutorials</span>.</li>
                <li>✅100+ Tests Series (Topic wise, Practice & Prelims) - At Centre</li>
                <li>✅Practice Papers</li>
                <li>✅Planned Revision</li>
                <li>✅Special Sessions by Experts & much more</li>
                <li>✅Because You Deserve Better Grades</li>
            </ul>
            <p style={style}> Charge Up For VIII, IX & X Board Exam - CBSE/ICSE/SSC</p>
            <p>#scoreतोbadhega</p>
            <p>Enroll Today for the 2024-25 Session</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
