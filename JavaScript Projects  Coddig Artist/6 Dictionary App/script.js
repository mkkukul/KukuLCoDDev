const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result =  document.getElementById("result");
const sound = document.getElementById("sound");
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
            <h3>${inpWord}</h3>
            <button onclick="playSound()">
            </button><audio
    }
}