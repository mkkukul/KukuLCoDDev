const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("dragstart", () => {
