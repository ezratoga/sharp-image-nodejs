const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("DDigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.heic")
      .toFormat("png", { quality: 30 })
      .toFile("sammy-resized-compressed.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();