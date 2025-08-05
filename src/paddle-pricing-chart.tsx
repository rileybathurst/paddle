import * as React from "react"
import { Link } from "gatsby"
import type { paddlePricingChartTypes } from "./types/paddle-pricing-chart-types";

const LineBreaker = ({ text }: { text: string; }) => {
  // Split the text by hyphens and spaces, keeping the delimiters
  const parts = text.split(/([- ])/g);

  return (
    <h4>
      {parts.map((part) =>
        part === '-' || part === ' ' ? <br key={part} /> : part
      )}
    </h4>
  );
}

export const PaddlePricingChart = ({ rentalRates, rentalAddons }: paddlePricingChartTypes) => {
  return (
    <div className="pricing-chart">
      <div className="column">
        <h4 className="title">
          <Link to="/rentals">Rental<br />Rates</Link>
        </h4>
        <p>1 Hour</p>
        <p>3 Hours</p>
        <p>Full Day</p>
      </div>

      {rentalRates.nodes.map((rate) => (
        <div key={rate.id} className="column">
          <LineBreaker text={rate.item} />
          <p>{rate.oneHour}</p>
          <p>{rate.threeHour}</p>
          <p>{rate.fullDay}</p>
        </div>
      ))}

      {rentalAddons && rentalAddons.nodes.length > 0 ? (
        <div className="column">
          {rentalAddons.nodes.map((addon) => (
            <React.Fragment key={addon.id}>
              <p>{addon.name}</p>
              <p>+{addon.single}</p>
              <p>+{addon.double}</p>
              <p>+{addon.sup}</p>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  )
}