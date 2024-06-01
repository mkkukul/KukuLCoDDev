const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adding dragging class to item after a delay
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  // Removing dragging class from item on dragend event
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
