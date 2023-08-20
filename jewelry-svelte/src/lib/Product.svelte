<script>
	/**
	 * @type {any}
	 */
	// @ts-ignore
	export let productData;

	let changeImg = false;
</script>

<div class="image-container">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<img
		src={changeImg ? productData.images[0] : productData.images[1]}
		on:mouseover={() => (changeImg = !changeImg)}
		on:mouseleave={() => (changeImg = !changeImg)}
		alt={productData.title}
	/>
	<div class="price-box">
		<span>{productData.title}</span>
		<span>{productData.price}</span>
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
