<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	// @ts-ignore
	import { page } from '$app/stores';
	import { productId, cart } from '../../stores';
	import { setItems } from '../../utils';
	import { addToCart } from '$lib/services/cart';
	// @ts-ignore
	export let data;
	let product = data.product;
	product.quantity = 1;

	let elemCarousel;
	const unsplashIds = product.image_list;

	function carouselLeft() {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="grid grid-cols-2 gap-2">
	<div class="grid grid-cols-1 gap-2">
		<div class="p-4 grid grid-cols-[auto_1fr_auto] gap-2 items-center">
			<!-- Button: Left -->
			<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
				<i class="fa-solid fa-arrow-left" />
			</button>
			<!-- Full Images -->
			<div
				bind:this={elemCarousel}
				class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"
			>
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
				<!-- svelte-ignore invalid-html-attribute -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>

				<!-- <i class="fa-arrow-right" /> -->
			</button>
		</div>
		<div class="p-4 grid grid-cols-6 gap-1">
			{#each unsplashIds as unsplashId, i}
				<button type="button" on:click={() => carouselThumbnail(i)}>
					<img class="rounded-container-token" src={unsplashId} alt={unsplashId} loading="lazy" />
				</button>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 grid-flow-row grid-rows-[5rem_3rem_3rem_1fr] gap-1">
		<div class="my-2 mx-0 uppercase tracking-wider text-xl">
			{#if product.new_price}
				<div class="current lg:text-lg sm:text-xl">
					{product.price} eur
				</div>
				<div class="red lg:text-lg sm:text-xl">
					{product.new_price} eur
				</div>
			{:else}
				<div class="lg:text-lg sm:text-xl">{product.price} eur</div>
			{/if}
		</div>
		<div>
			<div class="uppercase lg:text-lg sm:text-xl tracking-wider">{product.title}</div>
			<hr class="h-px my-4 bg-gray-900" />
		</div>
		<button
			type="button"
			on:click={() => {
				goto('/cart');
				addToCart(product);
			}}
			class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 uppercase transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
		>
			To card
		</button>
		<span class="lg:text-lg sm:text-xl">description</span>
	</div>
</div>
