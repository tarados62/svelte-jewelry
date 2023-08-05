// @ts-nocheck
/** @type {import('./$types').LayoutData} */
export async function load() {
	const response = await fetch('https://alloe-vega-app.party.space/app/locales');
	const locales = await response.json();
	return {
		links: [
			{ route: '/', title: 'MenuHome' },
			{ route: '/about', title: 'MenuAboutUs' },
			{ route: '/contacts', title: 'MenuContacts' }
		],
		locales
	};
}
