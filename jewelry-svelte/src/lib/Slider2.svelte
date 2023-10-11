<script>
	// @ts-nocheck

	export let sliders;

	// @ts-ignore
	let left = false;
	let right = false;
	$: imageIndex = 0;
	$: if (left) {
		carouselLeft();
	}
	$: if (right) {
		carouselRight();
	}
	function carouselRight(index) {
		if (index < sliders.leght) {
			index++;
			return index;
		}
		index = 0;
		return index;
	}

	function carouselLeft(index) {
		console.log(index);
	}

	function carouselThumbnail(index) {
		imageIndex = index;
	}
</script>

<div>
	<div class="p-4 grid grid-cols-1 grid-rows-[50vw] gap-4 place-items-center">
		<div class="relative h-full w-full">
			<img
				class="h-full w-auto flex justify-center absolute left-[3vw]"
				src={sliders[imageIndex]}
				alt="qq"
			/>
			<button
				type="button"
				class="absolute top-[40%] left-[3vw] btn-icon bg-initial"
				on:click={carouselLeft(imageIndex)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10"
					style="color: white;"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</button>
			<button
				type="button"
				class="absolute top-[40%] right-[3vw] btn-icon bg-initial"
				on:click={carouselRight(imageIndex)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10"
					style="color:white"
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
