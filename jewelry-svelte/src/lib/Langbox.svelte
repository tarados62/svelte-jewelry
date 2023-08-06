<script>
	import img_en from '$lib/images/en.svg';
	import img_es from '$lib/images/es.svg';
	import img_ua from '$lib/images/uk.svg';
	import { localeSet } from '../stores';
	import { page } from '$app/stores';
	const locales = $page.data.locales;
	// console.log($localeSet);
	const countries = ['EN', 'ES', 'UA'];
	$: foto = img_en;
	$: setLocale = 'en-EN';
	/**
	 * @type {boolean}
	 */
	let isVisible = false;
	let click = () => {
		isVisible = !isVisible;
	};
	let choiceLocale = (/** @type {any} */ index) => {
		console.log(index);
	};
</script>

<div class="langSelector">
	<img alt="" src={foto} />
	<span>{$localeSet}</span>
	<a href="/" class="langSelector_item" on:click={click}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M9 14l3 3l3 -3" />
		</svg>
	</a>
</div>
{#if isVisible}
	<div class="sub-menu">
		{#each countries as country, index}
			<a
				href="/"
				class="menu-item lang"
				on:click={() => {
					$localeSet = countries[index];
				}}
				on:click={click}
			>
				<img alt="" src={foto} />
				<span> {country}</span>
			</a>
		{/each}
	</div>
{/if}

<style scoped>
	.langSelector {
		position: relative;
		display: grid;
		grid-template-columns: 1rem 2rem auto;
		grid-template-rows: 2rem;
		align-items: baseline;
		justify-items: center;
	}

	.langSelector img {
		margin: auto;
		width: 100%;
	}
	.langSelector .langSelector_item {
		margin: auto;
	}

	.langSelector svg {
		width: 18px;
		height: 18px;
	}

	.langSelector span {
		margin: auto;
	}

	.sub-menu {
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		position: absolute;
		top: calc(15%);
	}

	.sub-menu .lang {
		display: grid;
		grid-template-columns: 1rem 2rem;
		grid-template-rows: 2rem;
		align-items: baseline;
		justify-items: center;
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
	}

	.sub-menu .lang:hover {
		font-weight: bold;
	}

	.sub-menu .lang img {
		width: 100%;
	}

	.sub-menu .lang img:hover {
		width: 105%;
	}

	@media screen and (max-width: 370px) {
		.langSelector {
			grid-template-columns: 1rem 25px auto;
		}

		.langSelector svg {
			width: 14px;
			height: 14px;
		}
	}
</style>
