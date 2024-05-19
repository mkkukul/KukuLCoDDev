const generateForm = document.querySelector(".generate-form");
const generateBtn = generateForm.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

onst OPENAI_API_KEY = "YOUR-OPENAI-API-KEY-HERE"; // Your OpenAI API key here
let isImageGenerating = false;
const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) => {