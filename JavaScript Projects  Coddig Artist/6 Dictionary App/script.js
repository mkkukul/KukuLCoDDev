// API'nin kullanılacağı URL tanımlanır
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Sonuçları gösterecek olan HTML öğesi seçilir
const result = document.getElementById("result");

// Ses çalmak için gerekli ses öğesi seçilir
const sound = document.getElementById("sound");

// Arama butonu seçilir
const btn = document.getElementById("search-btn");

// Arama butonuna tıklanınca yapılacak işlemler
btn.addEventListener("click", () => {
    // Kullanıcının girdiği kelime alınır
    let inpWord = document.getElementById("inp-word").value;
    
    // API'den veri almak için fetch kullanılır
    fetch(`${url}${inpWord}`)
        // API'den gelen yanıt JSON formatına dönüştürülür
        .then((response) => response.json())
        // Gelen veriler işlenir ve HTML içine yerleştirilir
        .then((data) => {
            console.log(data);
            // HTML içeriği oluşturulur
            result.innerHTML = `
                <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            
            // Ses dosyasının kaynağı belirlenir
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        // Hata durumunda işlemler
        .catch(() => {
            // Hata mesajı gösterilir
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

// Ses çalma fonksiyonu tanımlanır
function playSound() {
    sound.play();
}
