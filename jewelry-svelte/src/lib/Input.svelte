<script>
// @ts-nocheck

	import { tt } from '$lib/services/stores';

	export let value = '';
	export let placeholder = '';
	// @ts-ignore
	export let required = undefined;
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
		if(!isValid) {
			value = '';
		}
	}
	/**
	 * @type {any}
	 */
	let variant;
	
	$: if(!isValid) {
		variant = 'error';
	} else {
		variant = undefined;
	};
</script>

<input
	{required}
	class="input input-{variant} pl-2 bg-white rounded-md"
	bind:value={value}
	type="text"
	{placeholder}
	on:change={handleChange}
/>
{#if !isValid}
<span class="text-red-500">Enter valid email!</span>
{/if}
{value}

