import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface AutoComplete {
  ResultSet: {
    Result: {
      symbol: string
      name: string
    }[]
  }
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [autoCompleteData, setAutoCompleteData] = useState<AutoComplete>()

  const autoComplete = () => {
    axios
      .get(
        `https://cors-anywhere-production-f183.up.railway.app/https://query2.finance.yahoo.com/v7/finance/autocomplete?region=US&lang=en&query=${encodeURIComponent(
          searchTerm
        )}`
      )
      .then((res) => {
        setAutoCompleteData ? setAutoCompleteData(res.data) : null
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    autoComplete()
  }, [searchTerm])

  const slicedAutoCompleteData = autoCompleteData
    ? autoCompleteData.ResultSet.Result.slice(0, 5)
    : []

  return (
    <div className="flex justify-center">
      <div className="fixed mt-3 w-9/12 md:w-4/12">
        <input
          placeholder="Search..."
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm transition hover:bg-slate-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-100"
        />
        {searchTerm && slicedAutoCompleteData ? (
          <div className="mt-2 grid grid-flow-row overflow-hidden rounded-lg border shadow-sm backdrop-blur-sm">
            {slicedAutoCompleteData.map((data: any) => (
              <div className="inline-flex items-center bg-white bg-opacity-50 pl-3 transition-all hover:bg-blue-50 hover:bg-opacity-50">
                <div className="py-2 px-1">
                  <a href={`/ticker/${data.symbol}`}>
                    <span className="cursor-pointer py-2.5 pr-1.5 font-semibold text-slate-700 hover:underline">
                      {data.name}{' '}
                    </span>
                  </a>
                  <span className="h-min cursor-default rounded-sm px-1.5 text-sm font-normal text-blue-500 shadow-sm ring-1 ring-slate-300 transition-all hover:bg-slate-50 hover:no-underline">
                    {data.symbol}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Search
