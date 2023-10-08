import { writable } from 'svelte/store';

export const localeName = writable('EN');

export const productId = writable(0);

/**
 * @type {import('svelte/store').Writable<import('$lib/types').CartProduct[]>}
 */
export let cart = writable([]);

/**
 * @type{any}
 */
export const tt = writable({});
