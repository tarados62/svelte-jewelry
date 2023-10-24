<script>
	import { tt } from '$lib/services/stores';

	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	/**
	 * @type {any}
	 */
	export let validation;
	/**
	 *
	 * @param {string} value
	 */
	function isValidEmail(value) {
		return value.includes('@') && value.includes('.');
	}
	/**
	 *
	 * @param {any} event
	 */
	function onInvalidHandler(event) {
		console.log(event);
	}

	$: validation ? isValidEmail(value) : NaN;
</script>

<input class="input" {type} {value} {placeholder} />
