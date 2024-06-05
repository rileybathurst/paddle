import * as React from "react"

interface TestimonialsTypes {
  testimonials: TestimonialTypes[];
}

interface TestimonialTypes {
  id: React.Key;
  testimonial: string;
  sign: string;
  customer: string;
  location: string;
}

export const PaddleTestimonials = ({ testimonials }: TestimonialsTypes) =>
  <ul className='testimonials vulture'>
    {testimonials.map((testimonial: TestimonialTypes) => (
      <li key={testimonial.id}>
        <p className='elbrus'><span className='denali font-serif'>&ldquo;</span>{testimonial.testimonial}<span className='denali font-serif'>&rdquo;</span></p>
        <p>{testimonial.sign} {testimonial.customer}</p>
        <p className='kosciuszko'>{testimonial.location}</p>
      </li>
    ))}
  </ul>