/** @type {import('./$types').PageLoad} */
export function load() {
	const links = [
		{ route: '/', title: 'MenuHome' },
		{ route: '/about', title: 'MenuAboutUs' },
		{ route: '/contacts', title: 'MenuContacts' }
	];
	return { links };
}
