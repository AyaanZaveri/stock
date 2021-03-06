import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className='flex flex-col pb-12'>
      <Nav />
      <Trending />
    </div>
  )
}

export default Home
