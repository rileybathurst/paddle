import * as React from "react"

interface BookNowTypes {
  peek_base: string
  strapiLocaleName: string
  specificName?: string
  specificLink?: string
}
export const PaddleBookNow = ({ peek_base, strapiLocaleName, specificName, specificLink }: BookNowTypes) =>
  <a
    href={specificLink || peek_base}
    rel="noopener noreferrer"
    className="book-now"
    title={`Book now ${specificLink && <> {specificLink} </>} with ${strapiLocaleName} kayak and paddleboard`}
  >
    {specificName && (<>{specificName} <br /></>)}
    BOOK NOW
  </a>