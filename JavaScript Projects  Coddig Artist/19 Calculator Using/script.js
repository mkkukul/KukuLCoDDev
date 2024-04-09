// Eşit işareti basıldığında izlemek için değişken oluştur
let equal_pressed = 0; // 0: Eşit işareti basılmadı, 1: Eşit işareti basıldı

// AC ve DEL dışındaki tüm düğmeleri seç (Refer all buttons excluding AC and DEL)
let button_input = document.querySelectorAll(".input-button"); // AC ve DEL hariç tüm butonları seç

// input, equal, clear ve erase'e başvur (Refer input, equal, clear and erase)
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// Sayfa yüklendiğinde input değerini boşalt (Clear input value when the window loads)
window.onload = () => {
  input.value = ""; // Sayfa yüklendiğinde giriş alanını boşalt
};

// Her bir sınıfa forEach ile erişerek dinleyici ekle (Access each class using forEach)
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // Her butonun değerini görüntüle (Display value of each button)
    input.value += button_class.value;
  });
});

// Eşit işaretine tıklandığında kullanıcının girdisini çöz (Solve the user's input when clicked on equal sign)
equal.addEventListener("click", () => {
  equal_pressed = 1; // Eşit işareti basıldı olarak işaretle
  let inp_val = input.value;
  try {
    // Kullanıcının girdisini değerlendir (Evaluate user's input)
    let solution = eval(inp_val);
    // Doğal sayılar için true, ondalıklı sayılar için false (True for natural numbers, false for decimals)
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2); // İki ondalık hane ile göster (Display with two decimal places)
    }
  } catch (err) {
    // Kullanıcı geçersiz bir giriş yaptığında uyarı ver (Alert if user has entered invalid input)
    alert("Geçersiz Giriş");
  }
});

// Tüm girişi temizle (Clear Whole Input)
clear.addEventListener("click", () => {
  input.value = "";
});

// Bir rakamı sil (Erase Single Digit)
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

//! equal_pressed: Eşit işareti tuşuna basılıp basılmadığını izleyen bir değişken.
//! button_input: AC ve DEL hariç tüm tuşları seçmek için kullanılan değişken.
//! input: Kullanıcının giriş yaptığı metin alanını temsil eden değişken.
//! equal: Eşit işareti (=) düğmesini temsil eden değişken.
//! clear: Tüm girişi temizle düğmesini temsil eden değişken.
//! erase: Tek rakamı sil düğmesini temsil eden değişken.
//! window.onload: Sayfa yüklendiğinde çalışan bir fonksiyon, input değerini sıfırlar.
//! button_input.forEach: Her düğmeye dinleyici eklemek için kullanılan bir döngü.
//! equal.addEventListener: Eşit işareti düğmesine tıklama olayını dinleyen bir fonksiyon.
//! clear.addEventListener: Tüm girişi temizle düğmesine tıklama olayını dinleyen bir fonksiyon.
//! erase.addEventListener: Tek rakamı sil düğmesine tıklama olayını dinleyen bir fonksiyon.