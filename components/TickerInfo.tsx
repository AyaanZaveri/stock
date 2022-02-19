import React from 'react'
import Search from './Search'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
interface TickerInfoProps {
  longName: string
  regularMarketPrice: number
  regularMarketChange: number
}

const TickerInfo = ({ priceData }: { priceData: TickerInfoProps }) => {
  console.log(priceData)

  const calcChange = () => {
    return priceData.regularMarketChange > 0
      ? 'text-emerald-500'
      : 'text-rose-500'
  }

  return (
    <div>
      <Search />
      <div className="flex flex-col items-start">
        <div className="mx-12 my-24 flex flex-col md:text-left">
          <span className="font-mono text-xl font-normal text-slate-700">
            {priceData.longName}
          </span>
          <span className="mt-2 text-6xl font-bold text-slate-700">
            {priceData.regularMarketPrice}
          </span>
          {priceData.regularMarketChange > 0 ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>
    </div>
  )
}

export default TickerInfo
