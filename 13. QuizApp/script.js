function changeColor(element) {
    element.style.backgroundColor = "lightblue"; /* Tıklandığında arka plan rengini değiştir */
}

document.querySelectorAll('.oval-box').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = "lightgreen"; /* Üzerine gelindiğinde arka plan rengini değiştir */
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = ""; /* Fare çekildiğinde arka plan rengini temizle */
    });
});
