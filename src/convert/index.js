import Big from 'big.js'
import numeral from 'numeral'

export const MEASURE_TYPES = {
  DISTANCE: 'DISTANCE',
  // AREA: 'AREA',
  // WEIGHT: 'WEIGHT',
  // MASS: 'MASS',
  // VOLUME: 'VOLUME',
  // FLUID: 'FLUID',
  TIME: 'TIME',
  VELOCITY: 'VELOCITY',
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
    KILOMETER: 'KILOMETER',
    ROD: 'ROD',
    // NAUTICAL_MILE: 'NAUTICAL_MILE',
    // NAUTICAL_LEAGUE: 'NAUTICAL_LEAGUE',
    // LEAGUE: 'LEAGUE',
    // CABLE: 'CABLE',
    // US_CABLE: 'US_CABLE',
    FATHOM: 'FATHOM',
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
  [MEASURE_TYPES.VELOCITY]: {
    // NOTE: Built in the below for loop
  },
}

// Build the velocity units
for (const distanceUnit in MEASURE.DISTANCE) {
  for (const timeUnit in MEASURE.TIME) {
    MEASURE[MEASURE_TYPES.VELOCITY][`${distanceUnit}_PER_${timeUnit}`] = `${distanceUnit}_PER_${timeUnit}`
  }
}

export const unitAsEnglish = (quantity, units) => {
  switch (units) {
    /** DISTANCE **/
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
    case MEASURE.DISTANCE.KILOMETER:
      return quantity == 1 ? 'kilometer' : 'kilometers' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.ROD:
      return quantity == 1 ? 'rod' : 'rods' // eslint-disable-line eqeqeq
    case MEASURE.DISTANCE.FATHOM:
      return quantity == 1 ? 'fathom' : 'fathoms' // eslint-disable-line eqeqeq
    /** TIME **/
    /** VELOCITY **/
    case MEASURE.VELOCITY.INCHES_PER_SECOND:
      return quantity == 1 ? 'inch/sec' : 'inches/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.INCHES_PER_MINUTE:
      return quantity == 1 ? 'inch/min' : 'inches/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.INCHES_PER_HOUR:
      return quantity == 1 ? 'inch/hr' : 'inches/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.INCHES_PER_DAY:
      return quantity == 1 ? 'inch/day' : 'inches/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.FOOT_PER_SECOND:
      return quantity == 1 ? 'foot/sec' : 'feet/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FOOT_PER_MINUTE:
      return quantity == 1 ? 'foot/min' : 'feet/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FOOT_PER_HOUR:
      return quantity == 1 ? 'foot/hr' : 'feet/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FOOT_PER_DAY:
      return quantity == 1 ? 'foot/day' : 'feet/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.YARD_PER_SECOND:
      return quantity == 1 ? 'yard/sec' : 'yards/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.YARD_PER_MINUTE:
      return quantity == 1 ? 'yard/min' : 'yards/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.YARD_PER_HOUR:
      return quantity == 1 ? 'yard/hr' : 'yards/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.YARD_PER_DAY:
      return quantity == 1 ? 'yard/day' : 'yards/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.MILE_PER_SECOND:
      return quantity == 1 ? 'mile/sec' : 'miles/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.MILE_PER_MINUTE:
      return quantity == 1 ? 'mile/min' : 'miles/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.MILE_PER_HOUR:
      return 'mph'
    case MEASURE.VELOCITY.MILE_PER_DAY:
      return quantity == 1 ? 'mile/day' : 'miles/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.METER_PER_SECOND:
      return quantity == 1 ? 'meter/sec' : 'meters/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.METER_PER_MINUTE:
      return quantity == 1 ? 'meter/min' : 'meters/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.METER_PER_HOUR:
      return quantity == 1 ? 'meter/hr' : 'meters/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.METER_PER_DAY:
      return quantity == 1 ? 'meter/day' : 'meters/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.KILOMETER_PER_SECOND:
      return quantity == 1 ? 'kilometer/sec' : 'kilometers/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.KILOMETER_PER_MINUTE:
      return quantity == 1 ? 'kilometer/min' : 'kilometers/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.KILOMETER_PER_HOUR:
      return 'kmh'
    case MEASURE.VELOCITY.KILOMETER_PER_DAY:
      return quantity == 1 ? 'kilometer/day' : 'kilometers/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.FATHOM_PER_SECOND:
      return quantity == 1 ? 'fathom/sec' : 'fathoms/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FATHOM_PER_MINUTE:
      return quantity == 1 ? 'fathom/min' : 'fathoms/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FATHOM_PER_HOUR:
      return quantity == 1 ? 'fathom/hr' : 'fathoms/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.FATHOM_PER_DAY:
      return quantity == 1 ? 'fathom/day' : 'fathoms/day' // eslint-disable-line eqeqeq

    case MEASURE.VELOCITY.ROD_PER_SECOND:
      return quantity == 1 ? 'rod/sec' : 'rods/sec' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.ROD_PER_MINUTE:
      return quantity == 1 ? 'rod/min' : 'rods/min' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.ROD_PER_HOUR:
      return quantity == 1 ? 'rod/hr' : 'rods/hr' // eslint-disable-line eqeqeq
    case MEASURE.VELOCITY.ROD_PER_DAY:
      return quantity == 1 ? 'rod/day' : 'rods/day' // eslint-disable-line eqeqeq
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
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.KILOMETER}`]: (quantity) => Big(quantity).times(0.0000254),
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).times(0.0254).div(1.828804), // -> meter -> fathom
  [`${MEASURE.DISTANCE.INCH}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).div(12).div(16.5), // -> foot -> rod
  // FOOT -->
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).times(12),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(3),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(5280),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.3048006),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.0003048006),
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).times(0.3048006).div(1.828804), // -> meter -> fathom
  [`${MEASURE.DISTANCE.FOOT}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).div(16.5),
  // YARD -->
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.YARD}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(1760),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).div(36),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(3),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.9144),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.KILOMETER}`]: (quantity) => Big(quantity).times(0.0009144),
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).times(0.9144).div(1.828804), // -> meter -> fathom
  [`${MEASURE.DISTANCE.YARD}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).times(3).div(16.5), // -> foot -> rod
  // MILE -->
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.MILE}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).times(63360),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(5280),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).times(1760),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(1609.344),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.KILOMETER}`]: (quantity) => Big(quantity).times(1.609344),
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).times(1609.344).div(1.828804), // -> meter -> fathom
  [`${MEASURE.DISTANCE.MILE}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).times(320),
  // METER -->
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.METER}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).div(0.0254),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).div(0.3048006),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).div(0.9144),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).div(1609.344),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.KILOMETER}`]: (quantity) => Big(quantity).div(1000),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).div(1.828804),
  [`${MEASURE.DISTANCE.METER}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).div(0.3048006).div(16.5), //  -> foot -> rod
  // FATHOM -->
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).times(1.828804).div(0.0254), // -> meter -> inch
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(1.828804).div(0.3048006), // -> meter -> foot
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).times(1.828804).div(0.9144), // -> meter -> yard
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).times(1.828804).div(1609.344), // -> meter -> mile
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(1.828804),
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(0.001828804),
  [`${MEASURE.DISTANCE.FATHOM}__${MEASURE.DISTANCE.ROD}`]: (quantity) => Big(quantity).times(1.828804).div(0.3048006).div(16.5), // -> meter -> foot -> rod
  // ROD -->
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.ROD}`]: (quantity) => quantity,
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.INCH}`]: (quantity) => Big(quantity).times(198),
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.FOOT}`]: (quantity) => Big(quantity).times(16.5),
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.YARD}`]: (quantity) => Big(quantity).times(5.5),
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.MILE}`]: (quantity) => Big(quantity).times(0.003125),
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(16.5).times(0.3048006), // -> foot -> meter
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.METER}`]: (quantity) => Big(quantity).times(16.5).times(0.0003048006), // -> foot -> kilometer
  [`${MEASURE.DISTANCE.ROD}__${MEASURE.DISTANCE.FATHOM}`]: (quantity) => Big(quantity).times(16.5).times(0.3048006).div(1.828804), // -> foot -> meter -> fathom
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

export const convert = (quantity, from = '', to = '') => {
  try {
    if (isNaN(quantity)) {
      console.error('Unable to convert, quantity is not a number') // eslint-disable-line no-console
      return quantity
    }

    let returnValue

    if (MEASURE.VELOCITY.hasOwnProperty(from)) {
      const [
        fromDistance,
        fromTime,
      ] = from.split('_PER_')
      const [
        toDistance,
        toTime,
      ] = to.split('_PER_')
      const conversionRateDistance = conversionChart[`${fromDistance}__${toDistance}`]
      const conversionRateTime = conversionChart[`${fromTime}__${toTime}`]

      if (conversionRateDistance == null || conversionRateTime == null) {
        console.error(`Unable to convert from ${from} to ${to}. Either this conversion is impossible or we will add it soon.`) // eslint-disable-line no-console
        return quantity
      }

      returnValue = conversionRateDistance(conversionRateTime(quantity)).toString()
    } else {
      const conversionRate = conversionChart[`${from}__${to}`]

      if (conversionRate == null) {
        console.error(`Unable to convert from ${from} to ${to}. Either this conversion is impossible or we will add it soon.`) // eslint-disable-line no-console
        return quantity
      }

      returnValue = conversionRate(quantity).toString()
    }

    return numeral(returnValue).format()
  } catch (e) {
    throw new Error('Unable to convert', e)
  }
}
