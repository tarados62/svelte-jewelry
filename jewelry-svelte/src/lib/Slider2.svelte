<script>
	// @ts-nocheck

	export let sliders;

	// @ts-ignore
	let imageIndex = 0;
	function carouselLeft() {
		console.log('left');
	}

	function carouselRight() {
		console.log('right');
	}

	function carouselThumbnail(index) {
		imageIndex = index;
		console.log(index);
	}
</script>

<div>
	<div class="p-4 grid grid-cols-1 grid-rows-[50vw] gap-4 items-center">
		<div
			class="relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('{sliders[
				imageIndex
			]}')]"
		>
			{imageIndex}: {sliders[imageIndex]}
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
