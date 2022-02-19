import React from 'react'

interface TickerSummaryProps {
  longName: string
  symbol: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
  regularMarketPreviousClose: number
  regularMarketOpen: number
  bid: number
  ask: number
  regularMarketDayRange: string
  fiftyTwoWeekRange: string
  regularMarketVolume: number
  marketCap: number
  regularMarketTime: string
  currency: string
  epsTrailingTwelveMonths: string
  marketState: string
}

const TickerSummary = (priceData: any) => {
  priceData = priceData.priceData
  return (
    <div>
      <div className="mt-3 rounded-lg border text-slate-700">
        <div className="border-b p-3">
          Previous Close:{' '}
          <span className="font-bold">
            {priceData.regularMarketPreviousClose}
          </span>
        </div>
        <div className="border-b p-3">
          Open: <span className="font-bold">{priceData.regularMarketOpen}</span>
        </div>
        <div className="border-b p-3">
          Bid: <span className="font-bold">{priceData.bid}</span>
        </div>
        <div className="border-b p-3">
          Ask: <span className="font-bold">{priceData.ask}</span>
        </div>
        <div className="border-b p-3">
          Day Range:{' '}
          <span className="font-bold">{priceData.regularMarketDayRange}</span>
        </div>
        <div className="border-b p-3">
          52 Week Range:{' '}
          <span className="font-bold">{priceData.fiftyTwoWeekRange}</span>
        </div>
        <div className="border-b p-3">
          Volume:{' '}
          <span className="font-bold">{priceData.regularMarketVolume}</span>
        </div>
        <div className="border-b p-3">
          Market Cap: <span className="font-bold">{priceData.marketCap}</span>
        </div>
        <div className="border-b p-3">
          Time: <span className="font-bold">{priceData.regularMarketTime}</span>
        </div>
        <div className="border-b p-3">
          Currency: <span className="font-bold">{priceData.currency}</span>
        </div>
        <div className="border-b p-3">
          EPS (TTM):{' '}
          <span className="font-bold">{priceData.epsTrailingTwelveMonths}</span>
        </div>
        <div className="border-b p-3">
          Market State:{' '}
          {
            <span
              className={`font-bold ${
                priceData.marketState == 'CLOSED'
                  ? 'text-red-500'
                  : 'text-emerald-500'
              }`}
            >
              {priceData.marketState}
            </span>
          }
        </div>
      </div>
    </div>
  )
}

export default TickerSummary
