// HTML elementlerini seç
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

// Kazanma değerlerini ve açı aralıklarını saklayan dizi
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 }, // 0-30 derece arası 2 puan
  { minDegree: 31, maxDegree: 90, value: 1 }, // 31-90 derece arası 1 puan
  // ... (Kalan değerler de bu şekilde eklenir)
];

// Pasta grafiği dilimleri boyutları
const data = [16, 16, 16, 16, 16, 16];

// Pasta grafiği dilim renkleri
var pieColors = [
  "#8b35bc",
  "#b163da",
  // ... (Kalan renkler de bu şekilde eklenir)
];

// Pasta grafiği oluştur
let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels], // Dilim etiketleri için eklenti
  type: "pie", // Grafik tipi
  data: {
    labels: [1, 2, 3, 4, 5, 6], // Etiketler
    datasets: [
      {
        backgroundColor: pieColors, // Renkler
        data: data, // Dilim boyutları
      },
    ],
  },
  options: {
    responsive: true, // Ekran boyutuna uyumluluk
    animation: { duration: 0 }, // Animasyon kapatma
    plugins: {
      tooltip: false, // Araç ipucu gizleme
      legend: {
        display: false, // Lejant gizleme
      },
      datalabels: {
        color: "#ffffff", // Etiket rengi
        formatter: (_, context) => context.chart.data.labels[context.dataIndex], // Etiket içeriği
        font: { size: 24 }, // Etiket yazı tipi boyutu
      },
    },
  },
});

// Kazanma değerini gösteren fonksiyon
function valueGenerator(angleValue) {
  for (let i of rotationValues) {
    // Açı aralığında ise kazanan değeri göster
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Değer: ${i.value}</p>`;
      spinBtn.disabled = false; // Döndürme butonunu aktif hale getir
      break;
    }
  }
}

// Döndürme işlemi için değişkenler
let count = 0;
let resultValue = 101;

// Döndürme butonuna tıklama olayı
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true; // Döndürme butonunu pasif hale getir
  finalValue.innerHTML = `<p>İyi şanslar!</p>`; // Başlangıç mesajı

  // Rastgele durma açısı
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

  // Döndürme animasyonu için aralık
  let rotationInterval = window.setInterval(() => {
    // Pasta grafiği rotasyonu
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();

    // 360 dereceden fazla döndüyse sıfırla
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      // Animasyon tamamlandıktan sonra kazanan değeri göster
      valueGenerator(randomDegree);
      clearInterval(rotationInterval); // Animasyonu durdur
      count = 0;
      resultValue = 101;
    }
  }, 10); // Animasyon aralığı (10ms)
});
