import React, { useState, useRef } from 'react';
import ReactSlider from 'react-slider';
import '../styles/Skillsets.css'
import phone from '../assets/call.gif'
import linkedin from '../assets/linkedin.gif'

function Skillsets() {
  // const [error, setError] = useState(''); // Initialize as an empty string
  // const [formData, setFormData] = useState({
  //   fname: '',
  //   contact: '',
  //   note: '',
  // });

  const routeChangePhone = () => {
    let url = "https://wa.link/98zdlp";
    window.open(url, '_blank');
  };

  const routeChangeLinkedIn = () => {
    let url = "https://www.linkedin.com/in/om-goyal-5663b3193/";
    window.open(url, '_blank');
  };


  // const { fname, contact, note } = formData;

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   // Validation logic
  //   if (!formData.fname) {
  //     setError('Name is required');
  //     return;
  //   }

  //   if (!formData.contact || formData.contact.length < 10) {
  //     setError('Please enter a valid 10-digit contact number');
  //     return;
  //   }

  //   if (!formData.note) {
  //     setError('Note is required');
  //     return;
  //   }

  //   setError('');
  //   try {
  //     console.log("Something")
  //     // await response.json()
  //     // setFormData({ ...DataTransfer, fname: '', contact: '', note: '' })
  //   } catch (err) {
  //     alert("Something went wrong!")
  //   }
  // };

  return (
    <div className='container-fluid' style={{ backgroundColor: "#CDC2A5" }}>
      <div className='row' style={{ border: '2px solid #EAE4DD', borderRadius: '10px', textAlign: 'left' }}>
        <div className='col-lg-4 col-6 d-flex flex-column justify-content-center p-3 align-items-center'>
          <h5 className='mb-3'>Om Goyal</h5>
          <h5 className='mb-3'>Full-Stack Developer (MERN Stack)</h5>
        </div>
        <div className='col-lg-4 col-6 d-flex flex-column justify-content-center align-items-center'>
          <h5 className='mb-3'>omgoyal20@outlook.com</h5>
        </div>
        <div className='col-lg-4 col-6 d-flex flex-column justify-content-center align-items-center'>
          <a href='https://www.linkedin.com/in/om-goyal-5663b3193/' className='mb-3' style={{ color: '#4A2C2A', fontSize: '20px' }}>LinkedIn</a>
          <h5 className='mb-3'>Hyderabad, Telangana</h5>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-6' style={{ border: '2px #EAE4DD solid', borderRadius: '10px' }}>
          <h3 style={{ color: '#2C3E50' }}>Summary</h3>
          <div className='d-flex flex-column justify-content-center' style={{ height: '80%' }}>
            <ul className='mt-3' style={{ color: '#4A2C2A' }}>
              <li className='mt-2'>Full-stack developer with 2 years of experience.</li>
              <li className='mt-2'>Led a successful project from conception to launch.</li>
              <li className='mt-2'>Developed complex MERN platforms passing rigorous evaluations.</li>
              <li className='mt-2'>Recognized for creating intuitive UI designs.</li>
              <li className='mt-2'>Utilized Adobe JMeter for load testing.</li>
              <li className='mt-2'>Backend hosted on AWS EC2.</li>
              <li className='mt-2'>Frontend deployed on AWS Amplify.</li>
            </ul>
          </div>
        </div>
        <div className='col-lg-4 col-6' style={{ border: '2px #EAE4DD solid', borderRadius: '10px', color: '#4A2C2A' }}>
          <h3 className='p-0 m-0 mb-3' style={{ color: '#2C3E50' }}>Education</h3>
          <div className='w-100 d-flex flex-column justify-content-center' style={{ height: '80%' }}>
            <div className='d-flex justify-content-between'>
              <h5 className='p-0 m-0 mb-2'>B.Tech in Computer Science</h5>
              <h5 className='p-0 m-0 mb-2'>8.62/10 GPA</h5>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0 mb-2'><b>Mahindra University</b></p>
              <p className='p-0 m-0 mb-2'>05/2018 - 05/2022</p>
            </div>
            <p className='p-0 m-0 mb-2'>Hyderabad, Telangana, India</p>

            <div className='d-flex justify-content-between mt-5'>
              <h5 className='p-0 m-0 mb-2'>CISE Semester Exchange Student</h5>
              <h5 className='p-0 m-0 mb-2'>4.0/4.0 GPA</h5>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0 mb-2'><b>University of Florida</b></p>
              <p className='p-0 m-0 mb-2'>01/2022 - 05/2022</p>
            </div>
            <p className='p-0 m-0 mb-2'>Gainesville, Florida, USA</p>
          </div>
        </div>

        <div className='col-lg-4 col-6' style={{ border: '2px #EAE4DD solid', borderRadius: '10px' }}>
          <h3 style={{ color: '#2C3E50' }}>Skillsets</h3>
          <div className='row'>
            <div className='col-3'>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>ReactJS</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>NodeJS</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>ExpressJS</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>AWS EC2</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>AWS Amplify</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Typescript</p>
            </div>
            <div className='col-3'>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>HTML</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>CSS</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>JavaScript</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Vue.js</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Python</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Clickup</p>
            </div>
            <div className='col-3'>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>GraphQL</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Next.js</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Redis</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>MongoDB</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>ChatGPT API</p>
            </div>
            <div className='col-3'>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>MYSQL</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Apache JMeter</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Scrum</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Agile</p>
              <p className='me-2 p-2' style={{ color: '#4A2C2A', border: '2px #295F98 solid', borderRadius: '5px' }}>Git</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-6' style={{ color: '#4A2C2A', border: '2px white solid', borderRadius: '10px' }}>
          <h3 style={{ color: '#2C3E50' }}>Experience</h3>
          <div className='d-flex justify-content-between'>
            <h5>Plutocrat Simulations Tech Pvt. Ltd.</h5>
            <h5>Lead Developer</h5>
          </div>
          <div className='d-flex justify-content-between'>
            <p>06/2022 - Present</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <p>Plutocrat Simulations Tech is a new-age startup, that provides powerful and dynamic simulation platforms to businesses and educational institutes for improving decision-making, optimizing operations, and enhancing learning. These tools replicate real-world scenarios, systems, or processes within a controlled and virtual environment.</p>
          <ul>
            <li>Led the design process, including wireframing and collaborating with a UI design freelancer for frontend development.</li>
            <li>Hired, trained and lead an Agile team of 4 full-stack developers</li>
            <li>Designed the technology stack, system architecture, and database schema for three distinct projects.</li>
            <li>Utilized Node.js to develop triggers for automated tasks, incorporating MongoDB triggers and Node schedulers.</li>
            <li>Introduced and implemented ClickUp, a project management software akin to Jira, for efficient work management.</li>
            <li>Identified user frustration, and enhanced user satisfaction by redesigning the banking module to enable seamless multi-account login and switching within the dashboard.</li>
            <li>Collaborated with cross-functional teams—marketing, development, and HR—to ensure a cohesive work environment for all stakeholders.</li>
            <li>Conducted rigorous load testing using Apache JMeter to optimize platform performance under various conditions.</li>
          </ul>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Talentiaga Technologies Pvt. Ltd.</h5>
            <h5>React Native Developer Intern</h5>
          </div>
          <div className='d-flex justify-content-between'>
            <p>07/2021 - 08/2021</p>
            <p>Work from Home</p>
          </div>
          <p>An IT company which delivers international projects to clients across multiple countries. They partner with tech startups for development and aid businesses in the scale-up phase through automated solutions.</p>
          <ul>
            <li>Collaborated closely with senior developers to grasp and implement best coding practices effectively</li>
            <li>Developed frontend pages using React Native based on the requirements submitted by the client.</li>
          </ul>
        </div>

        <div className='col-6 p-0 m-0'>
          <div className='p-2' style={{ color: '#4A2C2A', border: '2px white solid', borderRadius: '10px' }}>
            <h3 style={{ color: '#2C3E50' }}>Relevant Skills Proficiency</h3>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mt-4'>ReactJS</h5>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={80}
                disabled="true"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mt-4'>NodeJS</h5>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={80}
                disabled="true"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mt-4'>MongoDB</h5>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={80}
                disabled="true"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mt-4'>ExpressJS</h5>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={80}
                disabled="true"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mt-4'>Python</h5>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={80}
                disabled="true"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              />
            </div>
          </div>
          <div className='p-2' style={{ color: '#4A2C2A', border: '2px white solid', borderRadius: '10px' }}>
            <h3 className='mb-4' style={{ color: '#2C3E50' }}>Academic / University Projects</h3>
            <h5>Movie Trend Visualizer</h5>
            <p className='m-0 p-0'>React, Node, OracleDB(SQL)</p>
            <a href='https://github.com/AndresConsalvo/Movie_Trend_Visualizer.git' style={{ color: '#4A2C2A' }}>Github</a>
            <p className='mt-1'>Made a React frontend to showcase graphs which analysed movie trends. Used Oracle DB as the Database with complex queries.</p>
            <hr />
            <h5>Real-Time Air Quality Index Mobile Application</h5>
            <p>React Native</p>
            <p>Worked on the front-end for the fully-functioning mobile application using React Native (limited to 50 cities of the Indian subcontinent). Incorporated Google Maps into the application.</p>
          </div>
          <div className='p-3' style={{ color: '#4A2C2A', border: '2px white solid', borderRadius: '10px' }}>
            <h3 className='mb-3' style={{ color: '#2C3E50' }}>Languages</h3>
            <div className='d-flex justify-content-between'>
              <p>English</p>
              <p>Fluent</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Hindi</p>
              <p>Native</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-6 p-2' style={{ color: '#4A2C2A', border: '2px white solid', borderRadius: '10px' }}>
          <h3 style={{ color: '#2C3E50' }}>Company Projects (Plutocrat Simulations Tech Pvt. Ltd.)</h3>
          <h5 className='p-0 m-0'>Marketing Simulations</h5>
          <p>06/2022 - 03-2024</p>
          <p className='p-0 m-0'>Full-Stack web application which allows users to establish and run a startup entirely virtually</p>
          <a href='https://www.game.plutocratic.in/' style={{ color: '#4A2C2A' }}>Link to Platform</a>
          <p>Credentials: Username: omgoyal2011, Password: Pluto@1234</p>
          <p style={{ color: '#de6d6d' }}>Note: The Application might log you out in-case someone else logs in from another device/tab using the same credentials</p>
          <p>Successfully trained a batch of 40 students resulting in a deeper practical understanding of marketing.</p>

          <hr />

          <h5>CogniBuy AI</h5>
          <p>06/2023 - 05/2024</p>
          <p>A cutting-edge AI customer bot, CogniBuy AI, that mimics real-world customer behavior in a simulated market environment.</p>
          <ul>
            <li>Autonomously Generates Customers: Realistic profiles, behaviors</li>
            <li>Purchase Decisions Based On: Demographics, Psychographics</li>
            <li>Developed in Node.js & MongoDB: Scalable, Flexible</li>
            <li>Market Research Drives Model Accuracy</li>
          </ul>

          <hr />

          <h5>Management Platform</h5>
          <p>12/2023 - 04-2024</p>
          <p>Full-Stack web application, which allows students to learn management concepts in a simulated virtual environment.
            Conceptualized the entire game, including core mechanics, storyline, and user experience.</p>
          <ul>
            <li>Led a team of 4 developers, utilizing ClickUp for efficient project management and tracking.</li>
            <li>Designed the database schema (Mongoose/MongoDB) for optimal performance and scalability.</li>
            <li>Developed critical game modules using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring a smooth and engaging user experience.</li>
            <li>Collaborated with a UI/UX designer freelancer to translate game concepts into visually appealing and user-friendly interfaces.</li>
          </ul>
        </div>

        <div className='col-6 p-0 m-0'>
          <div className='p-2' style={{ border: '2px solid white', borderRadius: '10px', color: '#4A2C2A' }}>
            <h3 className='mb-3' style={{ color: '#2C3E50' }}>Achievements</h3>
            <h5>Babson Build, The Entrepreneurship Program for University Students</h5>
            <p>Selected to Attend</p>

            <h5>Scholarship at Mahindra University, Top-10 in CSE in the batch of 2018-2022</h5>
            <p>2018</p>
          </div>

          <div className='p-2' style={{ border: '2px solid white', borderRadius: '10px', color: '#4A2C2A' }}>
            <h3 className='mb-3' style={{ color: '#2C3E50' }}>Ongoing Company Projects</h3>
            <h5>Sales Simulation</h5>
            <p>The Platform uses ChatGPT in the backend along with our own custom prompt to behave as a client for a sales-representative. The platform is being developed to behave as different customer types, after a thorough research about the various types of customers sales reps have to deal with.</p>
            <p>The Front-End is being developed using React, and the backend is using Node.js along with the GPT API.</p>
          </div>

          <div className='p-2' style={{ border: '2px solid white', borderRadius: '10px', color: '#4A2C2A' }}>
            <h3 className='mb-3' style={{ color: '#2C3E50' }}>Relocation / Work-Mode</h3>
            <h5>Open to Relocate</h5>
            <p>I currently reside in Hyderabad, Telangana, India, and am ready to relocate to any other city for work.</p>

            <h5>Open to Hybrid or On-Site Work</h5>
            <p>I have the necessary infrastructure which can support hybrid-work if the company requires.</p>
          </div>

          <div className='p-2' style={{ border: '2px solid white', borderRadius: '10px', color: '#4A2C2A' }}>
            <h3 className='mb-3' style={{ color: '#2C3E50' }}>Contact Me</h3>
            <div className='d-flex align-items-center p-1'>
              <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
                <img src={phone} style={{ width: '15%', cursor: 'pointer' }} onClick={routeChangePhone} />
                <p>Whatsapp</p>
              </div>
              <div className='h-100 w-100'>
                <img src={linkedin} style={{ width: '16%', cursor: 'pointer' }} onClick={routeChangeLinkedIn} />
                <p>LinkedIn</p>
              </div>
            </div>
            {/* <form className='d-flex flex-column justify-content-between' onSubmit={submitHandler}>
              <label className='me-2'>Name:</label>
              <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} />
              <br />

              <label className='me-4'>Contact:</label>
              <input type='tel' id='contact' name='contact' value={formData.contact} onChange={handleInputChange} />
              <br />

              <label className='me-4'>Note:</label>
              <input type="text" id="note" name="note" value={formData.note} onChange={handleInputChange} />
              <br />

              {error && <p className='m-0 p-0' style={{ color: 'red' }}>{error}</p>}

              <button type='submit' style={{ width: '100px' }} onSubmit={submitHandler}>Submit</button>
            </form> */}

          </div>
        </div>


      </div>
    </div >
  );
}

export default Skillsets;