// ? I dont think I can plug fragments but using types does enough

import { graphql } from "gatsby"

export const query = graphql`
  fragment testimonialFragment on STRAPI_TESTIMONIAL {
    id
    testimonial
    customer
    sign
    location
  }
`