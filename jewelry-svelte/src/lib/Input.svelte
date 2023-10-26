<script>
	import { tt } from '$lib/services/stores';

	export let value = '';
	export let placeholder = '';
	/**
	 * @type {any}
	 */
	let variant;
	/**
	 *
	 * @param {any} val
	 */
	function isValidEmail(val) {
		let jsonString = JSON.stringify(val);
		if (
			(jsonString.indexOf('@') != -1 && jsonString.indexOf('.') != -1) ||
			jsonString.indexOf('@') < jsonString.indexOf('.')
		) {
			console.log(val);
			return true;
		} else {
			console.log('ii');
			return false;
		}
	}
	$: isValidEmail(value) ? (variant = 'success') : (variant = 'error');
</script>

<input
	class="input-{variant}"
	type="text"
	bind:value
	{placeholder}
	on:change={() => isValidEmail({ value })}
/>
