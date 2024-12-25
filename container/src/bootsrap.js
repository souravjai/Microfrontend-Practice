import { mount as productMount } from 'products/ProductIndex'
import { mount as cartMount } from 'cart/CartShow'


productMount(document.getElementById('my-product'));
cartMount(document.getElementById('my-cart'));

console.log("Container");