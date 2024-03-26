let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
  ]; // Zar resimlerinin adlarını içeren dizi
  let dice = document.querySelectorAll("img"); // Tüm zar resimlerini seç
  
  function roll() {
    dice.forEach(function(die) {
      die.classList.add("shake"); // Tüm zar resimlerine sallanma efekti ekleyin
    });
    setTimeout(function() {
      dice.forEach(function(die) {
        die.classList.remove("shake"); // Sallanma efektini kaldırın
      });
      let dieOneValue = Math.floor(Math.random() * 6); // İlk zarın rastgele değerini oluşturun
      let dieTwoValue = Math.floor(Math.random() * 6); // İkinci zarın rastgele değerini oluşturun
      console.log(dieOneValue, dieTwoValue); // Rastgele değerleri konsola yazdırın
      document.querySelector("#die-1").setAttribute("src", images[dieOneValue]); // İlk zarın resmini ayarlayın
      document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]); // İkinci zarın resmini ayarlayın
      document.querySelector("#total").innerHTML =
        "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1)); // Toplamı hesaplayıp HTML içine yerleştirin
    }, 1000); // 1000 milisaniye (1 saniye) sonra çalıştır
}
roll(); // roll fonksiyonunu çağırarak oyunu başlat
  