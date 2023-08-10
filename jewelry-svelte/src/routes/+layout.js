// @ts-nocheck
/** @type {import('./$types').LayoutData} */
export async function load() {
	const response = await fetch('https://alloe-vega-app.party.space/app/locales');
	const data = await response.json();
	let keyLocales = Object.keys(data);
	let locale = {};
	for (let i = 0; i < keyLocales.length; i++) {
		locale[keyLocales[i].slice(3)] = data[keyLocales[i]];
	}
	let countries = Object.keys(locale);
	return {
		links: [
			{ route: '/', title: 'MenuHome' },
			{ route: '/about', title: 'MenuAboutUs' },
			{ route: '/contacts', title: 'MenuContacts' }
		],
		locale,
		countries
	};
}
