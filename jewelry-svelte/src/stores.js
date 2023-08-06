import { writable } from 'svelte/store';
// @ts-ignore
export const localeSet = writable({
	country: 'EN',
	img: 'en'
});
