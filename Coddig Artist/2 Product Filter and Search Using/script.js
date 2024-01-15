let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };
 // products.data dizisindeki her ürün için döngü
for (let i of products.data) {
    // Yeni bir div elementi oluştur (kart)
    let card = document.createElement("div");
    
    // Kart, kategoriye sahip olmalı ve başlangıçta gizli olmalıdır (hide sınıfı ile)
    card.classList.add("card", i.category, "hide");
    
    // Resim container (image-container) div'i oluştur
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    // Resim etiketi (img) oluştur
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    
    // Resim etiketini resim container div'ine ekle
    imgContainer.appendChild(image);
    
    // Kart elementine resim container div'ini ekle
    card.appendChild(imgContainer);
  
    // İçerik container (container) div'i oluştur
    let container = document.createElement("div");
    container.classList.add("container");
    
    // Ürün adı (productName) başlığı oluştur
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    
    // Ürün adı başlığını içerik container div'ine ekle
    container.appendChild(name);
  
    // Fiyat (price) başlığı oluştur
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    
    // Fiyat başlığını içerik container div'ine ekle
    container.appendChild(price);
    
    // Kart elementine içerik container div'ini ekle
    card.appendChild(container);
    
    // "products" id'li HTML elementine kartı ekle
    document.getElementById("products").appendChild(card);
}
// Ürünleri filtrelemek için kullanılan fonksiyon
function filterProduct(value) {
    // Buton sınıf kodu
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      // Değer, innerText ile eşitse
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    // Tüm kartları seç
    let elements = document.querySelectorAll(".card");
  
    // Tüm kartlar üzerinde döngü yap
    elements.forEach((element) => {
      // 'all' butonuna tıklanıldığında tüm kartları göster
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        // Element kategori sınıfını içeriyorsa
        if (element.classList.contains(value)) {
          // Kategoriye göre kartı göster
          element.classList.remove("hide");
        } else {
          // Diğer kartları gizle
          element.classList.add("hide");
        }
      }
    });
  }
  
  // Arama butonu tıklanıldığında
  document.getElementById("search").addEventListener("click", () => {
    // Başlangıç değerleri
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    // Tüm elementler üzerinde döngü yap
    elements.forEach((element, index) => {
      // Eğer metin arama değerini içeriyorsa
      if (element.innerText.includes(searchInput.toUpperCase())) {
        // Eşleşen kartı göster
        cards[index].classList.remove("hide");
      } else {
        // Diğer kartları gizle
        cards[index].classList.add("hide");
      }
    });
  });
  
  // Sayfa yüklendiğinde başlangıçta tüm ürünleri göster
  window.onload = () => {
    filterProduct("all");
  };
  
   