import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Trending {
  symbol: string
}

const Trending = () => {
  const [trending, setTrending] = useState<Trending[]>()

  const trendingData = () => {
    axios
      .get(
        'https://cors-anywhere-production-f183.up.railway.app/https://query2.finance.yahoo.com/v1/finance/trending/US'
      )
      .then((res) => setTrending(res.data.finance.result[0].quotes))
  }

  const priceData = async (ticker: string) => {
    axios.get(
      `https://query2.finance.yahoo.com/v6/finance/quote?region=US&lang=en&symbols=${ticker}`
    ).then(response => {
      return response.data
    })
  }

  useEffect(() => {
    trendingData()
  }, [])

  priceData('AAPL').then((res) => console.log(res))

  console.log(trending)

  return (
    <div className="mt-20 flex flex-col items-center justify-center w-screen">
      <div className="mt-5">
        <div className="flex flex-row overflow-auto whitespace-nowrap border w-9/12">
          {trending
            ? trending.map((data: any) => (
                <div className="border-l p-5 text-slate-700 transition-all hover:cursor-pointer hover:bg-slate-50 hover:underline">
                  {data.symbol}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default Trending
