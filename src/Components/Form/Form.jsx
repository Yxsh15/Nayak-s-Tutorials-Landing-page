import React, { useState, useEffect } from 'react';
import './Form.css';
import SBC from "../../assets/SBC.jpg";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    interest: 'Select',
    board: 'Select',
    counselling: '',
    centre: 'Select'
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [mobileError, setMobileError] = useState('');

  useEffect(() => {
    // Check if all fields are filled and the phone number is valid
    const isValid = Object.values(formData).every(value => value !== '' && value !== 'Select') && mobileError === '';
    setIsFormValid(isValid);
  }, [formData, mobileError]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number
    if (name === 'mobile') {
      if (!/^\d*$/.test(value)) {
        setMobileError('Phone number must contain only digits.');
      } else if (value.length > 10) {
        setMobileError('Phone number must be exactly 10 digits.');
      } else if (value.length < 10 && value.length > 0) {
        setMobileError('Phone number must be exactly 10 digits.');
      } else {
        setMobileError('');
      }
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      emailjs.send('service_v65vgzk', 'template_gmhe05e', formData, 'i6XlZKvm209jSmYvo')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Form submitted successfully!');
        }, (error) => {
          console.error('FAILED...', error);
          toast.error(`Failed to submit the form. ${error.text || 'Please try again later.'}`);
        });
    } else {
      toast.error('Please fill out all fields correctly before submitting.');
    }
  };

  return (
    <div className='form'>
      <div className="container">
        <div className="image">
          <img src={SBC} alt='SBC Logo' />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Apply Now</h1>

          <label htmlFor="name">Student's Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Student's Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="mobile">Mobile Number*:</label>
          <input
            type="text"
            name="mobile"
            placeholder="+91"
            value={formData.mobile}
            onChange={handleChange}
          />
          {mobileError && <p className="error">{mobileError}</p>} {/* Display error message */}

          <label htmlFor="interest">I am interested in the course of:</label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
          </select>

          <label htmlFor="board">My School Board is:</label>
          <select
            name="board"
            value={formData.board}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="SSC">SSC</option>
            <option value="IGCSE">IGCSE</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="counselling">Interested in 1:1 Expert Counselling?</label>
          <div>
            <input
              type="radio"
              name="counselling"
              value="Yes"
              checked={formData.counselling === "Yes"}
              onChange={handleChange}
            /> Yes
            <input
              type="radio"
              name="counselling"
              value="No"
              checked={formData.counselling === "No"}
              onChange={handleChange}
            /> No
          </div>

          <label htmlFor="centre">Your nearest Center:</label>
          <select
            name="centre"
            value={formData.centre}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Naupada, Thane">Naupada, Thane</option>
            <option value="Vartak Nagar, Thane">Vartak Nagar, Thane</option>
            <option value="Vasant Vihar, Thane">Vasant Vihar, Thane</option>
            <option value="Manpada, Thane">Manpada, Thane</option>
            <option value="Thane">Hiranandani, Thane</option>
            <option value="Hiranandani, Thane">Anand Nagar, Thane</option>
            <option value="Kalwa, Thane">Kalwa, Thane</option>
            <option value="Mira Road, Sec 5">Mira Road, Sec 5</option>
            <option value="Mira Road, Jangid">Mira Road, Jangid</option>
            <option value="Mulund, Veena Nagar">Mulund, Veena Nagar</option>
            <option value="Mulund East">Mulund East</option>
            <option value="Bandra, Mumbai">Bandra, Mumbai</option>
          </select>

          <button className='submit' type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
      <div className="disclaimer">
        Disclaimer: By submitting this form, I hereby authorise your representatives to contact me via call / SMS / WhatsApp/ email communication. For more details, read our <a href='https://milkarjeetayenge.com/privacy-policy/' >Privacy Policy</a>.
      </div>
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
};

export default Form;
