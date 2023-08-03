import { readable } from 'svelte/store';
// @ts-ignore
export const localeStore = readable({}, async (set) => {
	const res = await fetch('https://alloe-vega-app.party.space/app/locales');
	const locale = await res.json();
	console.log('ffg');
	set(locale);
	return () => {};
});
