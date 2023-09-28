<script>
	// @ts-nocheck

	export const sliders = [
		'https://alloe-vega-app.party.space//media/cache/cf/5e/cf5e1dd618d82d4c8d166a58a8f083b6.jpg',
		'https://alloe-vega-app.party.space//media/cache/55/c5/55c5a8359a7c1679bff6729cd10ff4d4.jpg',
		'https://alloe-vega-app.party.space//media/cache/b9/e4/b9e49ad1e14d73a91456e15e32b85987.jpg',
		'https://alloe-vega-app.party.space//media/cache/9b/99/9b994ad204fef801cb499a3c8723dcb6.jpg',
		'https://alloe-vega-app.party.space//media/cache/f8/c1/f8c1ad93e41bc021553d62b13914dc78.jpg',
		'https://alloe-vega-app.party.space//media/cache/fb/26/fb267a0e1e573fc2c509d86ddda0b479.jpg',
		'https://alloe-vega-app.party.space//media/cache/b3/0a/b30af82d21ec94508cf19ec9ea8ee0ad.jpg',
		'https://alloe-vega-app.party.space//media/cache/5f/e6/5fe61b9eb76fd41dda3a4a8f545b6635.jpg'
	];

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

<div class="grid grid-cols-1 grid-rows-[45vw]">
	<div class="relative w-full h-full bg-top bg-contain bg-no-repeat bg-[url('{sliders[0]}')]">
		<button
			type="button"
			class="absolute top-[40%] left-[5%] btn-icon variant-filled"
			on:click={carouselLeft}
		>
			<i class="fa-solid fa-arrow-left" />
		</button>
		<button
			type="button"
			class="absolute top-[40%] right-[5%] btn-icon variant-filled"
			on:click={carouselRight}
		>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>

	<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</button> -->
	<div class="p-4 grid grid-cols-6 gap-1">
		{#each sliders as slider, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img class="rounded-container-token" src={slider} alt={slider} loading="lazy" />
			</button>
		{/each}
	</div>
</div>
