<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	// @ts-ignore
	import { page } from '$app/stores';
	import { productId, cart } from '../../stores';
	import { setItems } from '../../utils';
	// @ts-ignore
	export let data;
	// @ts-ignore
	// let elemCarousel = HTMLDivElement;
	// const unsplashIds = data.product.image_list;
	// function carouselLeft() {
	// 	const x =
	// 		// @ts-ignore
	// 		elemCarousel.scrollLeft === 0
	// 			? // @ts-ignore
	// 			  elemCarousel.clientWidth * elemCarousel.childElementCount // loop
	// 			: // @ts-ignore
	// 			  elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	// 	// @ts-ignore
	// 	elemCarousel.scroll(x, 0);
	// }

	// function carouselRight() {
	// 	const x =
	// 		// @ts-ignore
	// 		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
	// 			? 0 // loop
	// 			: // @ts-ignore
	// 			  elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	// 	// @ts-ignore
	// 	elemCarousel.scroll(x, 0);
	// }

	// function carouselThumbnail(/** @type {number} */ index) {
	// 	// @ts-ignore
	// 	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	// }

	let product = data.product;
	product.quantity = 1;
	function addToCart(/** @type {{ id: any; quantity: number; }} */ product) {
		$productId = product.id;
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
		setItems($cart);
	}
</script>

<div class="grid grid-cols-2">
	<div class="grid grid-cols-1 grid-flow-row">
		<div class="my-2 mx-0 uppercase tracking-wider text-xl">
			{#if product.new_price}
				<div class="current">
					{product.price} eur
				</div>
				<div class="red">
					{product.new_price} eur
				</div>
			{:else}
				<div>{product.price} eur</div>
			{/if}
		</div>
		<div class="uppercase text-xl tracking-wider">{product.title}</div>
		<hr class="h-px my-4 bg-gray-900" />
		<button
			type="button"
			on:click={() => {
				goto('/cart');
				addToCart(product);
			}}
			class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
		>
			To card
		</button>
		<span>description</span>
	</div>
</div>
