<script>
	import { page } from '$app/stores';
	const products = $page.data.products; // const locales = $page.data.locales;
</script>

<div class="wrapper-products">
	{#each products as product}
		<div class="image-container">
			<img src={product.images[0]} alt={product.title} />
			<div class="price-box">
				<span>{product.title}</span>
				<span>{product.price}</span>
			</div>
		</div>
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

	.wrapper-products img {
		width: 100%;
	}

	.price-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media screen and (max-width: 450px) {
		.wrapper-products {
			grid-template-columns: 1fr;
		}
	}
</style>
