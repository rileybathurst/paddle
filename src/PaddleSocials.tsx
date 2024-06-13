import * as React from "react"

import FacebookIcon from "./assets/facebook-icon"
import InstagramIcon from "./assets/instagram-icon"
import TripAdvisorIcon from "./assets/tripadvisor-icon"

interface SocialsTypes {
  instagram: string
  facebook: string
  tripadvisor: string
}
export const PaddleSocials = ({ instagram, facebook, tripadvisor }: SocialsTypes) =>
  <div className="social">
    {facebook ?
      <a
        href={facebook}
        target='_blank' rel='noopener noreferrer'
        aria-label='facebook link'
      >
        <FacebookIcon />
      </a>
      : null
    }
    {instagram ?
      <a href={instagram}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='instagram link'
      >
        <InstagramIcon />
      </a>
      : null
    }
    {tripadvisor ?
      <a href={tripadvisor}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='tripadvisor link'
      >
        <TripAdvisorIcon />
      </a>
      : null
    }
  </div>