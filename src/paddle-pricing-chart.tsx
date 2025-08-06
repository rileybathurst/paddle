import * as React from "react"
import { Link } from "gatsby"
import type { paddlePricingChartTypes } from "./types/paddle-pricing-chart-types";

const LineBreaker = ({ text }: { text: string; }) => {
  // Split the text by hyphens and spaces, keeping the delimiters
  const parts = text.split(/([- ])/g);

  return (
    <h4 className="title">
      {parts.map((part) =>
        part === '-' || part === ' ' ? <br key={part} /> : part
      )}
    </h4>
  );
}

export const PaddlePricingChart = ({ rentalRates }: paddlePricingChartTypes) => {
  return (
    <div className="pricing-chart">
      <div className="column">
        <h4 className="title">
          <Link to="/rentals">Rental<br />Rates</Link>
        </h4>
        <p>1 Hour</p>
        <p>3 Hours</p>
        <p>Full Day</p>
        <p>Pedal Drive</p>
      </div>

      {rentalRates.nodes.map((rate) => (
        <div key={rate.id} className="column">
          {rate.retail ? (
            <Link to={`/retail/${rate.retail.slug}`}>
              <LineBreaker text={rate.item} />
            </Link>
          )
            : (
              <LineBreaker text={rate.item} />
            )}
          <p>{rate.oneHour ? `($${rate.oneHour})` : null}</p>
          <p>{rate.threeHour ? `($${rate.threeHour})` : null}</p>
          <p>{rate.fullDay ? `($${rate.fullDay})` : null}</p>
          <p>{rate.pedalAdd ? `+ $${rate.pedalAdd}` : null}</p>
        </div>
      ))}
    </div>
  )
}