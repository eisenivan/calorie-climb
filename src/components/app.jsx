import React from 'react'
import styled from 'emotion/react'
import { css } from 'emotion'
import { Field } from 'react-redux-form'
import { connect } from 'react-redux'

const marginBottom = '30px'

const App = styled.div`
  box-sizing: border-box;
`
const FormContainer = styled.div`
  max-width: 650px;
  margin: 30px;
`

const inputLabel = css`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

const resultText = css`
  font-size: 14px;
  margin-bottom: ${marginBottom};
`

const resultHighlightText = css`
  font-size: 18px;
  font-weight: 900;
`

const textInput = css`
  border: 1px solid #ccc;
  font-size: 1.5rem;
  margin-bottom: ${marginBottom};
  padding: 0.5rem;
`

const appHeader = css`
  background-color: teal;
  box-sizing: border-box;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${marginBottom};
  padding: 10px 30px;
  width: 100%;
`

const caloriesPerStep = 0.17 + 0.05
const caloriesPerFlight = () => caloriesPerStep * 12

const CalorieClimb = ({ calories }) => {
  const flightsOfStairs = (parseInt(calories, 10) / caloriesPerFlight()).toFixed(1)
  const laughingCaloriesPerHour = 180
  const cyclingCaloriesPerHour = 396
  const individualSteps = Math.ceil(parseInt(calories, 10) / caloriesPerStep) / 2
  const laughingMinutes = Math.ceil(parseInt(calories, 10) / (laughingCaloriesPerHour / 60))
  const cyclingMinutes = Math.ceil(parseInt(calories, 10) / (cyclingCaloriesPerHour / 60))
  const cyclingMiles = (cyclingMinutes / 60) * 12
  const pluralized = (flightsOfStairs === 1) ? 'flight' : 'flights'
  const flights = pluralized ? 'flights' : 'flight'
  const steps = pluralized ? 'steps' : 'step'

  return (
    <App>
      <header className={ appHeader }>
        <h1>Calorie Climb</h1>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/eisenivan/calorie-climb">
          <svg style={{ fill: 'white' }} aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </header>
      <FormContainer>
        <Field model="meal.calories">
          <label className={ inputLabel }>How many calories are you trying to burn?</label>
          <input className={ textInput } type="text" />
        </Field>
        { (!isNaN(flightsOfStairs)) ?
          <div>
            <p className={ resultText }>You burn <span className={ resultHighlightText }>0.17</span> calories going up a stair, and <span className={ resultHighlightText }>0.05</span> going back down.</p>
            <p className={ resultText }>To make this meal calorie neutral you would need to walk up and down <span className={ resultHighlightText }>{ flightsOfStairs } { flights } of stairs.</span> That is up and down <span className={ resultHighlightText }>{ individualSteps } { steps }.</span> Better get walking.</p>
            <p className={ resultText }>Laughing burns { laughingCaloriesPerHour } calories an hour. So you can <span className={ resultHighlightText }>laugh for { laughingMinutes } minutes</span> to burn off the calories.</p>
            <p className={ resultText }>Biking causally, say 12mph or so, will burn about 396 calories in an hour. So if you <span className={ resultHighlightText }>bike for an extra { cyclingMinutes } minutes, or about { cyclingMiles } miles</span> you will burn it off.</p>
          </div>
        : null }
      </FormContainer>
    </App>
  )
}

const mapStateToProps = (state) => {
  return {
    calories: state.meal.calories
  }
}

export default connect(mapStateToProps, undefined)(CalorieClimb)
