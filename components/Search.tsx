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
  }

  const getAutoCompletePrices = (symbol: string) => {
    axios
      .get(
        `https://cors-anywhere-production-f183.up.railway.app/https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}&fields=name,price,symbol,marketCap,volume,avgTotalVolume,week52High,week52Low,dayLow,dayHigh,ytdChange`
      )
      .then((res) => {
        console.log(res.data)
      })
  }

  // make axios return the response to the function
  // const getAutoCompletePrices = (symbol: string) => {

  useEffect(() => {
    console.log(getAutoCompletePrices('AAPL'))
  }, [])

  useEffect(() => {
    autoComplete()
  }, [searchTerm])

  const slicedAutoCompleteData = autoCompleteData
    ? autoCompleteData.ResultSet.Result.slice(0, 5)
    : []

  return (
    <div className="mt-3 w-9/12 md:w-3/12">
      <input
        placeholder="Search..."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm transition hover:bg-slate-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-100"
      />
      {searchTerm && slicedAutoCompleteData ? (
        <div className="mt-2 grid grid-flow-row overflow-hidden rounded-lg border shadow-sm">
          {slicedAutoCompleteData.map((data: any) => (
            <div className="inline-flex items-center pl-3">
              <div className="py-2 px-2">
                <span className="cursor-pointer py-2.5 pr-2 font-semibold text-slate-700 hover:underline">
                  {data.name}{' '}
                </span>
                <span className="h-min cursor-default rounded-sm px-1.5 text-sm font-normal text-blue-500 shadow-sm ring-1 ring-slate-300 transition-all hover:bg-slate-50 hover:no-underline">
                  {data.symbol}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Search
