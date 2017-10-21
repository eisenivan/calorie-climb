import React from 'react'

export default (calories, { resultText, resultHighlightText }) => {
  const laughingCaloriesPerHour = 180
  const laughingMinutes = Math.ceil(parseInt(calories, 10) / (laughingCaloriesPerHour / 60))
  return <p className={ resultText }>Laughing burns { laughingCaloriesPerHour } calories an hour. So you can <span className={ resultHighlightText }>laugh for { laughingMinutes } minutes</span> to burn off the calories.</p>
}
