const generateForm = document.querySelector(".generate-form");
const generateBtn = generateForm.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

onst OPENAI_API_KEY = "YOUR-OPENAI-API-KEY-HERE"; // Your OpenAI API key here
let isImageGenerating = false;
const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) => {
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector(".download-btn");
    // Set the image source to the AI-generated image data
    const aiGeneratedImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
    imgElement.src = aiGeneratedImage;
    // When the image is loaded, remove the loading class and set download attributes
    imgElement.onload = () => {
        imgCard.classList.remove("loading");
        downloadBtn.setAttribute("href", aiGeneratedImage);
        downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
      }
    });
  }

  const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
      // Send a request to the OpenAI API to generate images based on user inputs
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: userPrompt,
          n: userImgQuantity,
          size: "512x512",
          response_format: "b64_json"
        }),
      });
      // Throw an error message if the API response is unsuccessful
      if(!response.ok) throw new Error("Failed to generate AI images. Make sure your API key is valid.");
      const { data } = await response.json(); // Get data from the response
      updateImageCard([...data]);
    } catch (error) {
      alert(error.message);
    } finally {
      generateBtn.removeAttribute("disabled");
      generateBtn.innerText = "Generate";
      isImageGenerating = false;
    }
  }