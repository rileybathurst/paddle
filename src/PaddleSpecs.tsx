import * as React from "react"
import PaddleRemainder from "./paddle-remainder.tsx"

interface SpecsTypes {
  [key: string]: string | number | {
    [key: string]: string | number[];
  };
}
// * moving the section tag to the parent component means you can loop yourself
const PaddleSpecs = (specs: SpecsTypes) => {
  return (
    // <section className='specs'>
    Object.entries(specs).map(([key, value]) => {

      // console.log(key, value);

      if (!value) {
        return null;
      }

      /* I didnt know you could call yourself like this */
      /* I guess its not a infinite loop as its not calling an object */
      if (key === 'weight' && typeof value === 'object') {
        return (
          <PaddleSpecs {...value} />
        );
      }

      if (key === 'cost' && typeof value === 'object' && value.discount) {

        const amount = Number(value.price) - (Number(value.discount) * (Number(value.price) / 100)) as number;

        return (
          <>
            {/* // TODO: add color */}
            <div className="spec">
              <h2><del>Original Price</del></h2>
              <h3>
                <del>
                  ${value.price}
                </del>
              </h3>
            </div>
            <div className="spec mullen">
              <h2>Sale Price</h2>
              {value.discount}% off
              <h3>${amount}</h3>
            </div>
          </>
        );
      }

      if (typeof value === 'object') {
        return (
          <PaddleSpecs {...value} />
        );
      }

      return (
        <div key={key} className="spec">
          <h2>{key}</h2>
          <h3>
            {key === 'price' ? <span className="spec__unit">$</span> : null}
            {key === 'length' && typeof value === 'number' ? <PaddleRemainder inches={value} /> : value}
            {key === 'hullweight' || key === 'riggedweight' ? <span className="spec__unit">lbs</span> : null}
            {key === 'width' || key === 'length' || key === 'capacity' ? <span className="spec__unit">"</span> : null}
          </h3>
        </div>
      )
    })
    // </section>
  )
}

export default PaddleSpecs;