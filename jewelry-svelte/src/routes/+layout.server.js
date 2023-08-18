// @ts-nocheck
import { SECRET_LOCALE_URL, SECRET_PRODUCTS_URL } from '$env/static/private';
/** @type {import('./$types').LayoutData} */
export async function load() {
	const response = await fetch(SECRET_LOCALE_URL);
	const resp = await fetch(SECRET_PRODUCTS_URL);
	const data = await response.json();
	const dataResp = await resp.json();
	const products = dataResp['products'];
	let keyLocales = Object.keys(data);
	let locale = {};
	for (let i = 0; i < keyLocales.length; i++) {
		locale[keyLocales[i].slice(3)] = data[keyLocales[i]];
	}
	let countries = Object.keys(locale);
	return {
		locale,
		countries,
		products
	};
}
