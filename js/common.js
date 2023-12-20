// document는 html이라고 생각하면 됨
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // Attribute는 html의 속성을 말하므로, setAttribute는 html 속성을 지정할 때 사용
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});


const thisyear = document.querySelector(".this-year");
thisyear.textContent = new Date().getFullYear(); //올해 연도