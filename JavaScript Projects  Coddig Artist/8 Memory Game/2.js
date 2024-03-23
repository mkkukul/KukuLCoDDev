// Get the necessary elements from HTML
// HTML'den gerekli elementleri al
const moves = document.getElementById("moves-count"); // Moves count element
// Hamle sayısı öğesi
const timeValue = document.getElementById("time"); // Time element
// Zaman öğesi
const startButton = document.getElementById("start"); // Start button
// Başlatma düğmesi
const stopButton = document.getElementById("stop"); // Stop button
// Durdurma düğmesi
const gameContainer = document.getElementById(".game-container"); // Game container element
// Oyun konteyneri öğesi
const result = document.getElementById("result"); // Result element
// Sonuç öğesi
const controls = document.querySelector(".controls-container"); // Controls container element
// Kontroller konteyneri öğesi

// Variables
// Değişkenler
let cards; // Cards
// Kartlar
let interval; // Time interval
// Zaman aralığı
let firstCard = false; // First selected card
// İlk seçilen kart
let secondCard = false; // Second selected card
// İkinci seçilen kart

// Items array with animal names and images
// Hayvan isimleri ve resimleri içeren bir öğeler dizisi
const items = [
    { name: "bee", image: "bee.png" },
    { name: "crocodile", image: "crocodile.png" },
    { name: "macaw", image: "macaw.png" },
    { name: "gorilla", image: "gorilla.png" },
    { name: "tiger", image: "tiger.png" },
    { name: "monkey", image: "monkey.png" },
    { name: "chameleon", image: "chameleon.png" },
    { name: "piranha", image: "piranha.png" },
    { name: "anaconda", image: "anaconda.png" },
    { name: "sloth", image: "sloth.png" },
    { name: "cockatoo", image: "cockatoo.png" },
    { name: "toucan", image: "toucan.png" },
];

//Initial Time (Başlangıç Zamanı)
let seconds = 0, // Saniye
  minutes = 0; // Dakika

//Initial moves and win count (Başlangıç hamle ve kazanma sayısı)
let movesCount = 0, // Hamle Sayısı
  winCount = 0; // Kazanma Sayısı

//For timer (Zamanlayıcı için)
const timeGenerator = () => {
  seconds += 1; // Saniyeyi artır
  //minutes logic
  if (seconds >= 60) {
    minutes += 1; // Dakikayı artır
    seconds = 0; // Saniyeyi sıfırla
  }
  //format time before displaying (Görüntülemeden önce zamanı biçimlendir)
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds; // Saniye değeri
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes; // Dakika değeri
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`; // HTML içeriği olarak zamanı ayarla
};

//For calculating moves (Hamleleri hesaplama)
const movesCounter = () => {
  movesCount += 1; // Hamle sayısını artır
  moves.innerHTML = `<span>Moves:</span>${movesCount}`; // HTML içeriği olarak hamle sayısını ayarla
};

//Pick random objects from the items array (Öğeler dizisinden rastgele nesneler seç)
const generateRandom = (size = 4) => {
  //temporary array (geçici dizi)
  let tempArray = [...items]; // Geçici dizi oluştur
  //initializes cardValues array (kart değerlerini başlatır)
  let cardValues = []; // Kart değerleri dizisi başlat
  //size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2; // Boyut, çift olmalıdır (4*4 matris)/2 çünkü nesnelerin çiftleri var
  //Random object selection (Rastgele nesne seçimi)
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length); // Rastgele dizin seçimi
    cardValues.push(tempArray[randomIndex]); // Kart değerleri dizisine rastgele nesne ekle
    //once selected remove the object from temp array (bir kere seçildikten sonra nesneyi geçici diziden kaldır)
    tempArray.splice(randomIndex, 1); // Seçilen nesneyi geçici diziden kaldır
  }
  return cardValues; // Kart değerlerini döndür
};
// Create Cards
// before => front side (contains question mark)
// after => back side (contains actual image);
// data-card-values is a custom attribute which stores the names of the cards to match later
// (Kartlar Oluşturuluyor
// Önce => Ön taraf (soru işareti içerir)
// Sonra => Arka taraf (gerçek resmi içerir);
// data-card-values, kartların daha sonra eşleştirilecek olan adlarını depolayan özel bir özniteliktir)
const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = ""; // Oyun alanını temizle
    cardValues = [...cardValues, ...cardValues]; // Kart değerlerini kopyala
    // Basit karıştırma
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
      gameContainer.innerHTML += `
       <div class="card-container" data-card-value="${cardValues[i].name}">
          <div class="card-before">?</div>
          <div class="card-after">
          <img src="${cardValues[i].image}" class="image"/></div>
       </div>
       `;
    }
    // Izgara
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    // Kartlar
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Seçilen kart henüz eşleşmemişse sadece çalıştır (zaten eşleşmiş kart tıklandığında yok sayılır)
        if (!card.classList.contains("matched")) {
          // Tıklanan kartı çevir
          card.classList.add("flipped");
          // İlk kart ise (!firstCard çünkü firstCard başlangıçta false)
          if (!firstCard) {
            // bu nedenle mevcut kart ilk kart olacak
            firstCard = card;
            // mevcut kartın değeri firstCardValue olur
            firstCardValue = card.getAttribute("data-card-value");
          } else {
            // kullanıcı ikinci bir kart seçtiğinde hareketleri arttır
            movesCounter();
            // secondCard ve değeri
            secondCard = card;
            let secondCardValue = card.getAttribute("data-card-value");
            if (firstCardValue == secondCardValue) {
              // her iki kart da eşleşirse, bu kartlara bir sonraki seferde görmezden gelinmesi için eşleşen sınıfı ekle
              firstCard.classList.add("matched");
              secondCard.classList.add("matched");
              // bir sonraki kart şimdi ilk kart olduğundan firstCard false olarak ayarlanır
              firstCard = false;
              // kullanıcı doğru eşleşmeyi bulduğunda winCount artırılır
              winCount += 1;
              // winCount == cardValues'ın yarısı ise kontrol edilir
              if (winCount == Math.floor(cardValues.length / 2))) {
                // sonucu güncelle
                result.innerHTML = `<h2>You Won</h2>
              <h4>Moves: ${movesCount}</h4>`;
                stopGame(); // oyunu durdur
              }
            } else {
              // kartlar eşleşmezse
              // kartları normale döndür
              let [tempFirst, tempSecond] = [firstCard, secondCard];
              firstCard = false;
              secondCard = false;
              let delay = setTimeout(() => {
                tempFirst.classList.remove("flipped");
                tempSecond.classList.remove("flipped");
              }, 900);
            }
          }
        }
      });
    });
};
    // Start game
    startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    // Kontroller ve düğmelerin görünürlüğü
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    // Zamanlayıcıyı başlat
    interval = setInterval(timeGenerator, 1000);
    // İlk hamleler
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    // Değerleri ve işlev çağrılarını başlat
    initializer();
  });
  
  // Stop game
  stopButton.addEventListener(
    "click",
    (stopGame = () => {
      // Kontrolleri göster
      controls.classList.remove("hide");
      // Durdurma düğmesini gizle
      stopButton.classList.add("hide");
      // Başlat düğmesini göster
      startButton.classList.remove("hide");
      // Zamanlayıcıyı temizle
      clearInterval(interval);
    })
  );
  
  // Değerleri ve işlev çağrılarını başlat
  const initializer = () => {
    // Sonucu temizle
    result.innerText = "";
    // Kazanma sayısını sıfırla
    winCount = 0;
    // Rastgele kart değerlerini oluştur
    let cardValues = generateRandom();
    // Matrisi oluştur
    matrixGenerator(cardValues);
  };
  
  