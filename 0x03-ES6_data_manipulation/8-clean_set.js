function cleanSet(set, startString) {
  // Return an empty string if startString is empty
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  // Filter and map set values that start with startString
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}

export default cleanSet;
