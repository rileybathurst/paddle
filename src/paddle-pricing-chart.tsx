import * as React from "react"
import { Link } from "gatsby"
import type { paddlePricingChartTypes } from "./types/paddle-pricing-chart-types";

const LineBreaker = ({ text }: { text: string; }) => {
  const splitIndex = (() => {
    const spaceIndexes = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") spaceIndexes.push(i);
    }
    if (spaceIndexes.length === 0) return -1;
    let minDiff = Infinity;
    let bestIndex = spaceIndexes[0];
    for (const idx of spaceIndexes) {
      const left = text.slice(0, idx).length;
      const right = text.slice(idx + 1).length;
      const diff = Math.abs(left - right);
      if (diff < minDiff) {
        minDiff = diff;
        bestIndex = idx;
      }
    }
    return bestIndex;
  })();

  const firstPart = text.slice(0, splitIndex);
  const secondPart = text.slice(splitIndex + 1);

  return (
    <h4 className="title">
      {firstPart}
      <br />
      {secondPart}
    </h4>
  );
}

export const PaddlePricingChart = ({ rentalRates, branch }: paddlePricingChartTypes) => {

  console.log('paddle pricing chart testing');
  console.log('🦄');
  console.log(rentalRates);
  console.log(branch);
  console.log('🦖');

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
          {rate.retail && rate.branch.slug == branch.slug ? (
            <Link to={`/retail/${rate.retail.sport.slug}/${rate.retail.brand.slug}/${rate.retail.slug}`}>
              <LineBreaker text={rate.item} />
            </Link>
          )
            : (
              <LineBreaker text={rate.item} />
            )}
          <p>{rate.oneHour ? `$${rate.oneHour}` : null}</p>
          <p>{rate.threeHour ? `$${rate.threeHour}` : null}</p>
          <p>{rate.fullDay ? `$${rate.fullDay}` : null}</p>
          <p>{rate.pedalAdd ? `+ $${rate.pedalAdd}` : null}</p>
        </div>
      ))}
    </div>
  )
}