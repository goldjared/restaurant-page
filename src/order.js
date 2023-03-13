function orderPage() {
  const main = document.createElement('main');
  const orderHeader = document.createElement('div');
  orderHeader.classList.add('order-header');
  orderHeader.textContent = 'Order:';

  content.append(main);
  main.append(orderHeader);
  console.log('order pg');
};

export { orderPage };