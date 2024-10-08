function cleanSet(set, startString) {
  // Return an empty string if startString is empty or not a valid string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and map the set values that start with the startString
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length)) // Remove the startString from each value
    .join('-'); // Join the values with '-'

  return result;
}

// Use CommonJS syntax to export the function
module.exports = cleanSet;
