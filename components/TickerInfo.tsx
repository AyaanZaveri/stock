import React from 'react'
import Search from './Search'

interface TickerInfoProps {
  quoteResponse: {
    result: {
      regularMarketPrice: number
      displayName: string
    }[]
  }
}

const TickerInfo = ({ priceData }: { priceData: TickerInfoProps }) => {
  console.log(priceData)
  return (
    <div>
      <Search />
      <div className="flex flex-col items-start">
        <div className="mx-12 my-24 flex flex-col">
          <span className="text-xl font-normal text-slate-700">
            {priceData.quoteResponse.result[0].displayName}
          </span>
          <span className="text-6xl font-bold text-slate-700">
            {priceData.quoteResponse.result[0].regularMarketPrice}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TickerInfo
