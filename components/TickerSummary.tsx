import React from 'react'

const TickerSummary = (priceData: any) => {
  priceData = priceData.priceData

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <div>
      <div className="mt-5 rounded-lg border bg-white bg-opacity-25 text-slate-700 backdrop-blur">
        <div className="border-b p-3">
          Previous Close:{' '}
          <span className="font-bold">
            {numberWithCommas(priceData.regularMarketPreviousClose)}
          </span>
        </div>
        <div className="border-b p-3">
          Open:{' '}
          <span className="font-bold">
            {priceData.regularMarketOpen ? numberWithCommas(priceData.regularMarketOpen) : "Unknown"}
          </span>
        </div>
        <div className="border-b p-3">
          Bid:{' '}
          <span className="font-bold">
            {priceData.bid ? numberWithCommas(priceData.bid) : 'Unknown'}
          </span>
        </div>
        <div className="border-b p-3">
          Ask:{' '}
          <span className="font-bold">{priceData.ask ? numberWithCommas(priceData.ask) : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          Day Range:{' '}
          <span className="font-bold">{priceData.regularMarketDayRange? priceData.regularMarketDayRange : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          52 Week Range:{' '}
          <span className="font-bold">{priceData.fiftyTwoWeekRange ? priceData.fiftyTwoWeekRange : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          Volume:{' '}
          <span className="font-bold">{priceData.regularMarketVolume ? priceData.regularMarketVolume : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          Market Cap: <span className="font-bold">{priceData.marketCap ? priceData.marketCap : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          Market Time:{' '}
          <span className="font-bold">{priceData.regularMarketTime ? priceData.regularMarketTime : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          Currency: <span className="font-bold">{priceData.currency?priceData.currency : "Unknown"}</span>
        </div>
        <div className="border-b p-3">
          EPS (TTM):{' '}
          <span className="font-bold">{priceData.epsTrailingTwelveMonths ?priceData.epsTrailingTwelveMonths : "Unknown"}</span>
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
