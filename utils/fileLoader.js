import { readFile } from "fs/promises";

export const readTextFile = async (filePath) => {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    console.error("File Error:", error.message);
    return "";
  }
};