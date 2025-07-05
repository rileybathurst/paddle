import * as React from "react"

type PaddleInchesRemainderTypes = {
  inches: number;
}
export const PaddleInchesRemainder = ({ inches }: PaddleInchesRemainderTypes) => {

  const feet = Math.floor(inches / 12);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  const leftover = inches % 12;

  return (
    <>
      {feet}'&thinsp;{leftover !== 0 ? `${leftover}"` : null}
    </>
  )
}
