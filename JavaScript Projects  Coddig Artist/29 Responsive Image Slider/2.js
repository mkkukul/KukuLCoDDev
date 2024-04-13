let i = 0; // mevcut slayt
let j = 4; // toplam slaytlar

const dots = document.querySelectorAll(".dot-container button"); //! tüm noktaları seç
const images = document.querySelectorAll(".image-container img"); //! tüm resimleri seç

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active"); //1 mevcut slaytın aktifliğini kaldır
    i = ( j + i + 1) % j; //! bir sonraki slaytın indeksini belirle
    document.getElementById("content" + (i+1)).classList.add("active"); //! yeni slaytı aktif hale getir
    indicator( i+ 1 ); //! noktayı güncelle
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active"); //! mevcut slaytın aktifliğini kaldır
    i = (j + i - 1) % j; //! bir önceki slaytın indeksini belirle
    document.getElementById("content" + (i+1)).classList.add("active"); //! yeni slaytı aktif hale getir
    indicator(i+1); // noktayı güncelle
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent"; // tüm noktaların arka plan rengini sıfırla
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec"; // belirli noktanın arka plan rengini ayarla
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active"); // tüm resimlerin aktifliğini kaldır
    });
    document.getElementById("content" + index).classList.add("active"); // belirli slaytı aktif hale getir
    i = index - 1; // mevcut slaytın indeksini güncelle
    indicator(index); // noktayı güncelle
}

