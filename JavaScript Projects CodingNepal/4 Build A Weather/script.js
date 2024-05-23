const sehirGirdisi = document.querySelector(".city-input");
const aramaButonu = document.querySelector(".search-btn");
const konumButonu = document.querySelector(".location-btn");
const mevcutHavaDiv = document.querySelector(".current-weather");
const havaKartlariDiv = document.querySelector(".weather-cards");

const API_ANAHTARI = "YOUR-API-KEY-HERE"; // OpenWeatherMap API için API anahtarı

const havaKartiOlustur = (sehirAdi, havaDurumu, index) => {
  if (index === 0) {
    // Ana hava kartı için HTML
    return `<div class="details">
                    <h2>${sehirAdi} (${havaDurumu.dt_txt.split(" ")[0]})</h2>
                    <h6>Sıcaklık: ${(havaDurumu.main.temp - 273.15).toFixed(
                      2
                    )}°C</h6>
                    <h6>Rüzgar: ${havaDurumu.wind.speed} M/S</h6>
                    <h6>Nem: ${havaDurumu.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${
                      havaDurumu.weather[0].icon
                    }@4x.png" alt="hava-ikonu">
                    <h6>${havaDurumu.weather[0].description}</h6>
                </div>`;
  } else {
    // Diğer beş günlük tahmin kartı için HTML
    return `<li class="card">
                    <h3>(${havaDurumu.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${
                      havaDurumu.weather[0].icon
                    }@4x.png" alt="hava-ikonu">
                    <h6>Sıcaklık: ${(havaDurumu.main.temp - 273.15).toFixed(
                      2
                    )}°C</h6>
                    <h6>Rüzgar: ${havaDurumu.wind.speed} M/S</h6>
                    <h6>Nem: ${havaDurumu.main.humidity}%</h6>
                </li>`;
  }
};

const havaDetaylariniGetir = (sehirAdi, enlem, boylam) => {
  const HAVA_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${enlem}&lon=${boylam}&appid=${API_ANAHTARI}`;

  fetch(HAVA_API_URL)
    .then((response) => response.json())
    .then((data) => {
      // Tahminleri filtreleyerek her gün için yalnızca bir tahmin alır
      const benzersizTahminGunleri = [];
      const besGunlukTahmin = data.list.filter((tahmin) => {
        const tahminTarihi = new Date(tahmin.dt_txt).getDate();
        if (!benzersizTahminGunleri.includes(tahminTarihi)) {
          return benzersizTahminGunleri.push(tahminTarihi);
        }
      });

      // Önceki hava durumu verilerini temizler
      sehirGirdisi.value = "";
      mevcutHavaDiv.innerHTML = "";
      havaKartlariDiv.innerHTML = "";

      // Hava kartlarını oluşturarak DOM'a ekler
      besGunlukTahmin.forEach((havaDurumu, index) => {
        const html = havaKartiOlustur(sehirAdi, havaDurumu, index);
        if (index === 0) {
          mevcutHavaDiv.insertAdjacentHTML("beforeend", html);
        } else {
          havaKartlariDiv.insertAdjacentHTML("beforeend", html);
        }
      });
    })
    .catch(() => {
      alert("Hava durumu tahmini alınırken bir hata oluştu!");
    });
};

const sehirKoordinatlariniGetir = () => {
  const sehirAdi = sehirGirdisi.value.trim();
  if (sehirAdi === "") return;
  const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${sehirAdi}&limit=1&appid=${API_ANAHTARI}`;

  // API yanıtından girilen şehir koordinatlarını (enlem, boylam ve ad) alır
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      if (!data.length)
        return alert(`${sehirAdi} için koordinatlar bulunamadı`);
      const { lat, lon, name } = data[0];
      havaDetaylariniGetir(name, lat, lon);
    })
    .catch(() => {
      alert("Koordinatlar alınırken bir hata oluştu!");
    });
};

const kullaniciKoordinatlariniGetir = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords; // Kullanıcı konumunun koordinatlarını alır
      // Tersine geocoding API'si kullanarak koordinatlardan şehir adını alır
      const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_ANAHTARI}`;
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          const { name } = data[0];
          havaDetaylariniGetir(name, latitude, longitude);
        })
        .catch(() => {
          alert("Şehir adı alınırken bir hata oluştu!");
        });
    },
    (error) => {
      // Kullanıcı konum izni reddedildiyse uyarı gösterir
      if (error.code === error.PERMISSION_DENIED) {
        alert(
          "Coğrafi konum isteği reddedildi. Lütfen erişimi tekrar vermek için konum iznini sıfırlayın."
        );
      } else {
        alert("Coğrafi konum isteği hatası. Lütfen konum iznini sıfırlayın.");
      }
    }
  );
};

konumButonu.addEventListener("click", kullaniciKoordinatlariniGetir);
aramaButonu.addEventListener("click", sehirKoordinatlariniGetir);
sehirGirdisi.addEventListener(
  "keyup",
  (e) => e.key === "Enter" && sehirKoordinatlariniGetir()
);
