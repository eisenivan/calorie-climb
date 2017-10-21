import React from 'react'

export default (calories, { resultText, resultHighlightText }) => {
  const dogWalkingCaloriesPerHour = 200
  const dogWalkingMinutes = Math.ceil(parseInt(calories, 10) / (dogWalkingCaloriesPerHour / 60))
  return <p className={ resultText }>Walking your dog burns about 200 calories per hour, so give your pup some love and get out ther for <span className={ resultHighlightText }>an extra { dogWalkingMinutes } minutes</span> you will burn it off.</p>
}
