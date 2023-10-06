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

export function addToCart(/** @type {{ id: any; quantity: number; availability: any}} */ product) {
	/**
	 * @type {{ id: any; quantity: number; availability: any }[]}
	 */
	const cartItems = get(cart);
	const max = product.availability[0].quantity;
	console.log(max);
	for (let item of cartItems) {
		if (item.id === product.id) {
			if (item.quantity < max) {
				item.quantity += 1;
			}
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
