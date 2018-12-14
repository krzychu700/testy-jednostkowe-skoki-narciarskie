class hillProp {
  constructor(kPoint, multiplePoint) {
    this.kPoint = kPoint,
      this.multiplePoint = multiplePoint
  }
}

const hillType = {
  Normal: new hillProp(60, 2),
  Large: new hillProp(60, 1.8),
  Mamut: new hillProp(120, 1.2)
}

const calculateDistancePoints = (hillSize = "Normal", distance = 0, kPoint = 0) => {
  if (hillType[hillSize]) {
    let roundDist = Math.round(distance * 2) / 2;

    return (hillType[hillSize].kPoint + (roundDist - kPoint) * hillType[hillSize].multiplePoint)
  }
};

module.exports = calculateDistancePoints;