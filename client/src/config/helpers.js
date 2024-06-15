import { TextureLoader } from "three";

export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }
  const dataURL = canvas.toDataURL();
  // console.log("Canvas data URL:", dataURL);
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};

// export const createTextTexture1 = (text, font = "Arial") => {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");

//   canvas.width = 256; // Adjust size as needed
//   canvas.height = 256; // Adjust size as needed

//   // Set your text properties
//   context.font = `30px ${font}`;
//   context.fillStyle = "black";
//   context.textAlign = "center";
//   context.textBaseline = "middle";

//   const maxWidth = canvas.width - 20; // Maximum width of the text
//   const lineHeight = 35; // Line height for wrapped text

//   // Function to wrap text
//   const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
//     const words = text.split(" ");
//     let line = "";
//     let lines = [];

//     for (let n = 0; n < words.length; n++) {
//       let testLine = line + words[n] + " ";
//       let metrics = context.measureText(testLine);
//       let testWidth = metrics.width;
//       if (testWidth > maxWidth && n > 0) {
//         lines.push(line);
//         line = words[n] + " ";
//       } else {
//         line = testLine;
//       }
//     }
//     lines.push(line);

//     for (let k = 0; k < lines.length; k++) {
//       context.fillText(lines[k], x, y + k * lineHeight);
//     }
//   };

//   wrapText(context, text, canvas.width / 2, canvas.height / 2 - lineHeight / 2, maxWidth, lineHeight);

//   // Convert the canvas to a data URL
//   const dataURL = canvas.toDataURL();

//   return dataURL;
// };

export const createTextTexture = (text, font, fontSize) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 256; // Adjust size as needed
  canvas.height = 256; // Adjust size as needed

  // Set your text properties
  context.font = `${fontSize}px ${font}`;
  context.fillStyle = "black";
  context.textAlign = "center";
  context.textBaseline = "middle";

  const maxWidth = 240; // Maximum width of the text
  const lineHeight = fontSize * 1.2; // Line height based on font size
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Function to wrap text
  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    let testLine = "";
    let metrics = null;
    let testWidth = 0;
    let startY = y - (words.length * lineHeight) / 2;

    for (let n = 0; n < words.length; n++) {
      testLine = line + words[n] + " ";
      metrics = context.measureText(testLine);
      testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, startY);
        line = words[n] + " ";
        startY += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, startY);
  };

  wrapText(context, text, x, y, maxWidth, lineHeight);

  // Convert the canvas to a data URL
  const dataURL = canvas.toDataURL();

  return dataURL;
};
