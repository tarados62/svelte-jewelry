<script>
	/**
	 * @type {number}
	 */
	// @ts-ignore
	export let productIndex;
	import { page } from '$app/stores';
	// @ts-ignore
	const product = $page.data.products[productIndex];

	let changeImg = false;
</script>

<div class="image-container">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<img
		src={changeImg ? product.images[0] : product.images[1]}
		on:mouseover={() => (changeImg = !changeImg)}
		on:mouseleave={() => (changeImg = !changeImg)}
		alt={product.title}
	/>
	<div class="price-box">
		<span>{product.title}</span>
		<span>{product.price}</span>
	</div>
</div>

<style>
	.image-container {
		cursor: pointer;
	}
	.image-container img {
		width: 100%;
	}

	.price-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
