import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [autoCompleteData, setAutoCompleteData] = useState()

  return (
    <div>
      <div className="grid place-items-center">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          autoCompleteData={autoCompleteData}
          setAutoCompleteData={setAutoCompleteData}
        />
      </div>
    </div>
  )
}

export default Home
