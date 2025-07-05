import * as React from "react";
import { PaddleTestimonial } from "./paddle-testimonial";
import { type TestimonialTypes } from "./types/paddle-testimonial-types";

interface TestimonialsTypes {
  nodes: TestimonialTypes[];
}
export const PaddleTestimonials = ({ nodes }: TestimonialsTypes) => {
  return (
    <ul className="testimonials condor">
      {nodes.map((testimonial) => (
        <PaddleTestimonial key={testimonial.id} {...testimonial} />
      ))}
    </ul>
  );
};
