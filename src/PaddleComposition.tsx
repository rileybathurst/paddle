// TODO: this isnt finished
import * as React from "react"
import { faker } from '@faker-js/faker';

interface CompositionTypes {
  sport?: string;
}
const PaddleComposition = ({ sport }: CompositionTypes) => {
  return (
    <div className="composition">
      {sport}
      {/* <WaterTexture className="texture-1" /> */}
      <img
        src={faker.image.urlPlaceholder()}
        alt={faker.location.city()}
        className="texture-1"
      />
      <img
        src={faker.image.urlPlaceholder()}
        alt={faker.location.city()}
        className="texture-2 img-wrapped"
      />
      {/* <TopThree className="texture-2 img__wrapped" /> */}
      {/* {sport === 'paddleboard' ? <Supper className="paddler" /> : <Kayaker className="paddler" />} */}
      {faker.datatype.boolean() ? <>Supper</> : <>Kayaker</>}
    </div >
  )
}

export default PaddleComposition