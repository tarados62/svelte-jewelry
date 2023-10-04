import { get } from 'svelte/store';
import { cart } from './stores';

function getItems() {
	let items = localStorage.getItem('cart');
	if (items) {
		items = JSON.parse(items);
	} else {
		// @ts-ignore
		items = [];
	}
	return items;
}

function clearLocalStorage() {
	localStorage.removeItem('cart');
}

// @ts-ignore
function setItems(items) {
	try {
		items = JSON.stringify(items);
		localStorage.setItem('cart', items);
	} catch (err) {
		// @ts-ignore
		console.log('Поймали ошибку! Вот она: ', err.message);
	}
}

export function addToCart(/** @type {{ id: any; quantity: number; }} */ product) {
	/**
	 * @type {{ id: any; quantity: number; }[]}
	 */
	const cartItems = get(cart);
	for (let item of cartItems) {
		if (item.id === product.id) {
			item.quantity += 1;
			// @ts-ignore
			cart.set(cartItems);
			setItems(cartItems);
			return;
		}
	}
	cartItems.push(product);
	// @ts-ignore
	cart.set([...cartItems]);
	setItems(cartItems);
}

export function decrement(/** @type {{ id: any; quantity: number; }} */ product) {
	/**
	 * @type {any[]}
	 */
	let cartItems = get(cart);
	for (let item of cartItems) {
		if (item.id === product.id) {
			if (product.quantity > 1) {
				product.quantity -= 1;
				// @ts-ignore
				cart.set(cartItems);
			} else {
				console.log(item.quantity);
				cartItems = cartItems.filter((cartItem) => cartItem != product);
				// @ts-ignore
				cart.set(cartItems);
			}
			setItems(cartItems);
			return;
		}
	}
}

export function loadCart() {
	const items = getItems();
	// @ts-ignore
	cart.set(items);
}

export function removeProduct(/** @type {{ id: any; quantity: number; }} */ product) {
	/**
	 * @type {any[]}
	 */
	let cartItems = get(cart);
	cartItems = cartItems.filter((cartItem) => cartItem != product);
	// @ts-ignore
	cart.set(cartItems);
	setItems(cartItems);
	return;
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
