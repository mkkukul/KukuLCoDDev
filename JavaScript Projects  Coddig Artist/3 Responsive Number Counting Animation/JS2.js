// .num sınıfına sahip tüm öğeleri seçer
let valueDisplays = document.querySelectorAll(".num");

// Her bir değer öğesi için döngü oluşturur
valueDisplays.forEach((valueDisplay) => {
    // Başlangıç değerini 0 olarak ayarlar
    let startValue = 0;

    // Bitiş değerini, öğenin data-val özniteliğinden alarak ayarlar
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    // Animasyonun toplam süresini hesaplar
    let duration = Math.floor(interval / endValue);

    // Sayacı oluşturur ve her bir öğe için animasyonu başlatır
    let counter = setInterval(function() {
        // Başlangıç değerini artırır
        startValue += 1;

        // Değeri ekrana yazar
        valueDisplay.textContent = startValue;

        // Eğer başlangıç değeri, bitiş değerine ulaşırsa, sayacı durdurur
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});
