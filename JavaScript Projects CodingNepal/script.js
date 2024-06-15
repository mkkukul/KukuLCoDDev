const screenshotBtn = document.querySelector("#src-btn"),
  screenshotPreview = document.querySelector(".src-preview"),
  closeBtn = screenshotPreview.querySelector("#close-btn");
  const captureScreen = async () => {
    try {
        // asking permission to use a media input to record current tab
        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
        const video = document.createElement("video");
        video.addEventListener("loadedmetadata", () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            // passing video width & height as canvas width & height
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
