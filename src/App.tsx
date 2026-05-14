// * this is the opening vite page to test functions with

import { useState } from 'react'
import { faker } from '@faker-js/faker'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PaddlePricingChart } from './paddle-pricing-chart'
import { PaddleCompare } from './paddle-compare'

function generateRentalRates() {
  const items = [
    'Single Kayak',
    'Double Kayak',
    'Triple Kayak',
    'Paddle board',
    'Inflatable Paddle Board',
    'Canoe',
    'Jet Ski',
    'Sailboat'
  ]

  const branches = ['tahoe-city', 'south-tahoe', 'north-shore', 'west-shore']
  const brands = ['tahe', 'key-west', 'yamaha', 'sea-doo']
  const sports = ['paddleboard', 'skiing', 'jetski', 'sailing']
  const retail_slugs = ['breeze-wing', 'water-sports', 'adventure-gear']

  return {
    nodes: Array.from({ length: faker.number.int({ min: 4, max: 8 }) }, () => {
      const item = faker.helpers.arrayElement(items)
      const hasRetail = faker.datatype.boolean(0.3)
      const hasBranches = faker.datatype.boolean(0.4)

      return {
        id: faker.string.uuid(),
        item: item,
        oneHour: faker.datatype.boolean(0.7) ? faker.number.int({ min: 20, max: 80 }) : null,
        threeHour: faker.datatype.boolean(0.7) ? faker.number.int({ min: 50, max: 150 }) : null,
        fullDay: faker.number.int({ min: 80, max: 200 }),
        pedalAdd: faker.datatype.boolean(0.5) ? faker.number.int({ min: 5, max: 30 }) : null,
        branches: hasBranches
          ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            slug: faker.helpers.arrayElement(branches)
          }))
          : [],
        retail: hasRetail
          ? {
            slug: faker.helpers.arrayElement(retail_slugs),
            sport: {
              slug: faker.helpers.arrayElement(sports)
            },
            brand: {
              slug: faker.helpers.arrayElement(brands)
            }
          }
          : null
      }
    })
  }
}

function generateTours() {
  const tourNames = [
    'Sunrise Paddle',
    'Scenic Lake Tour',
    'Island Adventure',
    'Sunset Kayak',
    'Wildlife Watching',
    'Speed Challenge',
    'Beginner\'s Paradise',
    'Hidden Coves Explorer'
  ]

  const sports = ['Paddleboarding', 'Kayaking', 'Canoeing', 'Windsurfing', 'Jet Skiing']
  const timeframes = ['Morning', 'Afternoon', 'Evening', 'Sunrise', 'Sunset']
  const fitness = ['Easy', 'Moderate', 'Hard', 'Extreme']
  const locations = ['Lake Tahoe', 'South Shore', 'North Shore', 'Emerald Bay', 'Zephyr Cove']

  const generateTimeString = (hour: number, minute: number = 0): string => {
    const period = hour < 12 ? 'AM' : 'PM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minute === 0 ? '00' : minute} ${period}`
  }

  return Array.from({ length: faker.number.int({ min: 3, max: 6 }) }, (_, index) => {
    const duration = faker.helpers.arrayElement([60, 120, 180, 240])
    const startHour = faker.number.int({ min: 6, max: 17 })
    const endHour = startHour + Math.floor(duration / 60)

    return {
      id: index + 1,
      name: faker.helpers.arrayElement(tourNames),
      slug: faker.helpers.slugify(faker.company.catchPhrase()).toLowerCase().slice(0, 20),
      sport: faker.helpers.arrayElement(sports),
      duration: duration,
      timeframe: faker.helpers.arrayElement(timeframes),
      start: generateTimeString(startHour),
      finish: generateTimeString(endHour),
      fitness: faker.helpers.arrayElement(fitness),
      location: faker.helpers.arrayElement(locations),
      excerpt: faker.lorem.sentence(),
      minimum: faker.number.int({ min: 1, max: 4 }),
      price: faker.number.int({ min: 50, max: 300 }),
      peek: faker.string.numeric(6),
      ogimage: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained" as const,
              placeholder: { fallback: "" },
              images: { sources: [], fallback: { src: faker.image.url(), srcSet: "", sizes: "" } },
              width: 1200,
              height: 630
            }
          }
        },
        alternativeText: `${faker.helpers.arrayElement(tourNames)} tour image`
      } as any
    }
  })
}

function App() {
  const [count, setCount] = useState(0)
  const rentalRates = generateRentalRates()
  const tours = generateTours()

  return (
    <>
      <div>
        <a href="https://vitejs.dev"
          target="_blank"
          rel='noopener noreferrer'
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev"
          target="_blank"
          rel='noopener noreferrer'
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <PaddlePricingChart
        rentalRates={rentalRates}
        branches={{
          // slug: 'south-tahoe'
          slug: 'tahoe-city'
        }}
      />

      <PaddleCompare
        peek_base="123"
        strapiBranchName="south-tahoe"
        tours={tours}
        breadcrumb="/Tours"
      />
    </>
  )
}

export default App
