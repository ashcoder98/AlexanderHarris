import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7zmbby', 'template_jokd6lk', form.current, 'user_eTki0qyurI1GJWhR8kGFK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact'>
      <div className='emailform'>

    <form ref={form} onSubmit={sendEmail}>
     <div className='textinfo'>

      <input type="text" name="name" placeholder='Full Name'/>
      
      <input type="text" name="subject" placeholder='Subject'/>
      
      <input type="email" name="email" placeholder='Email Address' />
      
      <textarea rows={15} cols={30} name="message" placeholder='Message' />
      <div className='submit'>

      <input type="submit" value="Send Email" />
      </div>
     </div>
    </form>
      </div>
    </div>
  );
      }
      
      export default Contact;
      