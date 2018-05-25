console.log('app is running!');

//sets up canvas and canvas size
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const canvasWidth  = canvas.width;
const canvasHeight = canvas.height;


// sets image and gets image data from canvas
const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
let pixels = imageData.data;


const buffer = new ArrayBuffer(pixels.length)


const ws = new WebSocket('ws://localhost:8020/');
ws.binaryType = "arraybuffer"; //faster than blob

ws.onopen = function(event) {
  console.log('booyah');
};

ws.onclose = function() {
  console.log('null');
};

ws.onmessage = function(event) {
  let bytes = new Uint32Array(event.data);
  let byteArray = //Uint8Array is
  console.log("bytes" + bytes);
};
