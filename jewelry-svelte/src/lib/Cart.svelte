<script>
	// @ts-nocheck
	import { addToCart, decrement, removeProduct } from '$lib/services/cart';
	import { cart, tt } from '$lib/services/stores';
	import Popup from './Popup.svelte';
	import { goto } from '$app/navigation';

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="grid grid-cols-1 gap-2 mt-4">
	{#each $cart as item, i}
		{#if item.quantity > 0}
			<div class="grid grid-cols-6 place-items-center">
				<img class="place-self-start" width="50" src={item.image_list[0]} alt={item.title} />
				<div class="col-span-2">{item.title}</div>
				<div class="col-end-5">
					{item.quantity}
					{#if item.quantity == item.availability[0].quantity}
						<Popup indx={i} />
					{:else}
						<button on:click={() => addToCart(item)}>+</button>
					{/if}

					<button on:click={() => decrement(item)}>-</button>
				</div>
				<div class="col-end-6">
					<i class="fa fa-times" aria-hidden="true" on:click={() => removeProduct(item)} />
				</div>
				<div class="place-self-end p-4 col-end-7">€{item.price * item.quantity}</div>
			</div>
			<hr color="#ff0000" />
		{/if}
	{/each}
	<div class="place-self-end p-4">
		<h4>{$tt['BasketTotalPrice']}: € {total}</h4>
	</div>
	<div class="flex justify-end">
		<button
			class="btn variant-filled-secondary col-end-4 text-center rounded mr-4"
			on:click={() => goto('/')}>{$tt['ContinueShopping']}</button
		>
		<button
			class="btn variant-filled-success col-end-5 text-center rounded"
			on:click={() => goto('/')}>{$tt['BasketCheckout']}</button
		>
	</div>
</div>
