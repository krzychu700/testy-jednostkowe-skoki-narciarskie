const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(hillSize, distance, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
}

module.exports = calculateTotalPoints;