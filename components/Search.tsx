import React from 'react'
import axios from 'axios'

interface SearchProps {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

const Search = ({ searchTerm, setSearchTerm } : SearchProps) => {

  return <div>Search</div>
}

export default Search
