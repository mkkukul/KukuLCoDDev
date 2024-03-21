// Arama butonunu alır
let searchBtn = document.getElementById("search-btn");

// Ülke adı giriş alanını alır
let countryInp = document.getElementById("country-inp");

// Arama butonuna tıklama olayını dinler
searchBtn.addEventListener("click", () => {
  // Kullanıcının girdiği ülke adını alır
  let countryName = countryInp.value;

  // API'nin son URL'sini oluşturur
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  // Son URL'yi konsola yazdırır
  console.log(finalURL);

  // API'ye bir GET isteği gönderir ve gelen yanıtı işler
  fetch(finalURL)
    .then((response) => response.json()) // Yanıtı JSON'a dönüştürür
    .then((data) => { // JSON verilerini işler
      // Sonuçları HTML içine yerleştirir
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => { // Hata durumunda bir hata mesajı görüntüler
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
