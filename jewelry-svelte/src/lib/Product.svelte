<script>
	/**
	 * @type {any}
	 */
	// @ts-ignore
	export let productData;

	let changeImg = false;
</script>

<div class="cursor-pointer">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<img
		class="w-full"
		src={changeImg ? productData.images[0] : productData.images[1]}
		on:mouseover={() => (changeImg = !changeImg)}
		on:mouseleave={() => (changeImg = !changeImg)}
		alt={productData.title}
	/>
	<div class="flex flex-col items-center">
		<span>{productData.title}</span>
		<span>{productData.price}</span>
	</div>
</div>
