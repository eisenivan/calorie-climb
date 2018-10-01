
// According to Harvard Health Publications, typing on a computer burns 41 calories per
// half hour for a 125-pound person. A 155-pound person burns 51 calories typing for 30
// minutes and a 185-pound person burns 61 calories doing the same

const BASE_WEIGHT = 125
const BASE_CALORIES = 1.36

const calcTypingMinutues = (weight, calories) => {
  try {
    const percent = BASE_WEIGHT / weight
    return calories / (percent * BASE_CALORIES)
  } catch (e) {
    return false
  }
}

const hoursMinutes = (minutes) => {
  if (minutes >= 61) {
    const hours = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    return `${hours} hours and ${mins} minutes`
  }

  return `${minutes} minutes`
}

export default ({ calories, weight, resultText, resultHighlightText }) => {
  const typingMinutes = calcTypingMinutues(weight, calories)
  return <p className={ resultText }>Based on your weight, you'll need to <span className={ resultHighlightText }>type for { hoursMinutes(typingMinutes) } </span> to burn off those calories.</p>
}
