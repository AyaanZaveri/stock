import React from 'react'
import axios from 'axios'

interface SearchProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const autoComplete = () => {
    axios
      .get(
        `https://cors-anywhere-production-f183.up.railway.app/https://query1.finance.yahoo.com/v7/finance/autocomplete?region=US&lang=en&query=${searchTerm}`
      )
      .then((res) => {
        console.log(res.data)
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    autoComplete()
  }

  return <div><input type="text" value={searchTerm} onChange={handleChange} /></div>
}

export default Search
