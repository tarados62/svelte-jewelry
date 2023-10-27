<script>
	import { tt } from '$lib/services/stores';

	export let value = '';
	export let placeholder = '';
	export const required = false;
	let isValid = true;
	/**
	 *
	 * @param {any} email
	 */
	function validateEmail(email) {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		console.log(emailRegex.test(email));
		return emailRegex.test(email);
	};
	/**
	 *
	 * @param {any} event
	 */
	function handleChange(event) {
		value = event.target.value;
		isValid = validateEmail(value);
	}
	/**
	 * @type {any}
	 */
	let variant;
	
	$: isValid ? value == '' ? (variant = 'warning') : (variant = 'success') : (variant = 'error');
</script>

<input
	{required}
	class="input-{variant}"
	type="email"
	bind:value={value}
	{placeholder}
	on:change={handleChange}
/>
{#if !isValid}
<p class="error">Enter valid email!</p>
{/if}
{value}
