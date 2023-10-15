<!-- component -->
<script>
	import en from '$lib/images/en.svg';
	import es from '$lib/images/es.svg';
	import ua from '$lib/images/uk.svg';
	import ru from '$lib/images/ru.svg';
	// @ts-ignore
	import { page } from '$app/stores';
	import { translate } from './services/translate';
	import { localeName } from '$lib/services/stores';

	const fotos = [ru, ua, en, es];
	$: if ($localeName) {
		translate();
	}
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
</script>

<div class="group inline-block mr-4">
	<button
		class="outline-none focus:outline-none px-3 bg-white rounded-sm flex items-center min-w-32"
	>
		<span class="pr-1 font-semibold flex-1 lang">
			<img alt="" src={foto} />
			<span>{$localeName}</span>
		</span>
		<span>
			<svg
				class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
			</svg>
		</span>
	</button>
	<ul
		class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
	>
		{#each $page.data.countries as item, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				class="rounded-sm px-3 py-1 hover:bg-gray-100 lang lang-item"
				on:click={() => {
					$localeName = $page.data.countries[index];
				}}
			>
				<img alt="" src={fotos[index]} />
				<span> {item}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.lang {
		display: grid;
		align-items: center;
		grid-template-columns: 1rem 2rem;
	}
	.lang img {
		width: 1rem;
	}

	.lang-item {
		justify-items: center;
		cursor: pointer;
	}
	.outline-none {
		background-color: whitesmoke;
		padding-right: 0;
	}
	/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
	li > button svg {
		transform: rotate(-90deg);
	}
	li:hover > button svg {
		transform: rotate(-270deg);
	}

	/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
	.group:hover .group-hover\:scale-100 {
		transform: scale(1);
	}
	.group:hover .group-hover\:-rotate-180 {
		transform: rotate(180deg);
	}
	.scale-0 {
		transform: scale(0);
	}
	.min-w-32 {
		min-width: auto;
	}
</style>
