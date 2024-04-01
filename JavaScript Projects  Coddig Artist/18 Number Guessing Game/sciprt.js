//! Mesajları almak için gerekli elementleri seçer
var msg1 = document.getElementById("message1"); // İlk mesajı seçer
var msg2 = document.getElementById("message2"); // İkinci mesajı seçer
var msg3 = document.getElementById("message3"); // Üçüncü mesajı seçer

/!/ Rasgele bir sayı seçer (1 ile 100 arasında)
var answer = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rasgele bir sayı seçer

// Tahmin sayısını ve yapılan tahminleri izlemek için değişkenler oluşturur
var no_of_guesses = 0; // Tahmin sayısını saklar
var guessed_nums = []; // Yapılan tahminleri saklar

// Oyunu başlatan fonksiyon
function play() {
    // Kullanıcının tahminini alır
    var user_guess = document.getElementById("guess").value; // Kullanıcının tahminini alır

    // Girilen tahminin 1 ile 100 arasında olup olmadığını kontrol eder
    if (user_guess < 1 || user_guess > 100) { // Girilen sayının 1 ile 100 arasında olup olmadığını kontrol eder
        alert("Lütfen 1 ile 100 arasında bir sayı girin."); // Kullanıcıya uyarı mesajı gösterir
    } else {
        // Yapılan tahmin sayısını ve yapılan tahminleri günceller
        guessed_nums.push(user_guess); // Yapılan tahmini listeye ekler
        no_of_guesses += 1; // Tahmin sayısını artırır

        // Kullanıcının tahminini doğru cevapla karşılaştırır
        if (user_guess < answer) { // Kullanıcının tahmini doğru cevaptan küçükse
            msg1.textContent = "Your guess is too low."; // İlk mesajı "Tahmininiz çok düşük." olarak ayarlar
            msg2.textContent = "No. of guesses: " + no_of_guesses; // İkinci mesajı tahmin sayısını gösterir
            msg3.textContent = "Guessed numbers are: " + guessed_nums; // Üçüncü mesajı yapılan tahminleri gösterir
        } else if (user_guess > answer) { // Kullanıcının tahmini doğru cevaptan büyükse
            msg1.textContent = "Your guess is too high."; // İlk mesajı "Tahmininiz çok yüksek." olarak ayarlar
            msg2.textContent = "No. of guesses: " + no_of_guesses; // İkinci mesajı tahmin sayısını gösterir
            msg3.textContent = "Guessed numbers are: " + guessed_nums; // Üçüncü mesajı yapılan tahminleri gösterir
        } else if (user_guess == answer) { // Kullanıcının tahmini doğru cevaba eşitse
            msg1.textContent = "Yippie You Win!!"; // İlk mesajı "Tebrikler, Kazandınız!" olarak ayarlar
            msg2.textContent = "The number was: " + answer; // İkinci mesajı doğru sayıyı gösterir
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses"; // Üçüncü mesajı yapılan tahmin sayısını gösterir
            // Oyunu bitirir, butonu devre dışı bırakır
            document.getElementById("my_btn").disabled = true; // Tahmin butonunu devre dışı bırakır
        }
    }
}
