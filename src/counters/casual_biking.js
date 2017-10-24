import React from 'react'
import math from 'mathjs'
import { convert, randomConversionUnit, MEASURE_TYPES, MEASURE, unitAsEnglish } from '../convert'

export default (calories, { resultText, resultHighlightText }) => {
  const cyclingCaloriesPerHour = 396
  const cyclingMinutes = Math.ceil(parseInt(calories, 10) / (cyclingCaloriesPerHour / 60))
  const cyclingMiles = Math.round(math.eval((cyclingMinutes / 60) * 12))
  const randomCyclingUnit = randomConversionUnit(MEASURE_TYPES.DISTANCE)
  const randomCyclingQuantity = convert(cyclingMiles, MEASURE.DISTANCE.MILE, randomCyclingUnit)
  const randomCyclingUnitEnglish = unitAsEnglish(randomCyclingQuantity, randomCyclingUnit)

  return <p className={ resultText }>Biking causally, say 12mph or so, will burn about 396 calories in an hour. So if you <span className={ resultHighlightText }>bike for an extra { cyclingMinutes } minutes, or about { randomCyclingQuantity } { randomCyclingUnitEnglish }</span> you will burn it off.</p>
}
