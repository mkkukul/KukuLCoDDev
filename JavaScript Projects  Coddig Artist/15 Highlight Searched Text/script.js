function search(){
    let textToSearch = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch =  textToSearch.replace(/[.*+?^${}|[\]\\]/g,"\\$&"); 
    let pattern = new RegExp(`${textToSearch}`,"gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`) 
}
//! function search() {
    // Aranacak metni alır
    //! let textToSearch = document.getElementById("text-to-search").value;
    // 
    // Paragrafı seçer
    //! let paragraph = document.getElementById("paragraph");
    // 
    // Metin içindeki özel karakterleri metin deseni için kaçış karakteri ile değiştirir
    //! textToSearch =  textToSearch.replace(/[.*+?^${}|[\]\\]/g,"\\$&"); 
    // 
    // Arama yapmak için düzenli ifade deseni oluşturur
    //! let pattern = new RegExp(`${textToSearch}`, "gi");
    // 
    // Paragraftaki metni, desene uyan her eşleşme için bir <mark> elementiyle değiştirir
    //! paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`); 
//! }
// 