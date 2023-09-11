import { writable } from 'svelte/store';
// @ts-ignore
export const localeName = writable('EN');
export const productId = writable(0);
export let cart = writable([]);
