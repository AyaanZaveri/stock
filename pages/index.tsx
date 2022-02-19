import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
        <Search />
        <Trending />
    </div>
  )
}

export default Home
