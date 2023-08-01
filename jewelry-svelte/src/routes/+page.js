// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch('https://alloe-vega-app.party.space/app/locales');
	const item = await res.json();
	const en = item['en-EN'];
	const es = item['es-ES'];
	const ua = item['uk-UA'];

	const linkList = [
		{ route: '/', title: 'MenuHome' },
		{ route: '/about', title: 'MenuAboutUs' },
		{ route: '/contacts', title: 'MenuContacts' }
	];
	const countryList = [
		{
			flag_url: '$lib/images/en.svg',
			iso_code2: 'EN',
			name_en: 'England'
		},
		{
			flag_url: '$lib/images/es.svg',
			iso_code2: 'ES',
			name_en: 'Spain'
		},
		{
			flag_url: '$lib/images/uk.svg',
			iso_code2: 'UK',
			name_en: 'Ukraine'
		}
	];
	return {
		links: linkList,
		countries: countryList,
		en: en,
		es: es,
		ua: ua
	};
}
