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

pages.addEventListener('click', (e) => {
  e.preventDefault();
  pageLoad(e.target.innerText);
})








