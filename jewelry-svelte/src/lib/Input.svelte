<script>
// @ts-nocheck
	export let value = '';
	export let placeholder = '';
	// @ts-ignore
	export let required = false;
	export let validationEnabled = false;
	export let email = false;
	let isValid = true;
	const errorStatus = {};
	/**
	 *
	 * @param {any} val
	 */
	function validateEmail(val) {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (emailRegex.test(value) == false) {
			errorStatus.message = 'Enter email';
		}
		return emailRegex.test(val);
	};
	function validateName() {
		const textRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
		if (textRegex.test(value) == false) {
			errorStatus.message = 'You entered the wrong character';
		}
		return textRegex.test(value);
    };
	/**
	 *
	 * @param {any} event
	 */
	function handleChange(event) {
		value = event.target.value;
		if (validationEnabled) {
			email ? isValid = validateEmail(value) : isValid = validateName(value);
		}	
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
<span class="text-red-500">{errorStatus.message}!</span>
{/if}
{value}

