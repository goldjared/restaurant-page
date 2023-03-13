import menu1 from "./images/pexels-kristina-paukshtite-1998920.jpg";
import menu2 from "./images/pexels-marc-roy-1832016.jpg";
import menu3 from "./images/pexels-solodsha-7664397.jpg";
import menu4 from "./images/pexels-steve-3789885.jpg";

function menuPage() {
  const main = document.createElement('main');
  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');
  menuHeader.textContent = 'Enidras Menu';

  const menuChoice1 = document.createElement('div');
  menuChoice1.classList.add('menu-choice');
  menuChoice1.textContent = 'Mauris consectetur lectus';
  const menuChoice1Img = document.createElement('img');
  menuChoice1Img.src = menu1;

  const menuChoice2 = document.createElement('div');
  menuChoice2.classList.add('menu-choice');
  menuChoice2.textContent = 'In a odio vitae';
  const menuChoice2Img = document.createElement('img');
  menuChoice2Img.src = menu2;

  const menuChoice3 = document.createElement('div');
  menuChoice3.classList.add('menu-choice');
  menuChoice3.textContent = 'Mauris consectetur lectus';
  const menuChoice3Img = document.createElement('img');
  menuChoice3Img.src = menu3;

  const menuChoice4 = document.createElement('div');
  menuChoice4.classList.add('menu-choice');
  menuChoice4.textContent = 'Cras hendrerit magna';
  const menuChoice4Img = document.createElement('img');
  menuChoice4Img.src = menu4;
  

  content.append(main);
  main.append(menuHeader, menuChoice1, menuChoice2, menuChoice3, menuChoice4, menuChoice1Img
    , menuChoice2Img, menuChoice3Img, menuChoice4Img);
  console.log('menu page');
};

export { menuPage };