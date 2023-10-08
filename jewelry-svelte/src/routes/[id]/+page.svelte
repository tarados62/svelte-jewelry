<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	// @ts-ignore
	import { tt } from '$lib/services/stores';
	import { addToCart } from '$lib/services/cart';
	import Slider2 from '$lib/Slider2.svelte';
	// @ts-ignore
	export let data;
	let product = data.product;
	product.quantity = 1;
</script>

<div class="grid grid-cols-2 gap-2">
	<Slider2 sliders={product.image_list} />

	<div class="grid grid-cols-1 grid-flow-row grid-rows-[5rem_3rem_3rem_1fr] gap-1">
		<div class="my-2 mx-0 uppercase tracking-wider text-xl">
			{#if product.new_price}
				<div class="current lg:text-lg sm:text-xl">
					{product.price} eur
				</div>
				<div class="red lg:text-lg sm:text-xl">
					{product.new_price} eur
				</div>
			{:else}
				<div class="lg:text-lg sm:text-xl">{product.price} eur</div>
			{/if}
		</div>
		<div>
			<div class="uppercase lg:text-lg sm:text-xl tracking-wider">{product.title}</div>
			<hr class="h-px my-4 bg-gray-900" />
		</div>
		<button
			type="button"
			on:click={() => {
				goto('/cart');
				addToCart(product);
			}}
			class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 uppercase transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
		>
			{$tt['ProductStatusBasket']}
		</button>
		<span class="lg:text-lg sm:text-xl">{$tt['RaspberryJellyEarringsDescription']}</span>
	</div>
</div>
