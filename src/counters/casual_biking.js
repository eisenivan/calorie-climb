import React from 'react'
import math from 'mathjs'

export default (calories, { resultText, resultHighlightText }) => {
  const cyclingCaloriesPerHour = 396
  const cyclingMinutes = Math.ceil(parseInt(calories, 10) / (cyclingCaloriesPerHour / 60))
  const cyclingMiles = Math.round(math.eval((cyclingMinutes / 60) * 12))
  return <p className={ resultText }>Biking causally, say 12mph or so, will burn about 396 calories in an hour. So if you <span className={ resultHighlightText }>bike for an extra { cyclingMinutes } minutes, or about { cyclingMiles } miles</span> you will burn it off.</p>
}

