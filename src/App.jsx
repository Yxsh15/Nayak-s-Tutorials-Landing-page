import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Form from "./Components/Form/Form";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import Achievers from "./Components/Achievers/Achievers";
import Courses from "./Components/Courses/Courses";
import Testimonial from "./Components/Testimonial/Testimonial";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Center from "./Components/Center/Center";


const App =()=>{
  return(
    <div>
      <Navbar/>
      <Form/>
      <Hero/>
      <Stats/>
      <Achievers/>
      <Courses/>
      <Testimonial/>
      <Center/>
      <Faq/>
      <Footer/>
    </div>
  )
}
export default App;