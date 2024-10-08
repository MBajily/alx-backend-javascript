function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // Check if the position is outside the buffer range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position as an Int8
  view.setInt8(position, value);

  // Return the DataView
  return view;
}

export default createInt8TypedArray;
