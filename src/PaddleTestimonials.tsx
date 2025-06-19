import * as React from "react"
import { PaddleTestimonial } from "./PaddleTestimonial"
import { type TestimonialTypes } from "./types/testimonial-types"

interface TestimonialsTypes {
  nodes: TestimonialTypes[];
}
export function PaddleTestimonials({ nodes }: TestimonialsTypes) {
  return (
    <ul className='testimonials condor'>
      {nodes.map((testimonial) => (
        <PaddleTestimonial key={testimonial.id} {...testimonial} />
      ))}
    </ul>
  )
}