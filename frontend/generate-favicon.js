const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('./public/favicon.svg');

async function generateFavicons() {
  try {
    // Generate 16x16 and 32x32 PNG for ICO conversion
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('./public/favicon-32.png');

    console.log('✓ Generated favicon-32.png');

    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile('./public/favicon-16.png');

    console.log('✓ Generated favicon-16.png');

    // Generate apple-touch-icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile('./public/apple-touch-icon.png');

    console.log('✓ Generated apple-touch-icon.png');

    // Generate 192x192 for Android
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile('./public/favicon-192.png');

    console.log('✓ Generated favicon-192.png');

    // Generate 512x512 for Android
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile('./public/favicon-512.png');

    console.log('✓ Generated favicon-512.png');

    console.log('\n✅ All favicon files generated successfully!');
    console.log('\nNote: For favicon.ico, you can use an online converter like:');
    console.log('https://www.favicon-generator.org/');
    console.log('Or install ImageMagick and run: convert favicon-32.png favicon-16.png favicon.ico');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
