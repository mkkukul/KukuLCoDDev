const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/uc?
export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
