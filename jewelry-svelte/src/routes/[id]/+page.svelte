<script lang="ts">
	import { page } from '$app/stores';

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

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
	let markdown = false;
	const product = data.product;
	console.log(product);
</script>

<div class="product-container">
	<div class="left">
		<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
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
		<div class="card p-4 grid grid-cols-6 gap-4">
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
			<div class="btn">cart</div>
			<div class="product-description">
				<div class="description">description</div>
			</div>
		</div>
	</div>
</div>

<style>
	.product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.wrapper-product {
		margin-top: 55px;
		margin-bottom: 40px;
	}

	.breadcrumbs-wrapper {
		padding-left: 15px;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: inherit;
		align-content: center;
	}

	.row {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: inherit;
		align-content: center;
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

	.markdown {
		display: none;
	}

	.btn {
		display: flex;
		justify-content: center;
		max-width: 240px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		white-space: normal;
		font-size: 1rem;
		border: none;
		border-radius: 0;
		background-color: black;
		color: white;
		padding: 0.75rem 1.5rem;
		margin-top: 1rem;
		text-decoration: none;
		transition: opacity 1s ease-in;
		cursor: pointer;
	}

	.size-block {
		width: 60%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		height: 4rem;
		margin-top: 5%;
	}

	.size-block .square {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		width: auto;
		min-width: 3rem;
		height: 3rem;
		border: 1px solid grey;
		padding: 0px 5px;
		line-height: 3rem;
	}

	.square + .square {
		margin-left: 8px;
	}

	.size-block .square:hover {
		background-color: #7ec699;
		cursor: pointer;
	}

	.size-table {
		height: 3rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 1rem;
	}

	.size-table a {
		cursor: pointer;
		color: #777676;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	.preorder {
		color: #9f0b05;
		margin: 20px 0;
	}

	.product-category {
		display: inline-flex;
		align-items: baseline;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.product-category span {
		font-size: 1rem;
		color: #777676;
	}

	.product-category div {
		font-size: 1rem;
		margin-left: 1%;
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
		font-weight: 600;
	}

	.current {
		text-decoration: line-through;
		margin-bottom: 1rem;
		color: #777676;
	}

	.button-block {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
	}

	.selected {
		background-color: #c7d9d8;
	}

	.notActive {
		background-color: #777676;
		pointer-events: none;
		cursor: default;
	}

	.unavailable {
		width: 200px;
		padding: 16px 8px;
		border: 2px solid #565555;
		color: #565555;
		text-align: center;
		text-transform: uppercase;
	}

	@media screen and (max-width: 2800px) {
		.viewer {
			display: none;
		}
	}

	@media screen and (max-width: 960px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 278px);
		}
	}

	@media screen and (max-width: 750px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 318px);
		}
	}

	@media screen and (max-width: 650px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 372px);
		}
	}

	@media screen and (max-width: 560px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 424px);
		}

		.slider {
			width: 78px;
			height: 78px;
		}
	}

	@media screen and (max-width: 460px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 250px);
		}

		.item {
			width: calc(100% - 30px);
		}

		.viewer {
			display: contents;
		}

		.btn,
		.size-block {
			width: auto;
		}

		.size-block .square {
			min-width: 2rem;
		}

		.item + .item {
			margin-top: 40px;
		}
	}

	@media screen and (max-width: 375px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 324px);
		}
	}

	@media screen and (max-width: 320px) {
		.vueperslides--fixed-height {
			height: calc(100vh - 370px);
		}
	}
</style>
