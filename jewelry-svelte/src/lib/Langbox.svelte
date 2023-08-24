<script>
	import en from '$lib/images/en.svg';
	import es from '$lib/images/es.svg';
	import ua from '$lib/images/uk.svg';
	import ru from '$lib/images/ru.svg';
	import { localeName } from '../stores';
	import { page } from '$app/stores';
	const fotos = [ru, ua, en, es];
	$: foto = en;
	$: if ($localeName == 'EN') {
		foto = en;
	} else if ($localeName == 'ES') {
		foto = es;
	} else if ($localeName == 'UA') {
		foto = ua;
	} else if ($localeName == 'RU') {
		foto = ru;
	}
	/**
	 * @type {boolean}
	 */
	let isVisible = false;
	let click = () => {
		isVisible = !isVisible;
	};
</script>

<div class="langSelector">
	<img alt="" src={foto} />
	<span>{$localeName}</span>
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
		{#each $page.data.countries as item, index}
			<a
				href="/"
				class="menu-item lang"
				on:click={() => {
					$localeName = $page.data.countries[index];
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
		color: black;
		width: calc(60px + 2 * ((100vw - 320px) / 1518));
		padding-left: 12%;
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
		color: black;
		width: 18px;
		height: 18px;
	}

	.langSelector span {
		margin: auto;
	}

	.sub-menu {
		color: black;
		width: calc(60px + 2 * ((100vw - 320px) / 1518));
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		position: absolute;
		top: calc(60px + 2 * ((100vw - 320px) / 1518));
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
