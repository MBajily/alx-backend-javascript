// Create and export a WeakMap instance
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize it with a count of 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // If the count reaches or exceeds 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
