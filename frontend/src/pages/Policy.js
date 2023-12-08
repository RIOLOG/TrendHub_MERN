import React from 'react'
import Layout from '../components/Layout/Layout'



const Policy = () => {
  return (
    <Layout title={"Policy-TrendHub"}>
        <h1>POLICY</h1>
    </Layout>
  )
}


Layout.defaultProps = {
  title:"TrendHub-Rio",
  description:"Mern Stack Project",
  keywords:"React, MERN, Node, MongDb",
  author:"Ankit Singh"
}


export default Policy