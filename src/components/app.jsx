import React from 'react'
import styled from 'emotion/react'
import { css } from 'emotion'
import { Field } from 'react-redux-form'
import { connect } from 'react-redux'

const App = styled.div`
  margin: 30px;
`
const FormContainer = styled.div`
  width: 50%;
`

const inputLabel = css`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  display: block;
`

const resultText = css`
  font-size: 14px;
`

const introText = css`
  composes: ${resultText};
  margin-bottom: 0.5rem;
`
const resultHighlightText = css`
  font-size: 18px;
  font-weight: 900;
`

const textInput = css`
  border: 1px solid #ccc;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`
const caloriesPerStep = 0.17 + 0.05
const caloriesPerFlight = () => caloriesPerStep * 12

const CalorieClimb = ({ calories }) => {
  const flightsOfStairs = (parseInt(calories, 10) / caloriesPerFlight()).toFixed(1)
  const individualSteps = Math.ceil(parseInt(calories, 10) / caloriesPerStep) / 2
  const pluralized = (flightsOfStairs === 1) ? 'flight' : 'flights'
  const flights = pluralized ? 'flights' : 'flight'
  const steps = pluralized ? 'steps' : 'step'

  return (
    <App>
      <FormContainer>
        <Field model="meal.calories">
          <label className={ inputLabel }>How many calories?</label>
          <input className={ textInput } type="text" />
        </Field>
        <p className={ introText }>You burn <strong>0.17</strong> calories going up a stair, and <strong>0.05</strong> going back down.</p>
        { (!isNaN(flightsOfStairs)) ?
          <p className={ resultText }>To make this meal calorie neutral you would need to walk up and down <span className={ resultHighlightText }>{ flightsOfStairs } { flights } of stairs.</span> That is up and down <span className={ resultHighlightText }>{ individualSteps } { steps }.</span> Get walking.</p>
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
