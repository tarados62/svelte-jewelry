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
	let elemCarousel = HTMLDivElement;
	const unsplashIds = data.product.image_list;
	function carouselLeft() {
		const x =
			// @ts-ignore
			elemCarousel.scrollLeft === 0
				// @ts-ignore
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				// @ts-ignore
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		// @ts-ignore
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			// @ts-ignore
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				// @ts-ignore
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		// @ts-ignore
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(/** @type {number} */ index) {
		// @ts-ignore
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}

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

<div class="product-container">
	<div class="left">
		<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center left-item">
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
				<i class="fa-solid fa-arrow-right" />
			</button>
		</div>
		<div class="card p-4 grid grid-cols-6 gap-4 left-item">
			{#each unsplashIds as unsplashId, i}
				<button type="button" on:click={() => carouselThumbnail(i)}>
					<img class="rounded-container-token" src={unsplashId} alt={unsplashId} loading="lazy" />
				</button>
			{/each}
		</div>
	</div>
	<div class="rigth">
		<div class="item right">
			<div class="product-price">
				<div class="price">
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
			</div>
			<div class="product-title">
				<div>{product.title}</div>
			</div>
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
			<div class="product-description">
				<div class="description">description</div>
			</div>
		</div>
	</div>
</div>

<style>
	.left-item {
		background-color: #f5f5f5;
	}
	.product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.item {
		text-align: left;
		font-size: 1.1em;
		color: rgb(61, 66, 70);
		width: calc((100% / 12) * 6 - 30px);
		margin: 0 15px;
		overflow: hidden;
	}

	.price {
		margin: 15px 0;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.description {
		line-height: 1.5rem;
		white-space: pre-wrap;
	}

	.product-title {
		border-bottom: 2px solid #777676;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	.product-title div {
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: bold;
	}

	.current {
		text-decoration: line-through;
		margin-bottom: 1rem;
		color: #777676;
	}

	@media screen and (max-width: 460px) {
		.item {
			width: calc(100% - 30px);
		}
	}
</style>
