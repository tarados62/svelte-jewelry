<script>
	import { page } from '$app/stores';
	import { localeName } from '../stores';
	const products = $page.data.products;
	console.log(products);
	// const locales = $page.data.locales;
</script>

<h1>{$localeName}</h1>
<div class="wrapper-products">
	{#each products as product}
		<img src={product.images[0]} alt="" />
	{/each}
</div>

<style>
	.wrapper-products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5%;
		border: 1px solid green;
	}

	.wrapper-products img {
		width: 300px;
	}

	/* .product {
		display: flex;
		flex-direction: column;
	} */
</style>
