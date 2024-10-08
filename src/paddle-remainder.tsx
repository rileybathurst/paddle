// name this better
import * as React from "react"

type PaddleRemainderTypes = {
  inches: number;
}
const PaddleRemainder = ({ inches }: PaddleRemainderTypes) => {

  const feet = Math.floor(inches / 12);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  const leftover = inches % 12;

  return (
    <>
      {feet}'&thinsp;{leftover !== 0 ? `${leftover}"` : null}
    </>
  )
}

export default PaddleRemainder
