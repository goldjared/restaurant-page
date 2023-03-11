// {/* <main>
//     <img src="" alt="head chef">
//     <div class="text">Enidras is more.</div>
//   </main> */}
import image from './askelad.jpg';


function pageBody(){
  // const content = document.querySelector('#content');
  const main = document.createElement('main');
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