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

  useEffect(() => {
    trendingData()
  }, [])

  console.log(trending)

  return (
    <div className="ml-12 mt-20">
      <h1 className="text-4xl font-bold text-slate-700">Trending</h1>
      <div className="mt-5">
        <table className="flex table-auto flex-col text-left border w-8/12 rounded-lg">
          <thead>
            <tr>
              <th className="text-slate-700 text-lg p-3">Symbol</th>
            </tr>
          </thead>
          {trending
            ? trending.map((data: any) => (
                <tbody className="w-full border-t bg-slate-50 p-3 text-slate-700">
                  <tr>
                    <td>{data.symbol}</td>
                  </tr>
                </tbody>
              ))
            : null}
        </table>
      </div>
    </div>
  )
}

export default Trending
