import React from 'react'

interface TickerSummary {
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

const TickerSummary = ({ priceData }: { priceData: TickerSummary }) => {
  return (
    <div>
      <div className="border-b p-3">
        Previous Close: {priceData.regularMarketPreviousClose}
      </div>
      <div className="border-b p-3">Open: {priceData.regularMarketOpen}</div>
      <div className="border-b p-3">Bid: {priceData.bid}</div>
      <div className="border-b p-3">Ask: {priceData.ask}</div>
      <div className="border-b p-3">
        Day Range: {priceData.regularMarketDayRange}
      </div>
      <div className="border-b p-3">
        52 Week Range: {priceData.fiftyTwoWeekRange}
      </div>
      <div className="border-b p-3">
        Volume: {priceData.regularMarketVolume}
      </div>
      <div className="border-b p-3">Market Cap: {priceData.marketCap}</div>
      <div className="border-b p-3">Time: {priceData.regularMarketTime}</div>
      <div className="border-b p-3">Currency: {priceData.currency}</div>
      <div className="border-b p-3">
        EPS (TTM): {priceData.epsTrailingTwelveMonths}
      </div>
      <div className="border-b p-3">Market State: {priceData.marketState}</div>
    </div>
  )
}

export default TickerSummary
