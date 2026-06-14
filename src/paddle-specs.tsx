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
  [key: string]: | string | number | null
  | {
    [key: string]: string | number | number[];
  };
}

// * These come from a series of specific queries
// Retail
{/* <PaddleSpecs
  crew={data.strapiRetail.crew} // string no unit
  capacity={data.strapiRetail.capacity} // number with " unit after
  length={data.strapiRetail.length} // number with " unit after
  width={data.strapiRetail.width} // number with " unit after
  weight={{
    hullweight: data.strapiRetail.hullweight, // number with " unit after
    riggedweight: data.strapiRetail.riggedweight, // number with " unit after
  }}
  thickness={data.strapiRetail.thickness} // number with " unit after
  inflatable={data.strapiRetail.inflatable ? "Yes" : null} // boolean to string no unit
  demo={data.strapiRetail.demo ? "Yes" : null} // boolean to string no unit
  cost={{
    price: data.strapiRetail.price, // number with $ unit before
    // discount: data.strapiRetail.discount // * currently unused so has to be removed
  }}
/> */}

// Tour
{/* <PaddleSpecs
  sport={data.strapiTour.sport} // string no unit
  fitness={data.strapiTour.fitness} // string no unit
  // ? experience={data.strapiTour.experience}
  price={data.strapiTour.price} // number with $ unit before
/>
{/* * needed as theres a bunch of values that may be passed but none is specific */}
{/* {time.value ? <PaddleSpecs time={time} /> : null} */ }
// time is way more complex it can do a bunch of things

// * moving the section tag to the parent component means you can loop yourself
export const PaddleSpecs = (specs: SpecsTypes, allowNullValues?: boolean) =>
  Object.entries(specs).map(([key, value]) => {

    if (!value) {
      !allowNullValues && console.warn(`Missing value for ${key}`);
      return null;
    }

    /*------------------------------------*/
    // OBRJECTS

    // * time is a special case as it has a nested value
    if (typeof value === "object" && key === "time") {
      return (
        <div key={key} className="spec">
          <h2>{value.value}</h2>
          <h3>{value.entry}</h3>
        </div>
      );
      // }
      // * I cant remeber others yet
    }

    // * currently unused so has to be removed
    /* if (typeof value === "object" && key === "cost" && value.discount) {
      const amount = (Number(value.price) -
        Number(value.discount) * (Number(value.price) / 100)) as number;

      return (
        <React.Fragment key={key}>
          TODO: add color
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
        </React.Fragment>
      );
    } */

    /* // * this should be working for weight */
    // The key kinda seems like its being thrown awaywhich is fine
    if (typeof value === "object") {
      return (
        <React.Fragment key={key}>
          {PaddleSpecs(value as SpecsTypes, allowNullValues)}
        </React.Fragment>
      );
    }

    /*------------------------------------*/
    // SPECIFIC NUMBER
    {
      typeof value === "number" && key === "length" && (
        <div
          key={key}
          className="spec"
        >
          <h2>{key}</h2>
          <PaddleRemainder inches={value} />
        </div>
      )
    }

    return (
      <div
        key={key}
        className="spec"
      >
        <h2>{key}</h2>
        <h3>
          {typeof value === "number" ? (
            <>
              {/* before */}
              {key === "price" && <span className="spec__unit">$</span>}

              {value}

              {/* after */}
              {(key === "hullweight" || key === "riggedweight") && (
                <span className="spec__unit">lbs</span>
              )}
              {(key === "width" || key === "length" || key === "capacity") && (
                <span className="spec__unit">"</span>
              )}
            </>
            // strings never have a unit so just return the value
          ) : value}
        </h3>
      </div>
    );
  });
