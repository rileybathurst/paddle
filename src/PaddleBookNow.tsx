import * as React from "react"

interface BookNowTypes {
  peek_base: string
  strapiLocaleName: string
}
export const PaddleBookNow = ({ peek_base, strapiLocaleName }: BookNowTypes) =>
  <a
    href={peek_base}
    rel="noopener noreferrer"
    className="book-now"
    title={`Book now with ${strapiLocaleName} kayak and paddleboard`}
  >
    BOOK NOW
  </a>