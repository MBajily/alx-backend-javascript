export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator into an array using the spread operator and join the array with ' | '
  return [...reportWithIterator].join(' | ');
}
