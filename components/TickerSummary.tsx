import React from 'react'

interface TickerSummary {
  longName: string
  symbol: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
}

const TickerSummary = ({ priceData }: { priceData: TickerSummary }) => {
  return <div></div>
}

export default TickerSummary
