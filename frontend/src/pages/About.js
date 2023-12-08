import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About-us-TrendHub"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/aboutus.jpg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">

        <p className="text-justify mt-2">
          Visit my Linkedin to know more about me
          <br></br>
          <a href='https://www.linkedin.com/in/rishu2701/' target='_blank' rel='noopener noreferrer'>
            Ankit Singh
        </a>
          
        </p>
      </div>
    </div>
  </Layout>
  )
};

Layout.defaultProps = {
  title:"TrendHub-Rio",
  description:"Mern Stack Project",
  keywords:"React, MERN, Node, MongDb",
  author:"Ankit Singh"
}


export default About