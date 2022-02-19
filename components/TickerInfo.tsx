import React from 'react'
import Search from './Search'

interface TickerInfoProps {
  quoteResponse: {
    result: {
      regularMarketPrice: number
    }[]
  }
}

const TickerInfo = ({ priceData }: { priceData: TickerInfoProps }) => {
  return <div><Search />{priceData.quoteResponse.result[0].regularMarketPrice}</div>
}

export default TickerInfo
