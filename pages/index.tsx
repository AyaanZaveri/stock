import React, { useState } from 'react'
import Search from '../components/Search'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <div><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
  )
}

export default Home