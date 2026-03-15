import * as React from "react";
import PaddleRemainder from "./paddle-remainder";

/* * this is slightly complex to allow for time
const specs: SpecsTypes = {
  name: "turbo",        // ✅ string
  power: 500,           // ✅ number
  dimensions: {         // ✅ nested object
    width: 100,         // ✅ number
    unit: "px",         // ✅ string
  }
} */
// * number[] is for cost when passing both price and discount
// or 
type SpecsTypes = {
  [key: string]: | string | number
  | {
    [key: string]: string | number | number[];
  };
}
// * moving the section tag to the parent component means you can loop yourself
export const PaddleSpecs = (specs: SpecsTypes) =>
  Object.entries(specs).map(([key, value]) => {

    if (!value) {
      console.warn(`Missing value for ${key}`);
      return null;
    }

    // * time is a special case as it has a nested value
    if (key === "time" && typeof value === "object") {
      return (
        <div key={key} className="spec">
          <h2>{value.value}</h2>
          <h3>{value.entry}</h3>
        </div>
      );
      // }
      // * I cant remeber others yet
    }

    if (key === "cost" && typeof value === "object" && value.discount) {
      const amount = (Number(value.price) -
        Number(value.discount) * (Number(value.price) / 100)) as number;

      return (
        <>
          {/* // TODO: add color */}
          <div className="spec">
            <h2>
              <del>Original Price</del>
            </h2>
            <h3>
              <del>${value.price}</del>
            </h3>
          </div>
          <div className="spec">
            <h2>Sale Price</h2>
            {value.discount}% off
            <h3>${amount}</h3>
          </div>
        </>
      );
    }

    /* // * this should be working for weight */
    // The key kinda seems like its being thrown awaywhich is fine
    if (typeof value === "object") {
      return <PaddleSpecs {...value} />;
    }

    return (
      <div key={key} className="spec">
        <h2>{key}</h2>
        <h3>
          {key === "price" ? <span className="spec__unit">$</span> : null}
          {key === "length" && typeof value === "number" ? (
            <PaddleRemainder inches={value} />
          ) : (
            value
          )}
          {key === "hullweight" || key === "riggedweight" ? (
            <span className="spec__unit">lbs</span>
          ) : null}
          {key === "width" || key === "length" || key === "capacity" ? (
            <span className="spec__unit">"</span>
          ) : null}
        </h3>
      </div>
    );
  });
// </section>
