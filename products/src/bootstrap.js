import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>\n`;
  }

  console.log(products);

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root-product');
  if (el) mount(el);
}

export { mount };