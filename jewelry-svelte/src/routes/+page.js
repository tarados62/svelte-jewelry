// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
/** @type {import('./$types').PageLoad} */
export function load() {
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
		countries: countryList
	};
}
