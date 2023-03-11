// {/* <main>
//     <img src="" alt="head chef">
//     <div class="text">Enidras is more.</div>
//   </main> */}



function pageBody(){
  // const content = document.querySelector('#content');
  const main = document.createElement('main');
  const img = document.createElement('img');
  img.src = './askelad.jpg'

  content.append(main);
  main.append(img);
}

export {pageBody};