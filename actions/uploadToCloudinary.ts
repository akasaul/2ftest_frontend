"use server";

import axios from "axios";

export const uploadImageToCloudinary = async (imgBuffer: Uint8Array) => {
  const { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_CLOUD_NAME } =
    process.env;

  if (!CLOUDINARY_URL || !CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error("Invalid Credentials");
  }

  try {
    const { status, data } = await axios.post(CLOUDINARY_URL, {
      file: imgBuffer,
      upload_preset: CLOUDINARY_UPLOAD_PRESET,
      cloud_name: CLOUDINARY_CLOUD_NAME,
    });

    if (status != 200) {
      throw new Error("Failed to upload to Cloudinary");
    }

    return data.secure_url;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};
