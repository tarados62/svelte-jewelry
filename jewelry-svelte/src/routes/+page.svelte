<script>
	import { page } from '$app/stores';
	import { localeSet } from '../stores';
	const locales = $page.data.locales;
	for (let i = 0; i < locales.length; i++) {
		let counter = 0;
		for (let key in locales[i]) {
			counter++;
		}
		if ((counter = 1)) {
			const key = Object.keys(locales[i]);
			console.log(locales[i][key]);
		}
	}
</script>

<h1>{$localeSet.country}</h1>
