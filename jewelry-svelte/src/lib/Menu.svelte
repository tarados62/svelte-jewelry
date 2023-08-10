<script>
	import { page } from '$app/stores';
	const links = $page.data.links;
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { locale } from '../stores';
	$: l = $page.data.locale_en;
	$: if ($locale == 'EN') {
		l = $page.data.locale_en;
	} else if ($locale == 'ES') {
		l = $page.data.locale_es;
	} else if ($locale == 'UA') {
		l = $page.data.locale_ua;
	} else if ($locale == 'RU') {
		l = $page.data.locale_ru;
	}

	/**
	 * @type {any}
	 */
	export let open;
	let click = () => {
		open = !open;
	};
</script>

{#if open}
	<div class="menu" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}>
		{#each links as link, i}
			<a href="/" on:click={click} transition:fly={{ y: -15, delay: 50 * i }}>
				{l[link.title]}
			</a>
		{/each}
		<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	</div>
{/if}

<style>
	:global(html) {
		background: #1d1d2f;
	}
	.menu {
		z-index: -1;
		position: absolute;
		top: 1.4%;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		color: rgb(12, 12, 102);
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
		color: black;
		border-bottom: black;
	}
	a:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		border-color: rgb(19, 4, 4);
		border-width: 1px;
		height: 0;
	}
</style>
