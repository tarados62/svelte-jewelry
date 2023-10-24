<script lang="ts">
	function isValidEmail(value: string): boolean {
		return value.includes('@') && value.includes('.');
	}
	import { tt } from '$lib/services/stores';
	import Input from '$lib/Input.svelte';
</script>

<Input type="email" validation="true" placeholder="fgf" />

<!-- <div class="max-h-9 text-start mx-9 uppercase text-[1rem] lg:text-lg sm:text-xl">
	<h1>{$tt['MakingAnOrder']}</h1>
</div>

<div class="grid grid-cols-[40%_60%] gap-2 uppercase text-1 aling-items-center">
	<span class="chip variant-filled">
		{$tt['CheckoutSelectCountry']}
	</span>

	<select class="select chip">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
	</select>

	{$tt['CheckoutName']}
	<input
		class="input chip"
		title={$tt['CheckoutName']}
		type="text"
		placeholder={$tt['CheckoutName']}
	/>
	{$tt['CheckoutSurname']}
	<input class="input chip" title="Input (text)" type="text" placeholder={$tt['CheckoutSurname']} />
	{$tt['CheckoutRegion']}
	<input
		class="input chip"
		title="Input (text)"
		type="text"
		placeholder={$tt['CheckoutRegionInput']}
	/>
	{$tt['CheckoutCity']}
	<input
		class="input chip"
		title="Input (text)"
		type="text"
		placeholder={$tt['CheckoutSelectCityInput']}
	/>
	{$tt['CheckoutStreet']}
	<input
		class="input chip"
		title="Input (text)"
		type="text"
		placeholder={$tt['CheckoutStreetInput']}
	/>
	{$tt['CheckoutApartament']}
	<input
		class="input chip"
		title="Input (text)"
		type="text"
		placeholder={$tt['CheckoutApartamentInput']}
	/>
	{$tt['CheckoutPostOffice']}
	<input
		class="input chip"
		title="Input (text)"
		type="text"
		placeholder={$tt['CheckoutPostOffice']}
	/>
	{$tt['ChecoutPhone']}
	<input class="input chip" title="Input (text)" type="text" placeholder={$tt['ChecoutPhone']} />
	E-mail:
	<input class="input chip" title="Input (text)" type="text" placeholder="e-mail" />
	{$tt['CheckoutComment']}
	<textarea class="textarea chip" rows="4" placeholder="Enter some long form content." />
</div> -->
