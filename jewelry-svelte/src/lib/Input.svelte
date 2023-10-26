<script>
	
	import { tt } from '$lib/services/stores';
	import { error } from '@sveltejs/kit';

	export let value = '';
	export let title = 'Enter email';
	export let placeholder = 'Enter email';
	
	// export let validation = false;
	let msg = '';
	let variant = 'warning';
	/**
	 * @type {any}
	 */
	let invalidEmail;
	/**
 	*
 	* @param {any} val
 	*/
	 function checkEmailFormat(val) {
		const jsonString = JSON.stringify(val);
  		let atSymbolIndex = jsonString.indexOf("@");
  		let dotSymbolIndex = jsonString.indexOf(".");
  		if (atSymbolIndex !== -1 && dotSymbolIndex !== -1 && dotSymbolIndex > atSymbolIndex) {
			msg = val.value;
			invalidEmail = false;
    		return true;
  		} else {
			msg = 'Enter email';
			invalidEmail = true;
    		return false;
  		}
	}
	$: if (value != '') {checkEmailFormat(value) ? variant = 'success' : variant = 'error'};
	$: if (invalidEmail) { value = ''};
</script>

<input class="input-{variant}" {title} bind:value={value} type="text" {placeholder} on:change={() => checkEmailFormat({value})}/>
{msg}
{value}