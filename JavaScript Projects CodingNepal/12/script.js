// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
    let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
}