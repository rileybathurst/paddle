// * this is the opening vite page to test functions with

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PaddlePricingChart } from './paddle-pricing-chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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

      {/* testing */}
      <PaddlePricingChart
        rentalRates={{
          nodes: [
            {
                "id": "0bcc4411-43e9-55a4-9a61-313a27198c23",
                "item": "Single Kayak",
                "oneHour": 32,
                "threeHour": 64,
                "fullDay": 96,
                "pedalAdd": 10,
                "branches": [],
                "retail": null
            },
            {
                "id": "dad19f3d-3381-573a-b37d-6c4970e60c61",
                "item": "Double Kayak",
                "oneHour": 48,
                "threeHour": 96,
                "fullDay": 110,
                "pedalAdd": 20,
                "branches": [],
                "retail": null
            },
            {
                "id": "531d03f2-2348-564f-b4e5-d00fc2810f6b",
                "item": "Paddle board",
                "oneHour": 32,
                "threeHour": 64,
                "fullDay": 96,
                "pedalAdd": null,
                "branches": [],
                "retail": null
            },
            {
                "id": "cc6bb238-1c66-56d7-89ae-3cd3d99e5502",
                "item": "Inflatable Paddle Board*",
                "oneHour": null,
                "threeHour": null,
                "fullDay": 96,
                "pedalAdd": null,
                "branches": [
                    {
                        "slug": "tahoe-city"
                    }
                ],
                "retail": {
                    "slug": "breeze-wing",
                    "sport": {
                        "slug": "paddleboard"
                    },
                    "brand": {
                        "slug": "tahe"
                    }
                }
            }
          ]
        }}
        branches={{
          // slug: 'south-tahoe'
          slug: 'tahoe-city'
        }}
      />
    </>
  )
}

export default App
