import React, { useEffect, useState } from "react";
import { Link } from "gatsby"
import type { paddlePricingChartTypes } from "./types/paddle-pricing-chart-types";

// TODO: this needs love on inflatable paddleboard its too long
const LineBreaker = ({ text }: { text: string; }) => {
  text = text.trim();

  // * dont break a single word, it returns the word twice on two lines, which is not what we want
  if (!text.includes(" ")) {
    return <h4 className="title">{text}</h4>;
  }

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

export const PaddlePricingChart = ({ rentalRates, branches, link }: paddlePricingChartTypes) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [pricingChartStyles, setPricingChartStyles] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    setPricingChartStyles(`.pricing-chart > *:nth-child(${rentalRates.nodes.length}n+1){
        border-bottom: none;
        // background: hotpink;
      }
      .pricing-chart > :nth-last-child(-n + ${rentalRates.nodes.length}) {
        border-inline-end: none;
        // background: lightblue;
      }`);
  }, [hasMounted, rentalRates.nodes.length]);

  // console.log(branches);

  /* console.log(rentalRates.nodes.map(rate => rate.branches?.map(
    branch => branch.slug
  ).flat().some(slug => slug === branches?.slug) && console.log("found a match"))); */

  const allOneHourAreNull = rentalRates.nodes.every((rate) => rate.oneHour === null);
  // console.log("all oneHour are null:", allOneHourAreNull);

  const allThreeHourAreNull = rentalRates.nodes.every((rate) => rate.threeHour === null);
  // console.log("all threeHour are null:", allThreeHourAreNull);

  const allFullDayAreNull = rentalRates.nodes.every((rate) => rate.fullDay === null);
  // console.log("all fullDay are null:", allFullDayAreNull);

  let numberOfRows = 1
  if (!allOneHourAreNull) ++numberOfRows;
  if (!allThreeHourAreNull) ++numberOfRows;
  if (!allFullDayAreNull) ++numberOfRows;
  console.log("🦄 number of rows:", numberOfRows);

  return (
    <div
      className="pricing-chart"
      style={{
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
      }}
    >
      {hasMounted && pricingChartStyles ? <style>{pricingChartStyles}</style> : null}
      <h4 className="title">
        {link ? (
          <Link to={link}>Rental<br />Rates</Link>
        ) : (
          "Rental Rates"
        )}
      </h4>
      {allOneHourAreNull ? null : <p>1 Hour</p>}
      {allThreeHourAreNull ? null : <p>3 Hours</p>}
      {allFullDayAreNull ? null : (allOneHourAreNull && allThreeHourAreNull) ? <p>Flate Rate</p> : <p>Full Day</p>}
      {/* // * removed for now but maybe i'll need it back <p>Pedal Drive</p> */}

      {
        rentalRates.nodes.map((rate) => (
          <>
            {
              rate.retail && rate.branches?.flat().some(branch => branch.slug === branches?.slug) ? (
                <Link to={`/retail/${rate.retail.sport.slug}/${rate.retail.brand.slug}/${rate.retail.slug}`}>
                  <LineBreaker text={rate.item} />
                </Link>
              ) : (
                <LineBreaker text={rate.item} />
              )
            }
            {allOneHourAreNull ? null : <p>{rate.oneHour ? `$${rate.oneHour}` : null}</p>}
            {allThreeHourAreNull ? null : <p>{rate.threeHour ? `$${rate.threeHour}` : null}</p>}
            {allFullDayAreNull ? null : <p>{rate.fullDay ? `$${rate.fullDay}` : null}</p>}
          </>
        ))
      }
    </div >
  )
}