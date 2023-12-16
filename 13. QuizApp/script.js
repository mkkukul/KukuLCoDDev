function changeColor(element) {
    element.style.backgroundColor = "lightblue";
    element.style.color = "black";
}

document.querySelectorAll('.oval-box').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = "lightgreen";
        this.style.color = "black";
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = "";
        this.style.color = "khaki";
    });
});
