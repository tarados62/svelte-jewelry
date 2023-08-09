// @ts-nocheck
/** @type {import('./$types').LayoutData} */
export async function load() {
	const response = await fetch('https://alloe-vega-app.party.space/app/locales');
	const data = await response.json();
	let keyLocales = Object.keys(data);
	let locales = [];
	let loc = {};
	for (let i = 0; i < keyLocales.length; i++) {
		let locale = {};
		locale[keyLocales[i].slice(3)] = data[keyLocales[i]];
		loc[keyLocales[i].slice(3)] = data[keyLocales[i]];
		locales.push(locale);
	}
	let countries = Object.keys(loc);
	let locale_ru = locales[0]['RU'];
	let locale_ua = locales[1]['UA'];
	let locale_en = locales[2]['EN'];
	let locale_es = locales[3]['ES'];
	return {
		links: [
			{ route: '/', title: 'MenuHome' },
			{ route: '/about', title: 'MenuAboutUs' },
			{ route: '/contacts', title: 'MenuContacts' }
		],
		locales,
		locale_en,
		locale_es,
		locale_ua,
		locale_ru,
		countries
	};
}
