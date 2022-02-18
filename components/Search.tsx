import React, { useEffect } from 'react'
import axios from 'axios'

interface AutoComplete {
  ResultSet: {
    Result: {
      symbol: string
      name: string
    }[]
  }
}

interface SearchProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  autoCompleteData: AutoComplete | undefined
  setAutoCompleteData?: (autoCompleteData: any) => void
}

const Search = ({
  searchTerm,
  setSearchTerm,
  autoCompleteData,
  setAutoCompleteData,
}: SearchProps) => {
  const autoComplete = () => {
    axios
      .get(
        `https://cors-anywhere-production-f183.up.railway.app/https://query1.finance.yahoo.com/v7/finance/autocomplete?region=US&lang=en&query=${searchTerm}`
      )
      .then((res) => {
        setAutoCompleteData ? setAutoCompleteData(res.data) : null
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    autoComplete()
  }

  useEffect(() => {
    autoCompleteData?.ResultSet.Result.map((data: any) => console.log(data))
  }, [searchTerm])

  useEffect(() => {
    console.log(autoCompleteData)
  }, [searchTerm])

  return (
    <div className="mt-3 w-3/12">
      <input
        placeholder="Search..."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-100"
      />
      <div className="mt-3 grid grid-flow-row gap-3">
        {searchTerm && autoCompleteData
          ? autoCompleteData?.ResultSet.Result.map((data: any) => (
              <div className="rounded border p-2">{data.name}</div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Search
