// .option-button sınıfına sahip tüm öğeleri seçer ve NodeList'i optionsButtons değişkenine atar
let optionsButtons = document.querySelectorAll(".option-button");

// .adv-option-button sınıfına sahip tüm öğeleri seçer ve NodeList'i advancedOptionButton değişkenine atar
let advancedOptionButton = document.querySelectorAll(".adv-option-button");

// Font adını seçmek için kullanılacak select elementini seçer ve fontName değişkenine atar
let fontName = document.getElementById("fontName");

// Font boyutunu seçmek için kullanılacak select elementini seçer ve fontSizeRef değişkenine atar
let fontSizeRef = document.getElementById("fontSize");

// Metin giriş alanını seçer ve writingArea değişkenine atar
let writingArea = document.getElementById("text-input");

// Bağlantı oluşturmak için kullanılacak butonu seçer ve linkButton değişkenine atar
let linkButton = document.getElementById("createLink");

// Metnin hizalanacağı butonları seçer ve NodeList'i alignButtons değişkenine atar
let alignButtons = document.querySelectorAll(".align");

// Metin arasındaki boşluğu ayarlamak için kullanılacak butonları seçer ve NodeList'i spacingButtons değişkenine atar
let spacingButtons = document.querySelectorAll(".spacing");

// Metnin biçimlendirilmesi için kullanılacak butonları seçer ve NodeList'i formatButtons değişkenine atar
let formatButtons = document.querySelectorAll(".format");

// Metnin stili (örneğin altı çizili) için kullanılacak butonları seçer ve NodeList'i scriptButtons değişkenine atar
let scriptButtons = document.querySelectorAll(".script");

// Kullanılabilir font listesi
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
];

// Sayfa yüklendiğinde başlangıç ayarlarını yapmak için kullanılacak fonksiyon
const initializer = () => {
  // Butonları vurgulamak için gerekli fonksiyonları çağırır
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  // Font adları için seçenek listesi oluşturur ve fontName select elementine ekler
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  // Font boyutları için seçenek listesi oluşturur ve fontSizeRef select elementine ekler
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  // Varsayılan font boyutunu 3 olarak ayarlar
  fontSizeRef.value = 3;
};

// Metin üzerinde belirli bir komutu uygulamak için kullanılacak fonksiyon
const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

// Değer parametresi gerektirmeyen işlemler için buton olay dinleyicilerini ayarlar
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

// Değer parametresi gerektiren gelişmiş seçenekler için buton olay dinleyicilerini ayarlar
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

// Link oluşturmak için buton olay dinleyicisini ayarlar
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

// Tıklanan butonu vurgular
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

// Vurgulanmış butonları kaldırır
const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

// Sayfa yüklendiğinde initializer fonksiyonunu çağırır
window.onload = initializer();
