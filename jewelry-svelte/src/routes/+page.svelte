<script>
	// @ts-nocheck
	export let data;
	import Product from '$lib/Product.svelte';
	const productsList = data.products;
</script>

<div class="wrapper-products">
	{#each data.products as product}
		<a href="/{product.id}">
			<Product productData={product} />
		</a>
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
