<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	/**
	 * @type {any}
	 */
	export let links;
	/**
	 * @type {any}
	 */
	export let open;
</script>

{#if open}
	<div class="menu">
		{#each links as link, i}
			<a href={link.route}>
				<p transition:fly={{ y: -15, delay: 50 * i }}>
					{link.title}
				</p>
			</a>
		{/each}
	</div>

	<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
	:global(html) {
		background: #1d1d2f;
	}
	.menu {
		width: 100vw;
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		background-color: yellow;
		color: rgb(0, 0, 25);
	}
	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}
	p:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		border-color: rgb(9, 3, 3);
		border-width: 1px;
		height: 0;
		width: 100vw;
	}
</style>
