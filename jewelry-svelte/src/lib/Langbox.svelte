<script>
	import en from '$lib/images/en.svg';
	import es from '$lib/images/es.svg';
	import ua from '$lib/images/uk.svg';
	import { localeSet } from '../stores';
	const countries = ['EN', 'ES', 'UA'];
	const fotos = [en, es, ua];
	$: foto = en;
	$: if ($localeSet.country == 'EN') {
		foto = en;
	} else if ($localeSet.country == 'ES') {
		foto = es;
	} else if ($localeSet.country == 'UA') {
		foto = ua;
	}
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
	<span>{$localeSet.country}</span>
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
		{#each countries as item, index}
			<a
				href="/"
				class="menu-item lang"
				on:click={() => {
					$localeSet.country = countries[index];
				}}
				on:click={click}
			>
				<img alt="" src={fotos[index]} />
				<span> {item}</span>
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
