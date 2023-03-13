function pageHead(){
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
  menuLink.textContent = 'Menu';

  const order = document.createElement('div');
  order.classList.add('order');
  const orderLink = document.createElement('a');
  orderLink.textContent = 'Order';

  headerOptions.append(menu, order);
  menu.append(menuLink);
  order.append(orderLink);

  const footer = document.createElement('footer');
  const footerGitHub = document.createElement('div');
  footerGitHub.classList.add('footer-github');
  const gitLink = document.createElement('a');
  gitLink.setAttribute('href', '');
  gitLink.textContent = 'goldjared';

  content.append(footer);
  footer.append(footerGitHub);
  footerGitHub.append(gitLink);
}

export {pageHead};