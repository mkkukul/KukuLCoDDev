const wheel = document.getElementById("wheel"); // Tekerlek elemanını seç
const spinBtn = document.getElementById("spin-btn"); // Döndürme düğmesini seç
const finalValue = document.getElementById("final-value"); // Son değeri gösteren alanı seç

// Bir değerin minimum ve maksimum açı değerlerini saklayan nesne
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

// Her parçanın boyutu
const data = [16, 16, 16, 16, 16, 16];

// Her parça için arka plan rengi
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

// Grafik oluştur
let myChart = new Chart(wheel, {
  // Grafik üzerinde metin göstermek için eklenti
  plugins: [ChartDataLabels],
  // Grafik Türü: Pasta
  type: "pie",
  data: {
    // Etiketler (grafikte gösterilecek değerler)
    labels: [1, 2, 3, 4, 5, 6],
    // Veri kümesi / pasta için ayarlar
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Duyarlı grafik
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // İpucu ve açıklamayı gizle
      tooltip: false,
      legend: {
        display: false,
      },
      // Pasta grafiği içinde etiketleri göster
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

// Rastgele açıya bağlı olarak değeri göster
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    // Açı değeri min ve max arasındaysa göster
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

// Döndürme sayacı
let count = 0;
// Animasyon için 100 dönüş ve sonuç için son dönüş
let resultValue = 101;

// Döndürmeyi başlat
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true; // Düğmeyi devre dışı bırak
  finalValue.innerHTML = `<p>Good Luck!</p>`; // Son değeri sıfırla

  // Rastgele duracak açıyı oluştur
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

  // Döndürme animasyonu için aralık
  let rotationInterval = window.setInterval(() => {
    // Pasta grafiği için dönme açısını ayarla
    myChart.options.rotation = myChart.options.rotation + resultValue;
    // Grafik güncelle
    myChart.update();

    // Dönme 360'dan büyükse sıfıra dön
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      // Rastgele açıya ulaşılınca değeri göster
      valueGenerator(randomDegree);
      clearInterval(rotationInterval); // Aralığı temizle
      count = 0; // Sayacı sıfırla
      resultValue = 101; // Son dönüş değerini sıfırla
    }
  }, 10); // Her 10 milisaniyede bir çalıştır
});
