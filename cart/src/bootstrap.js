import faker from 'faker';

const mount = (el) => {
    const cartContent = `<div>You have ${faker.random.number() % 10} in cart</div>`;
    el.innerHTML = cartContent;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('cart-dev');
    if (el) mount(el);
}

export { mount };