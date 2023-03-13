

function pageHead(){
  // const content = document.querySelector('#content');
  const header = document.createElement('header');
  const headerName = document.createElement('div');
  headerName.classList.add('header-name');
  headerName.textContent = 'Enidras';
  const headerImg = document.createElement('img');

  content.append(header);
  header.append(headerName);
  headerName.append(headerImg);


  const headerOptions = document.createElement('div');
  headerOptions.classList.add('header-options');
  header.append(headerOptions);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuLink = document.createElement('a');
  // menuLink.setAttribute('href');
  menuLink.textContent = 'Menu';

  const order = document.createElement('div');
  order.classList.add('order');
  const orderLink = document.createElement('a');
  // orderLink.setAttribute('href');
  orderLink.textContent = 'Order';

  const contact = document.createElement('div');
  contact.classList.add('contact');
  const contactLink = document.createElement('a');
  contactLink.setAttribute('href', 'linkurl');
  contactLink.textContent = 'Contact';


  headerOptions.append(menu, order, contact);
  menu.append(menuLink);
  order.append(orderLink);
  contact.append(contactLink);

  const footer = document.createElement('footer');
  const footerGitHub = document.createElement('div');
  footerGitHub.classList.add('footer-github');
  const gitLink = document.createElement('a');
  gitLink.setAttribute('href', 'linkurl');
  gitLink.textContent = 'goldjared';

  content.append(footer);
  footer.append(footerGitHub);
  footerGitHub.append(gitLink);
}

export {pageHead};