import React from 'react'

export default (calories, { resultText, resultHighlightText }) => {
  return <p className={ resultText }>You burn <span className={ resultHighlightText }>0.17</span> calories going up a stair, and <span className={ resultHighlightText }>0.05</span> going back down.</p>
}
