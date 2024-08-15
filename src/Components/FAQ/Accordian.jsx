import React from 'react'
import { useState } from 'react'
import "./Accordian.css"

const Accordian = () => {

    const [selected, setSelected] = useState(null)

    const toggle = i =>{
        if(selected === i ){
            return setSelected(null)
        }

        setSelected(i)
    } 
  return (
    <div className='wrapper'>
      <div className="accordian">
            {data.map((items,i)=>(
                <div className='item'>
                    <div className="title" onClick={()=> toggle(i)}>
                        <h2>{items.question}</h2>
                        <span>{selected === i ?  '-' : '+'  }</span>
                    </div>
                    <div className={
                        selected === i ? 'content show' : 'content'
                    }>
                        {items.answer}
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

const data = [
    {
        question: "What are the subjects covered in Nayak’s Tutorials?",
        answer: 
                "At Nayak’s Tutorials, we give importance to all subjects but let our students have more sessions in Math and Science. We include sessions for English, Hindi, Math, Science and Social Science in our classes.",
    },
    {
        question: "How do Nayak's Tutorials students excel in all school and board exams?",
        answer:
                "With Guidance Mentorship & So much more…         Our strong teaching methodology includes various strategies and techniques to engage and motivate students to achieve academic excellence and personal growth, ensuring their success.           Nayak’s Tutorials classes, ensures you stay focused on your curriculum and we will prepare you to excel in school and your board exam",
    },
    {
        question: "What strategy can we use while preparing for Class 10?",
        answer: 
                "In the realm of school education, as students advance to the higher grades, the complexity of challenges tends to grow. Recognizing this, Nayak’s Tutorial tailors coaching classes uniquely for CBSE, ICSE & SSC classes 8, 9, and 10, offering distinct and effective support to help students excel in their academic journey.",
    },
    {
        question: "Will there be extra classes if students need?",
        answer: 
                "Yes, there will be revision classes, doubt classes and practice session on regular basis.",
    },
    {
        question: "What are the benefits of taking mock tests?",
        answer:
                "Taking mock tests improves time management skills and helps students know how prepared they are for the exam.",
    },
    {
        question: "Will parents receive update for the student's attendance?",
        answer:
                "Yes, parents will receive call & message in case a student is  absent in theory classes or tests.",
    },
    {
        question: "Which board is the best for the preparation of IIT-JEE, NEET-UG or SSC?",
        answer:
                "Largely, CBSE board is the preferred choice of students and parents because of IIT-JEE / NEET-UG favourable syllabus and NCERT textbooks. This doesn’t mean ICSE or SSC or other boards’ students don’t crack IIT-JEE and NEET -UG exams. If you are taking proper coaching for IIT-JEE or NEET-UG, it hardly matter which board you choose – CBSE or ICSE or SSC.",
    },
    {
        question:"Nayak's Tutorials provides coaching for IIT-JEE, NEET-UG, and MHT-CET?",
        answer: 
                "Yes.         If you are an aspirant to become an Engineer or a Doctor? Join our 2 years integrated courses, ACE 40 Batch, for NEET-UG/IIT-JEE/MHT-CET along with classes 11-12 of respective board.Look no further than our ACE 40 Batch – the ultimate master plan designed to guide you towards acing these competitive exams. For more detail click here: bit.ly/47OTlPb"
    },
    {
        question:"How to opt out and get refund?",
        answer:
                "Refund will be processed after receiving the application in standard format as per guidelines.",
    }
]

export default Accordian
