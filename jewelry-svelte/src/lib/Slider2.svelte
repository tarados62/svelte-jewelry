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
	<div class="p-4 grid grid-cols-1 grid-rows-[50vw] gap-4 items-center">
		<div
			bind:this={elemCarousel}
			class="relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('https://alloe-vega-app.party.space//media/images/Raspberry_Jelly_Earrings_Image_1_750x.jpg')]"
		>
			<button
				type="button"
				class="absolute top-[45%] left-[1vw] btn-icon bg-initial"
				on:click={carouselLeft}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</button>
			<button
				type="button"
				class="absolute top-[45%] right-[1vw] btn-icon bg-initial"
				on:click={carouselRight}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</button>
		</div>
	</div>

	<div class="p-4 grid grid-cols-6 gap-1">
		{#each sliders as slider, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img class="rounded-container-token" src={slider} alt={slider} loading="lazy" />
			</button>
		{/each}
	</div>
</div>
