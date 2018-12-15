const calculateStylePoints = (styleNotes) => {
  const highest = Math.max(...styleNotes);
  const lowest = Math.min(...styleNotes);

  const sum = styleNotes.reduce(function(act, val) {
    return act + val
  })

  return sum - lowest - highest;
};

module.exports = calculateStylePoints;