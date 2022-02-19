import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'

const Home = () => {
  return (
    <div>
      <div className="grid place-items-center">
        <Search />
      </div>
    </div>
  )
}

export default Home
