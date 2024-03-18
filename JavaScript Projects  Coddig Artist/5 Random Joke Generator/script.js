// HTML içindeki belirli bir ID'ye sahip bir öğeyi seçer
const jokeContainer = document.getElementById("joke");

// HTML içinde belirli bir ID'ye sahip bir düğmeyi seçer
const btn = document.getElementById('btn');

// Şaka API'sinden veri almak için kullanılacak URL'yi tanımlar
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Şakayı alma işlevini tanımlar
let getJoke = () => {
    // Şaka konteynırından fade sınıfını kaldırır
    jokeContainer.classList.remove("fade");

    // Belirtilen URL'ye bir HTTP isteği gönderir
    fetch(url)
    // Yanıtı JSON formatına dönüştürür
    .then(data => data.json())
    // Dönen veriyi alır
    .then(item =>{
        // Alınan şakayı HTML içindeki belirli bir öğeye ekler
        jokeContainer.textContent = `${item.joke}`;
        // Şaka konteynırına fade sınıfını ekler
        jokeContainer.classList.add("fade");
    });
};

// Düğmeye tıklanınca şaka alma işlevini tetikleyen bir olay dinleyicisi ekler
btn.addEventListener("click", getJoke);

// Sayfa yüklendiğinde otomatik olarak bir şaka almak için getJoke işlevini çağırır
getJoke();
