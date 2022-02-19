import React from 'react'
import Search from './Search'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
interface TickerInfoProps {
  longName: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
}

const TickerInfo = ({ priceData }: { priceData: TickerInfoProps }) => {
  console.log(priceData)

  return (
    <div>
      <Search />
      <div className="flex flex-col items-start">
        <div className="mx-12 my-24 flex flex-col">
          <span className="font-mono text-xl font-normal text-slate-700">
            {priceData.longName}
          </span>
          <div className="inline-flex items-center">
            <span className="mt-2 text-7xl font-bold text-slate-700">
              {priceData.regularMarketPrice}
            </span>
            {priceData.regularMarketChange > 0 ? (
              <FaCaretUp className="h-10 w-10 text-emerald-500" />
            ) : (
              <FaCaretDown className="h-10 w-10 text-red-500" />
            )}
            {priceData.regularMarketChange > 0 ? <span className='text-2xl font-semibold text-emerald-500'>{priceData.regularMarketChange.toFixed(2)} ({priceData.regularMarketChangePercent.toFixed(2)})</span> : <span className='text-2xl font-semibold text-red-500'>{priceData.regularMarketChange.toFixed(2)} ({priceData.regularMarketChangePercent.toFixed(2)})</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TickerInfo
