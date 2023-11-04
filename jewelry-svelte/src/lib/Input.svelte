<script>
	import { validateEmail, validateName } from '$lib/utils/validation';

	export let value = '';
	export let placeholder = '';
	export let required = false;
	export let validationEnabled = false;
	export let email = false;
	let isValid = true;
	let errorMessage = '';
	let variant = '';

	/**
	 *
	 * @param {any} event
	 */
	function handleChange(event) {
		const currentValue = event.target.value;
		isValid = true;
		if (validationEnabled) {
			const valiationMethod = email ? validateEmail : validateName;
			const error = valiationMethod(currentValue);
			if (error) {
				isValid = false;
				errorMessage = error;
			}
		}
	}

	$: if (!isValid) {
		variant = 'error';
	} else {
		variant = '';
	}
</script>

<input
	{required}
	class="input input-{variant} pl-2 bg-white rounded-md"
	bind:value
	type="text"
	{placeholder}
	on:change={handleChange}
/>
{#if !isValid}
	<span class="text-red-500">{errorMessage}</span>
{/if}
