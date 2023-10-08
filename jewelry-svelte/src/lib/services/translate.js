import { get } from 'svelte/store';
import { localeName, tt } from './stores';
import { page } from '$app/stores';

export function translate() {
	let localeKey = get(localeName);
	let loc = get(page);
	let locale = loc.data.locale[localeKey];
	// @ts-ignore
	tt.set(locale);
	return;
}
