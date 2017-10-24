import Big from 'big.js'

export const MEASURE_TYPES = {
  DISTANCE: 'DISTANCE',
  AREA: 'AREA',
  WEIGHT: 'WEIGHT',
  MASS: 'MASS',
  VOLUME: 'VOLUME',
  FLUID: 'FLUID',
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
    // METER: 'METER',
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
  [MEASURE_TYPES.AREA]: {
    SQUARE_INCH: 'SQUARE_INCH',
    SQUARE_FOOT: 'SQUARE_FOOT',
    SQUARE_YARD: 'SQUARE_YARD',
    SQUARE_MILE: 'SQUARE_MILE',
    ACRE: 'ACRE',
    SQUARE_MICROMETER: 'SQUARE_MICROMETER',
    SQUARE_MILIMETER: 'SQUARE_MILIMETER',
    SQUARE_CENTIMETER: 'SQUARE_CENTIMETER',
    SQUARE_DECIMETER: 'SQUARE_DECIMETER',
    SQUARE_METER: 'SQUARE_METER',
    SQUARE_DECAMETER: 'SQUARE_DECAMETER',
    SQUARE_KILOMETER: 'SQUARE_KILOMETER',
  },
  [MEASURE_TYPES.WEIGHT]: {
    OUNCE: 'OUNCE',
    POUND: 'POUND',
    TON: 'TON',
  },
  [MEASURE_TYPES.MASS]: {
    MICROGRAM: 'MICROGRAM',
    MILIGRAM: 'MILIGRAM',
    CENTIGRAM: 'CENTIGRAM',
    DECIGRAM: 'DECIGRAM',
    GRAM: 'GRAM',
    DECAGRAM: 'DECAGRAM',
    KILOGRAM: 'KILOGRAM',
  },
  [MEASURE_TYPES.VOLUME]: {

  },
  [MEASURE_TYPES.FLUID]: {
    OUNCE: 'OZ',
  },
  [MEASURE_TYPES.TIME]: {
    MICROSECOND: 'MICROSECOND',
    MILISECOND: 'MILISECOND',
    SECOND: 'SECOND',
    MINUTE: 'MINUTE',
    HOUR: 'HOUR',
    DAY: 'DAY',
    WEEK: 'WEEK',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
    DECADE: 'DECADE',
    CENTURY: 'CENTURY',
    MILLENNIUM: 'MILLENNIUM',
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
  }
}

export const randomConversionUnit = (measureType) => {
  const possibleKeys = Object.keys(MEASURE[measureType])

  return possibleKeys[Math.floor(Math.random() * (possibleKeys.length - 1))]
}

const conversionChart = {
  // INCH -->
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.FOOT}`]: new Big(1 / 12),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.YARD}`]: new Big(1 / 36),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.MILE}`]: new Big(1 / 63360),
  // FOOT -->
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.YARD}`]: new Big(1 / 3),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.YARD}`]: new Big(1 / 5280),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.INCH}`]: new Big(12),
  // YARD -->
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.MILE}`]: new Big(1 / 1760),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.INCH}`]: new Big(36),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.FOOT}`]: new Big(3),
  // MILE -->
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.INCH}`]: new Big(63360),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.FOOT}`]: new Big(5280),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.YARD}`]: new Big(1760),
}

export const convert = (quantity, from, to) => {
  try {
    if (isNaN(quantity)) {
      console.error('Unable to convert, quantity is not a number')
      return quantity
    }

    const conversionRate = conversionChart[`${from}__${to}`]

    if (conversionRate == null) {
      console.error(`Unable to convert from ${from} to ${to}. Either this conversion is impossible or we will add it soon.`)
      return quantity
    }

    return Big(quantity).times(conversionRate).toString()
  } catch (e) {
    throw new Error('Unable to convert', e)
  }
}
