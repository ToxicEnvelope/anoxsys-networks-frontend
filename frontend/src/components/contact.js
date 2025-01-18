import React, { useState } from 'react'


const initialState = {
  name: '',
  email: '',
  message: '',
}

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async () => {

  const userData = {
    name: name,
    email: email,
    message: message
  };

  try {
    console.log(userData);
      const response = await fetch(`${window.location.protocol}//${window.location.hostname}:4444/sendMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User added successfully!');
      } else {
        const errorData = await response.json();
        console.error(`Error: ${errorData.message}`);
      }
  } catch (error) {

      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please feel free to contact us and we will get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' onClick={handleSubmit}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.social.facebook.url : '/'}>
                      Facebook {" "} <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.social.linkedin.url : '/'}>
                      LinkedIn {" "} <i className='fab fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            <b>Copyright &copy; 2022 Anoxsys Networks</b>
          </p>
        </div>
      </div>
    </div>
  )
}


export default Contact;