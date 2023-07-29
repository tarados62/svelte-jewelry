<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	/**
	 * @type {any}
	 */
	export let open;
	let click = () => {
		open = !open;
	};
</script>

{#if open}
	<div class="menu">
		{#each ['Home', 'Example', 'About', 'Contact'] as link, i}
			<a href="/" on:click={click}>
				<p transition:fly={{ y: -15, delay: 50 * i }}>
					{link}
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
		z-index: -1;
		position: absolute;
		top: 1.4%;
		left: 0;
		width: 100%;
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
	}

	a p {
		width: max-content;
		margin: 1rem auto;
		color: black;
	}
	a p:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
	}
</style>
