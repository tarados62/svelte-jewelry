<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { tt, cart } from '$lib/services/stores';
	export let indx: number;
	const product = $cart[indx];
	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

	function setMsg(indx: number) {
		return $cart[indx].availability[0].quantity;
	}
</script>

<button use:popup={popupClick}>+</button>

<div class="card p-4 variant-filled-primary" data-popup="popupClick">
	<p>{$tt['InStockOnly']}: {product.availability[0].quantity}</p>
	<div class="arrow variant-filled-primary" />
</div>
<!-- svelte-ignore missing-declaration -->
