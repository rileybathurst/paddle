import * as React from "react"

interface ButtonTypes {
  peek_base: string
  strapiLocaleName: string
}
export const Button = ({ peek_base, strapiLocaleName }: ButtonTypes) =>
  <a
    href={peek_base}
    rel="noopener noreferrer"
    className="book-now"
    title={`Book now with ${strapiLocaleName} kayak and paddleboard`}
  >
    BOOK NOW
  </a>