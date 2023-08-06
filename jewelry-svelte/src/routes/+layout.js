// @ts-nocheck
/** @type {import('./$types').LayoutData} */
export async function load() {
	const response = await fetch('https://alloe-vega-app.party.space/app/locales');
	const data = await response.json();
	let keyLocales = Object.keys(data);
	let locales = [];
	for (let i = 0; i < keyLocales.length; i++) {
		let locale = {};
		locale[keyLocales[i].slice(3)] = data[keyLocales[i]];
		locales.push(locale);
	}
	return {
		links: [
			{ route: '/', title: 'MenuHome' },
			{ route: '/about', title: 'MenuAboutUs' },
			{ route: '/contacts', title: 'MenuContacts' }
		],
		locales
	};
}
