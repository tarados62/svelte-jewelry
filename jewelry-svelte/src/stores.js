import { writable } from 'svelte/store';

export const localeName = writable('EN');

export const productId = writable(0);

export let cart = writable([]);

export const tt = writable({});
