import React,{useState} from 'react'
import './Contact.css'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

import white_arrow from '../../assets/white-arrow.png'


const Contact = () =>{
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84481a22-c86f-4f4c-acb8-31ac8211e1e3");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    // const data = await response.json();

    if (data.success) {
      console.log("Success",res);
      setResult(res.message);
      // setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };   
    return (
        <>

            <div className="contact">
                <div className="contact-col">
                    <h3>Send us a massage <img src={msg_icon} alt="" /></h3>

                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, quetions, and suggestions are imporatant to us as we strive to provide exceptional service to our university community</p>

                    <ul>
                        <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                        <li> <img src={phone_icon} alt="" />+1 123-456--7890</li>
                        <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>


                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onsubmit}>
                        <label>Your Name</label>
                        <input type="text" name='name' placeholder='eter your name' required />

                        <label>Phone Number</label>
                        <input type="tel" name='phone' placeholder='enter your mobile number' required />

                        <label>Write Your Massage Here</label>
                        <textarea name="message" rows="6 " placeholder='enter your message' required></textarea>

                        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                    </form>

                    <span>{result}</span>
                </div>

            </div>

        </>
    )
}

export default Contact
