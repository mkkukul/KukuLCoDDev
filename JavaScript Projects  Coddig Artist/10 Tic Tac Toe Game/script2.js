let btnRef = document.querySelectorAll(".button-option"); // tüm butonları seç
let popupRef = document.querySelector(".popup"); // popup'u seç
let newgameBtn = document.getElementById("new-game"); // yeni oyun butonunu seç
let restartBtn = document.getElementById("restart"); // yeniden başlat butonunu seç
let msgRef = document.getElementById("message"); // mesaj alanını seç
//Kazanma Deseni Dizisi
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Oyuncu 'X' ilk olarak oynar
let xTurn = true;
let count = 0;

//Tüm Butonları Devre Dışı Bırak
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //popup'u etkinleştir
  popupRef.classList.remove("hide");
};

//Tüm butonları etkinleştir (Yeni Oyun ve Yeniden Başlat için)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //popup'u devre dışı bırak
  popupRef.classList.add("hide");
};

//Bu işlev, bir oyuncu kazandığında yürütülür
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Kazandı";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Kazandı";
  }
};

//Beraberlik için Fonksiyon
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> Berabere";
};

//Yeni Oyun
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//Kazanma Mantığı
const winChecker = () => {
  //Tüm kazanma desenlerini dolaş
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Elemanların dolu olup olmadığını kontrol et
    //3 boş öğe aynı ise ve kazanırsa
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //Tüm 3 buton aynı değere sahipse, değeri winFunction'a geçir
        winFunction(element1);
      }
    }
  }
};

//Tıklandığında X/O görüntüle
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //X görüntüle
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //O görüntüle
      element.innerText = "O";
      element.disabled = true;
    }
    //Her tıklamada sayacı artır
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Her tıklamada kazanma kontrolü yap
    winChecker();
  });
});
//Sayfa yüklendiğinde Butonları Etkinleştir ve popup'u devre dışı bırak
window.onload = enableButtons;