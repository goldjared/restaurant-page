import { pageLoad } from "./loader";
import { pageHead } from "./header";
import './style.css';

(function site() {
  const content = document.querySelector('#content');

  pageHead();
  pageLoad();

  let pages = document.querySelector('.header-options');

  (function pageListener() {
    pages.addEventListener('click', (e) => {
      e.preventDefault();
      content.removeChild(content.lastChild);
      let page = e.target.innerText.toLowerCase();
      console.log(page);
      pageLoad(page);
    });
  })();
})();











