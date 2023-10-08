<script>
	// @ts-nocheck

	export let sliders;

	// @ts-ignore
	let elemCarousel;

	function carouselLeft() {
		const x =
			// @ts-ignore
			elemCarousel.scrollLeft === 0
				? // @ts-ignore
				  elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: // @ts-ignore
				  elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		// @ts-ignore
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			// @ts-ignore
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: // @ts-ignore
				  elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		// @ts-ignore
		elemCarousel.scroll(x, 0);
	}

	// @ts-ignore
	function carouselThumbnail(index) {
		// @ts-ignore
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div>
	<div class="p-4 grid grid-cols-1 grid-rows-[45vw] gap-4 items-center">
		<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<i class="fa-solid fa-arrow-left" />
		</button> -->
		<div
			bind:this={elemCarousel}
			class="h-full w-full bg-cover bg-center bg-no-repeat bg-[url('https://alloe-vega-app.party.space//media/images/Raspberry_Jelly_Earrings_Image_1_750x.jpg')]"
		>
			<!-- {#each sliders as slider}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={slider}
					alt={slider}
					loading="lazy"
				/>
			{/each} -->
		</div>
		<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<i class="fa-solid fa-arrow-right" />
		</button> -->
	</div>

	<div class="p-4 grid grid-cols-6 gap-1">
		{#each sliders as slider, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img class="rounded-container-token" src={slider} alt={slider} loading="lazy" />
			</button>
		{/each}
	</div>
</div>
