import Big from 'big.js'

export const MEASURE_TYPES = {
  DISTANCE: 'DISTANCE',
  // AREA: 'AREA',
  // WEIGHT: 'WEIGHT',
  // MASS: 'MASS',
  // VOLUME: 'VOLUME',
  // FLUID: 'FLUID',
  TIME: 'TIME',
  // VELOCITY: 'VELOCITY',
  // ACCELERATION: 'ACCELERATION',
}

export const MEASURE = {
  [MEASURE_TYPES.DISTANCE]: {
    // MICROINCH: 'MICROINCH',
    INCH: 'INCH',
    FOOT: 'FOOT',
    YARD: 'YARD',
    MILE: 'MILE',
    // ANGSTROM: 'ANGSTROM',
    // NANOOMETER: 'NANOOMETER',
    // MICROMETER: 'MICROMETER',
    // MILIMETER: 'MILIMETER',
    // CENTIMETER: 'CENTIMETER',
    // DECIMETER: 'DECIMETER',
    METER: 'METER',
    // DECAMETER: 'DECAMETER',
    // KILOMETER: 'KILOMETER',
    // ROD: 'ROD',
    // NAUTICAL_MILE: 'NAUTICAL_MILE',
    // NAUTICAL_LEAGUE: 'NAUTICAL_LEAGUE',
    // LEAGUE: 'LEAGUE',
    // CABLE: 'CABLE',
    // US_CABLE: 'US_CABLE',
    // FATHOM: 'FATHOM',
    // LAND: 'LAND',
    // BOLT: 'BOLT',
    // POLE: 'POLE',
    // PERCH: 'PERCH',
    // SPAN: 'SPAN',
    // HADN: 'HADN',
    // LINE: 'LINE',
    // MIL: 'MIL',
  },
  // [MEASURE_TYPES.AREA]: {
  //   SQUARE_INCH: 'SQUARE_INCH',
  //   SQUARE_FOOT: 'SQUARE_FOOT',
  //   SQUARE_YARD: 'SQUARE_YARD',
  //   SQUARE_MILE: 'SQUARE_MILE',
  //   ACRE: 'ACRE',
  //   SQUARE_MICROMETER: 'SQUARE_MICROMETER',
  //   SQUARE_MILIMETER: 'SQUARE_MILIMETER',
  //   SQUARE_CENTIMETER: 'SQUARE_CENTIMETER',
  //   SQUARE_DECIMETER: 'SQUARE_DECIMETER',
  //   SQUARE_METER: 'SQUARE_METER',
  //   SQUARE_DECAMETER: 'SQUARE_DECAMETER',
  //   SQUARE_KILOMETER: 'SQUARE_KILOMETER',
  // },
  // [MEASURE_TYPES.WEIGHT]: {
  //   OUNCE: 'OUNCE',
  //   POUND: 'POUND',
  //   TON: 'TON',
  // },
  // [MEASURE_TYPES.MASS]: {
  //   MICROGRAM: 'MICROGRAM',
  //   MILIGRAM: 'MILIGRAM',
  //   CENTIGRAM: 'CENTIGRAM',
  //   DECIGRAM: 'DECIGRAM',
  //   GRAM: 'GRAM',
  //   DECAGRAM: 'DECAGRAM',
  //   KILOGRAM: 'KILOGRAM',
  // },
  // [MEASURE_TYPES.VOLUME]: {
  //
  // },
  // [MEASURE_TYPES.FLUID]: {
  //   OUNCE: 'OZ',
  // },
  [MEASURE_TYPES.TIME]: {
    // MICROSECOND: 'MICROSECOND',
    // MILISECOND: 'MILISECOND',
    SECOND: 'SECOND',
    MINUTE: 'MINUTE',
    HOUR: 'HOUR',
    DAY: 'DAY',
    // WEEK: 'WEEK',
    // MONTH: 'MONTH',
    // YEAR: 'YEAR',
    // DECADE: 'DECADE',
    // CENTURY: 'CENTURY',
    // MILLENNIUM: 'MILLENNIUM',
  },
}

export const unitAsEnglish = (quantity, units) => {
  switch (units) {
    case MEASURE.DISTANCE.INCH:
      return quantity == 1 ? 'inch' : 'inches' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.FOOT:
      return quantity == 1 ? 'foot' : 'feet' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.YARD:
      return quantity == 1 ? 'yard' : 'yards' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.MILE:
      return quantity == 1 ? 'miles' : 'miles' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.METER:
      return quantity == 1 ? 'meter' : 'meters' // eslint-disable-line eqeqeq
  }
}

export const randomConversionUnit = (measureType) => {
  const possibleKeys = Object.keys(MEASURE[measureType])

  return possibleKeys[Math.floor(Math.random() * (possibleKeys.length - 1))]
}

const conversionChart = {
  /** DISTANCE **/
  // INCH -->
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.INCH}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).div(12),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(36),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(63360),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.0254),
  // FOOT -->
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(3),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(5280),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).div(12),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.3048006),
  // YARD -->
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.YARD}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(1760),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).div(36),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(3),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.9144),
  // MILE -->
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.MILE}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).times(63360),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(5280),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).times(1760),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(1609.344),
  // METER -->
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.METER}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).div(0.0254),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).div(0.3048006),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(0.9144),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(1609.344),
  /** TIME **/
  // SECOND -->
  [`${MEASURE.TIME.SECOND}__${MEASURE.TIME.SECOND}`]: (quantity) => quantity,
  [`${MEASURE.TIME.SECOND}__${MEASURE.TIME.MINUTE}`]: (quantity) => Big(quantity).div(60),
  [`${MEASURE.TIME.SECOND}__${MEASURE.TIME.HOUR}`]: (quantity) => Big(quantity).div(3600),
  [`${MEASURE.TIME.SECOND}__${MEASURE.TIME.DAY}`]: (quantity) => Big(quantity).div(86400),
  // MINUTE -->
  [`${MEASURE.TIME.MINUTE}__${MEASURE.TIME.MINUTE}`]: (quantity) => quantity,
  [`${MEASURE.TIME.MINUTE}__${MEASURE.TIME.SECOND}`]: (quantity) => Big(quantity).times(60),
  [`${MEASURE.TIME.MINUTE}__${MEASURE.TIME.HOUR}`]: (quantity) => Big(quantity).div(60),
  [`${MEASURE.TIME.MINUTE}__${MEASURE.TIME.DAY}`]: (quantity) => Big(quantity).div(1440),
  // HOUR -->
  [`${MEASURE.TIME.HOUR}__${MEASURE.TIME.HOUR}`]: (quantity) => quantity,
  [`${MEASURE.TIME.HOUR}__${MEASURE.TIME.SECOND}`]: (quantity) => Big(quantity).times(3600),
  [`${MEASURE.TIME.HOUR}__${MEASURE.TIME.MINUTE}`]: (quantity) => Big(quantity).times(60),
  [`${MEASURE.TIME.HOUR}__${MEASURE.TIME.DAY}`]: (quantity) => Big(quantity).div(24),
  // DAY -->
  [`${MEASURE.TIME.DAY}__${MEASURE.TIME.DAY}`]: (quantity) => quantity,
  [`${MEASURE.TIME.DAY}__${MEASURE.TIME.SECOND}`]: (quantity) => Big(quantity).times(86400),
  [`${MEASURE.TIME.DAY}__${MEASURE.TIME.MINUTE}`]: (quantity) => Big(quantity).times(3600),
  [`${MEASURE.TIME.DAY}__${MEASURE.TIME.HOUR}`]: (quantity) => Big(quantity).times(24),
}

export const convert = (quantity, from, to) => {
  try {
    if (isNaN(quantity)) {
      console.error('Unable to convert, quantity is not a number') // eslint-disable-line no-console
      return quantity
    }

    const conversionRate = conversionChart[`${from}__${to}`]

    if (conversionRate == null) {
      console.error(`Unable to convert from ${from} to ${to}. Either this conversion is impossible or we will add it soon.`) // eslint-disable-line no-console
      return quantity
    }

    return conversionRate(quantity).toString()
  } catch (e) {
    throw new Error('Unable to convert', e)
  }
}
