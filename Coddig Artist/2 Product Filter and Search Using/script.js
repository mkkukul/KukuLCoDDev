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
   