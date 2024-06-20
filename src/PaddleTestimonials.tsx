import * as React from "react"

interface TestimonialsTypes {
  nodes: {
    id: string;
    testimonial: string;
    sign: string;
    customer: string;
    location: string;
  }[];
}
export function PaddleTestimonials({ nodes }: TestimonialsTypes) {
  console.log(nodes)
  console.log('🦄')
  return (
    <ul className='testimonials condor'>
      <li>test</li>
      {/* {nodes.map((testimonial) => (
      <li key={testimonial.id}>
        <p className='elbrus'><span className='denali font-serif'>&ldquo;</span>{testimonial.testimonial}<span className='denali font-serif'>&rdquo;</span></p>
        <p>{testimonial.sign} {testimonial.customer}</p>
        <p className='kosciuszko'>{testimonial.location}</p>
      </li>
    ))} */}
    </ul>
  )
}