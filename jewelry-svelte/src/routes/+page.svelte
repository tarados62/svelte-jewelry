<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import Product from '$lib/Product.svelte';
	const products = $page.data.products;
</script>

<div class="wrapper-products">
	{#each products as product, index}
		<Product productIndex={index} />
	{/each}
</div>

<style>
	.wrapper-products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
		gap: 10px;
		border: 1px solid green;
	}

	@media screen and (max-width: 450px) {
		.wrapper-products {
			grid-template-columns: 1fr;
		}
	}
</style>
