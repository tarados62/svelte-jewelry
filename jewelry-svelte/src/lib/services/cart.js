import { get } from 'svelte/store';
import { productId, cart } from '../../stores';
import { getItems, setItems } from '../../utils';

export function addToCart(/** @type {{ id: any; quantity: number; }} */ product) {
	const cartItems = get(cart);
	for (let item of cartItems) {
		if (item.id === product.id) {
			item.quantity += 1;
			cart.set(cartItems);
			setItems(cartItems);
			return;
		}
	}
	cartItems.push(product);
	cart.set([...cartItems]);
	setItems(cartItems);
}

export function loadCart() {
	const items = getItems();
	cart.set(items);
}
// 	delProduct(state, index) {
// 		state.cartProducts.splice(index, 1);
// 		cart.setItems(state.cartProducts);
// 	},
// 	increment(state, index) {
// 		changeQuantity(state, index, 1);
// 		cart.setItems(state.cartProducts);
// 	},
// 	decrement(state, index) {
// 		changeQuantity(state, index, -1);
// 		cart.setItems(state.cartProducts);
// 	},
// 	clearBasket(state) {
// 		state.cartProducts = [];
// 	},
// 	addProductToCart(state, product) {
// 		state.cartProducts.push(product);
// 		cart.setItems(state.cartProducts);
// 	},
// 	addProductFromCart(state) {
// 		state.cartProducts = cart.getItems();
// 	}
// };
