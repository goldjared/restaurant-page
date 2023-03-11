

function pageHead(){
  // const content = document.querySelector('#content');
  const header = document.createElement('header');
  const headerName = document.createElement('header-name');
  headerName.textContent = 'Enidras';
  const headerImg = document.createElement('img');

  content.append(header);
  header.append(headerName);
  headerName.append(headerImg);


  const headerOptions = document.createElement('header-options');
  header.append(headerOptions);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuLink = document.createElement('a');
  menuLink.setAttribute('href', 'linkurl');
  menuLink.textContent = 'Menu';

  const order = document.createElement('div');
  order.classList.add('order');
  const orderLink = document.createElement('a');
  orderLink.setAttribute('href', 'linkurl');
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
}

export {pageHead};