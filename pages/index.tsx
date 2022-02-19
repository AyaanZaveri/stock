import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
      <div className="grid place-items-center">
        <Search />
        <Trending />
      </div>
    </div>
  )
}

export default Home
