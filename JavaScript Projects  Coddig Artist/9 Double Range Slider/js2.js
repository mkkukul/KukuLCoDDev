//! Sayfa yüklendiğinde slider'ları başlatmak için window.onload olayını dinler
window.onload = function(){
    //! slideOne ve slideTwo fonksiyonlarını çağırarak slider'ları başlatır
    slideOne();
    slideTwo();
}

//! HTML'deki gerekli öğeleri seçer ve değişkenleri tanımlar
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0; // İki kaydırıcı arasındaki minimum mesafe
let sliderTrack = document.querySelector(".slider-track"); // Renk gradyanını oluşturmak için slider parçası
let sliderMaxValue = document.getElementById("slider-1").max; // Birinci kaydırıcının maksimum değeri

//! İlk kaydırıcıyı kontrol eden fonksiyon
function slideOne(){
    //! İki kaydırıcı arasındaki mesafe minGap'ten küçükse, birinci kaydırıcıyı doğru konuma getirir
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    //! Birinci kaydırıcının değerini gösteren HTML öğesinin içeriğini günceller
    displayValOne.textContent = sliderOne.value;
    //! Renk gradyanını güncellemek için fillColor fonksiyonunu çağırır
    fillColor();
}

//! İkinci kaydırıcıyı kontrol eden fonksiyon
function slideTwo(){
    //! İki kaydırıcı arasındaki mesafe minGap'ten küçükse, ikinci kaydırıcıyı doğru konuma getirir
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    // İkinci kaydırıcının değerini gösteren HTML öğesinin içeriğini günceller
    displayValTwo.textContent = sliderTwo.value;
    // Renk gradyanını güncellemek için fillColor fonksiyonunu çağırır
    fillColor();
}

//! Slider'ların arka plan renklerini güncelleyen fonksiyon
function fillColor(){
    // Birinci kaydırıcının yüzde cinsinden değerini hesaplar
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    // İkinci kaydırıcının yüzde cinsinden değerini hesaplar
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    // Slider parçasının arka plan rengini lineer gradyan ile belirler
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
