<script>
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	/**
	 * @type {any}
	 */
	let open;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Hamburger  bind:open
	--color="black" />
<Menu bind:open />

<style>
</style>
