const lqip = require("lqip-modern");
const fs = require("fs");
const path = require("path");

const generateBlurDataURL = async (imagePath) => {
  try {
    const { metadata, content } = await lqip(imagePath);
    const base64Data = content.toString("base64");
    const mimeType = metadata.type; // e.g., "image/jpeg"
    const blurDataURL = `data:${mimeType};base64,${base64Data}`;
    console.log(`Blur data URL for ${imagePath}:`);
    console.log(blurDataURL); // This is the base64 string to use as the blurDataURL
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error);
  }
};

// Adjust the image paths according to your images directory
const images = [
  //   "./public/Site Files/img1.jpg",
  //   "./public/Site Files/img2.jpg",
  //   "./public/Site Files/img3.jpg",
  //   "./public/Site Files/img4.jpg",
  //   "./public/Site Files/img5.jpg",
  //   "./public/Site Files/img6.jpg",
  //   "./public/Site Files/img7.jpg",
  //   "./public/Site Files/img8.jpg",
  //   "./public/Site Files/img9.jpg",
  "./public/Site Files/img10.jpg",
  "./public/Site Files/img11.jpg",
  "./public/Site Files/img12.jpg",
  "./public/Site Files/img13.jpg",
  "./public/Site Files/img14.jpg",
  "./public/Site Files/img15.jpg",
];

(async () => {
  for (const image of images) {
    await generateBlurDataURL(image);
  }
})();
