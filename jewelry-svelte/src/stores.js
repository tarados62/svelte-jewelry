import { writable } from 'svelte/store';
import { getItems } from './utils';
export const localeName = writable('EN');
export const productId = writable(0);
export let cart = writable([], (set) => {
	if (typeof window !== 'undefined') {
		const lsVar = getItems();
		// @ts-ignore
		// const lsVar = [1, 2, 7];
		// @ts-ignore
		set(lsVar);
		return () => {};
	}
});
