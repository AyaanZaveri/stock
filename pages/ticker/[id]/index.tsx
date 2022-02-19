import React from 'react'
import axios from 'axios'
import TickerInfo from '../../../components/TickerInfo'

const TickerIndex = ({ priceData }: { priceData: any }) => {
  console.log(priceData.quoteResponse.result[0].regualrMarketPrice)

  return <TickerInfo priceData={priceData} />
}

export const getServerSideProps = async (context: any) => {
  const { data: priceData } = await axios.get(
    `https://query2.finance.yahoo.com/v6/finance/quote?region=US&lang=en&symbols=${context.params.id}`
  )

  return {
    props: {
      priceData,
    },
  }
}

export default TickerIndex
