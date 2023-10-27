<script lang="ts">
	import { InputChip, toastStore } from '@skeletonlabs/skeleton';
	import { tt } from '$lib/services/stores';

	// export let valueInput;

	function isValidEmail(value: string): boolean {
		console.log('jjjjj');
		return value.includes('@') && value.includes('.');
	}

	function onInvalidHandler(event: any): void {
		toastStore.trigger({
			message: `"${event.detail.input}" is an invalid value. Please try again!`,
			background: 'variant-filled-error'
		});
	}
	let name = '';
</script>

<!-- <input class="input" title="Input (text)" type="text" placeholder="input text" /> -->
<InputChip
	name="chips-example-emails"
	placeholder="Enter Emails..."
	chips="variant-filled-secondary"
	validation={isValidEmail}
/>
<!-- <InputChip ... on:invalid={onInvalidHandler} />
<InputChip ... max={3} />
<InputChip ... minlength={2} maxlength={5} /> -->

<!-- <label for="name">{name}</label>
<input id="name" bind:value={name} /> -->
