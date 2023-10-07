<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { tt } from '$lib/services/stores';
	export let msg: number = 0;
	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};
</script>

<button use:popup={popupClick}>+</button>

<div class="card p-4 variant-filled-primary" data-popup="popupClick">
	<p>{$tt['InStockOnly']}: {msg}</p>
	<div class="arrow variant-filled-primary" />
</div>
<!-- svelte-ignore missing-declaration -->
