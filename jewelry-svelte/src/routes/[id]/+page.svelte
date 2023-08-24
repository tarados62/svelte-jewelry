<script lang="ts">
	export let data;

	let elemCarousel: HTMLDivElement;
	const unsplashIds = data.product.image_list;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
</script>

<h1>page id {data.product.id}</h1>
<div class="product-container">
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<i class="fa-solid fa-arrow-left" />
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each unsplashIds as unsplashId}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={unsplashId}
					alt={unsplashId}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>
</div>

<style>
	.product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
