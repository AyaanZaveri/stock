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
      <div className='mt-3'>
        {trending
          ? trending.map((data: any) => (
              <table className="table-auto text-left">
                <thead>
                  <tr>
                    <th>Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.symbol}</td>
                  </tr>
                </tbody>
              </table>
            ))
          : null}
      </div>
    </div>
  )
}

export default Trending
