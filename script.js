function byteSize(str) {
  // Create a Blob object with the string
  const blob = new Blob([str]);
  // Get the size property of the Blob, representing the size in bytes
  return blob.size;
}

function calculateByteSize() {
  const inputString = document.getElementById('inputString').value;
  const result = byteSize(inputString);

  document.getElementById('result').innerText = `Byte Size: ${result} bytes`;
}

