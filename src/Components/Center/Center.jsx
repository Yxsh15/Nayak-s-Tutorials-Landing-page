import React from 'react'
import "./Center.css"
const Center = () => {
  return (
      <div className='Center'>
        <h1>Our Study Centers are at:</h1>
      <div className='add'>
      <a href="https://www.google.com/maps/place/Nayak%E2%80%99s+Tutorials%7C+CBSE%7C+ICSE%7C+IGCSE%7C+SSC+Board/@19.1875804,72.8849146,12z/data=!4m6!3m5!1s0x3be7b921eaaaaaab:0xc84c7488070b05b!8m2!3d19.1875988!4d72.9673163!16s%2Fg%2F124ypv_g3?entry=ttu"
            style={{width:"500px",height:"150px",textDecoration: 'none' }} 
        >
        <div className="map">
            <p style={{fontWeight: "700",color:"#000"}}>Naupada,  Thane West</p>
            <span  onMouseOver={(e) => e.target.style.color = '#000'} 
            onMouseOut={(e) => e.target.style.color = '#da1f24'} >Nayak’s Tutorials, 2nd Floor, Satyam Building, Near Malhar Talkies, Prashant Nagar, Naupada, Thane West, Thane – 400602.</span>
        </div>
      </a>
      <a href="https://www.google.com/maps/place/Nayak's+Tutorials,+Thane+West+%7CCoaching+class+for+CBSE,IGCSE,ICSE+Board+all+classes/@19.2340875,72.9764051,15z/data=!4m6!3m5!1s0x3be7bbe0df6c2e91:0x3710325b4228da3c!8m2!3d19.2366016!4d72.972629!16s%2Fg%2F11b7tb8lhh?entry=ttu"style={{width:"500px",height:"150px",textDecoration: 'none' }} 
            >
        <div className="map">
            <p style={{fontWeight: "700",color:"#000"}}>Manpada, Thane West</p>
            <span onMouseOver={(e) => e.target.style.color = '#000'} 
            onMouseOut={(e) => e.target.style.color = '#da1f24'}>Nayak's Tutorials,2nd floor, Sahyog Commercial Complex, above Core4 Gym / MTNL office, Tikuji Ni Wadi Rd, Manpada, Thane West, Thane, Maharashtra 400607</span>
        </div>
      </a>
      </div>
    </div>
  )
}

export default Center
