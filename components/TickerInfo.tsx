import React from 'react'
import Nav from './Nav'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import TickerSummary from './TickerSummary'
interface TickerInfoProps {
  longName: string
  symbol: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
}

const TickerInfo = ({ priceData }: { priceData: TickerInfoProps }) => {
  console.log(priceData)

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-start">
        <div className="mx-12 my-28 flex flex-col">
          <span className="font-mono text-xl font-normal text-slate-700">
            {priceData.longName ? priceData.longName : priceData.symbol}
          </span>
          <div className="inline-flex items-center">
            <span className="mt-2 text-5xl font-bold text-slate-700 md:text-7xl">
              {priceData.regularMarketPrice}
            </span>
            {priceData.regularMarketChange > 0 ? (
              <FaCaretUp className="h-8 w-8 text-emerald-500 md:h-10 md:w-10" />
            ) : (
              <FaCaretDown className="h-8 w-8 text-red-500 md:h-10 md:w-10" />
            )}
            {priceData.regularMarketChange > 0 ? (
              <span className="text-2xl font-semibold text-emerald-500">
                {priceData.regularMarketChange.toFixed(2)} (
                {priceData.regularMarketChangePercent.toFixed(2)})
              </span>
            ) : (
              <span className="text-sm font-semibold text-red-500 md:text-2xl">
                {priceData.regularMarketChange.toFixed(2)} (
                {priceData.regularMarketChangePercent.toFixed(2)}%)
              </span>
            )}
          </div>
          <TickerSummary priceData={priceData} />
        </div>
      </div>
    </div>
  )
}

export default TickerInfo
