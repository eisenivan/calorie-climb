import stairs1 from './stairs1'
import stairs2 from './stairs2'
import laughing from './laughing'
import casualBiking from './casual_biking'
import dogWalking from './dog_walking'
import typing from './typing'

const stdAnswers = [
  stairs1,
  stairs2,
]

const addAnswers = [
  laughing,
  casualBiking,
  dogWalking,
  typing,
]

const ADD_RESULTS = 2

function getRandomIndexes (arr, cnt) {
  let randomArr = []
  const arrCopy = arr.slice()
  let i
  let randomNum
  for (i = 0; i < arrCopy.length; i++) {
    randomNum = Math.floor(arrCopy.length * Math.random())
    randomArr = randomArr.concat(arrCopy.splice(randomNum, 1))
  }
  return randomArr
}

export default (calories, weight, { resultText, resultHighlightText }) => {
  const results = [
    ...stdAnswers,
    ...getRandomIndexes(addAnswers, ADD_RESULTS)
  ]
  const resultJsx = []
  results.forEach(counterFn => {
    resultJsx.push(counterFn({ calories, weight, resultText, resultHighlightText }))
  })

  return resultJsx
}
