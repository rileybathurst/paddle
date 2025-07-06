import * as React from "react"
import SVG from 'react-inlinesvg';
import { PaddleBookNow } from "./paddle-book-now"
import { Link } from "gatsby"
import type { paddlePricingChartTypes } from "./types/paddle-pricing-chart-types";

const LineBreaker = ({ text }: { text: string; }) => {
  const regex = /[- ]/g;
  const newStr = text.replace(regex, "<br />$&");
  // console.log(newStr);

  return (
    <h4 dangerouslySetInnerHTML={{ __html: newStr }} />
  );
}

export const PaddlePricingChart = ({ rentalRates, rentalAddons, book, peek_base, strapiLocaleName }: paddlePricingChartTypes) => {
  return (
    <>
      <div className="charts">
        <div className="pricing-chart">
          <div className="row row-header">
            <h2 className="kilimanjaro"><Link to="/rentals">Rental<br />Rates</Link></h2>
            <p>1 Hour</p>
            <p><span>3 Hours</span></p>
            <p><span>Full Day</span></p>
          </div>

          {rentalRates.nodes.map((rate) => (
            <div key={rate.id} className="row">
              <LineBreaker text={rate.item} />
              <p>{rate.oneHour}</p>
              <p>{rate.threeHour}</p>
              <p>{rate.fullDay}</p>
            </div>
          ))}
        </div>

        {rentalAddons.nodes.length > 0 ? (
          <div className="pricing-chart">
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

      {book ? (
        <PaddleBookNow
          peek_base={peek_base}
          strapiLocaleName={strapiLocaleName}
        />
      ) : null}
    </>
  )
}