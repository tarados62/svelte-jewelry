<script>
	// @ts-nocheck

	export let slides;

	// @ts-ignore

	let currentSlide = 0;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	function carouselThumbnail(index) {
		currentSlide = index;
	}
</script>

<div class="flex flex-wrap content-start w-full">
	<div class="relative w-[calc(100%+200rem)]">
		<img class="h-auto w-full" src={slides[currentSlide]} alt="qq" />
		<button
			type="button"
			class="absolute top-[40%] ml-[-15px] sm:m-0 left-0 btn-icon bg-initial"
			on:click={prevSlide}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-7 sm:w-10 h-auto"
				style="color: black;"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</button>
		<button
			type="button"
			class="absolute top-[40%] mr-[-15px] sm:m-0 right-0 btn-icon bg-initial"
			on:click={nextSlide}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-7 sm:w-10 h-auto"
				style="color:black"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</button>
	</div>
	<div class="grid grid-cols-6 gap-2 mt-2">
		{#each slides as slider, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img class="rounded-container-token" src={slider} alt={slider} loading="lazy" />
			</button>
		{/each}
	</div>
</div>
