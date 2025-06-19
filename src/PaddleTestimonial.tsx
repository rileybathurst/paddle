import * as React from "react"
import { TestimonialTypes } from "./types/testimonial-types"

export function PaddleTestimonial({ id, testimonial, customer, sign, location }: TestimonialTypes) {
  return (
        <li key={id}>
          <p className='elbrus'>
            <span className='denali font-serif'>&ldquo;</span>
            {testimonial}
            <span className='denali font-serif'>&rdquo;</span>
          </p>
          <p>{sign} {customer}</p>
          <p className='kosciuszko'>{location}</p>
        </li>
  )
}