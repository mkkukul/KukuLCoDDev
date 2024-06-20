const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};
