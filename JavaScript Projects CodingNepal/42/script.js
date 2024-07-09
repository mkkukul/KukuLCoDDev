const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
  const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});
