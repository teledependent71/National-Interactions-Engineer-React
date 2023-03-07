import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Interactions Engineer</title>
        <meta property="og:title" content="National Interactions Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
