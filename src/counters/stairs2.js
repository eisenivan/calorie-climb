import React from 'react'

export default (calories, { resultText, resultHighlightText }) => {
  const caloriesPerStep = 0.17 + 0.05
  const caloriesPerFlight = () => caloriesPerStep * 12
  const flightsOfStairs = (parseInt(calories, 10) / caloriesPerFlight()).toFixed(1)
  const pluralized = (flightsOfStairs === 1) ? 'flight' : 'flights'
  const individualSteps = Math.ceil(parseInt(calories, 10) / caloriesPerStep) / 2
  const flights = pluralized ? 'flights' : 'flight'
  const steps = pluralized ? 'steps' : 'step'

  return <p className={ resultText }>To make this meal calorie neutral you would need to walk up and down <span className={ resultHighlightText }>{ flightsOfStairs } { flights } of stairs.</span> That is up and down <span className={ resultHighlightText }>{ individualSteps } { steps }.</span> Better get walking.</p>
}
