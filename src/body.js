import image from "./images/pexels-mayeli-herrera-❞-14927334.jpg";

function pageBody(){
  // const content = document.querySelector('#content');
  const main = document.createElement('main');
  main.classList.add('page-contents');
  const img = document.createElement('img');
  img.src = image;

  const caption = document.createElement('div');
  caption.classList.add('text');
  caption.textContent = 'Enidras is more.';
  

  content.append(main);
  main.append(img);
  main.append(caption);
}

export {pageBody};