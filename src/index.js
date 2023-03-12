import { pageLoad } from "./loader";
import { pageHead } from "./header";
import { pageBody } from "./body";
import { pageFoot } from "./footer";
import './style.css';

const content = document.querySelector('#content');

pageLoad();
// console.log('hello');
// pageHead();
// pageBody();
// pageFoot();

const pages = document.querySelector('.header-options');

(function pageListener() { 
pages.addEventListener('click', (e) => {
  e.preventDefault();
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  let page = e.target.innerText.toLowerCase();
  pageLoad(page);
})
}());








