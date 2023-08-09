<script>
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/Menu.svelte';
	import phone from '$lib/images/phone-receiver.svg';
	import cart from '$lib/images/cart.svg';
	import Langbox from '$lib/Langbox.svelte';
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
	let open;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<div class="my_hamb">
		<Hamburger bind:open --color="black" />
		<Menu bind:open />
	</div>
	<div class="phone">
		<img src={phone} alt="" />
		<a href="/" class="phone">
			<span>+380507204066</span>
		</a>
	</div>
	<div class="langbox">
		<Langbox />
	</div>
	<div class="basket">
		<a href="/">
			<img src={cart} alt="" />
			<span>0</span>
		</a>
	</div>
</section>
<div class="logo">
	<span>JEWELRY</span>
</div>
<nav>
	<div class="links">
		{#each $page.data.links as link}
			<a href="/">
				{l[link.title]}
			</a>
		{/each}
	</div>
</nav>

<style>
	section {
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc(60px + 2 * ((100vw - 320px) / 1518));
		background-color: #f5f5f5;
		font-size: calc(14px + 2 * ((100vw - 320px) / 1518));
	}

	.my_hamb {
		z-index: 1;
		display: none;
	}

	.phone {
		display: flex;
		align-items: center;
		padding-left: calc(60 * ((100vw - 500px) / 1837));
	}
	.phone img {
		height: 1rem;
	}

	.phone a {
		margin-left: 5px;
		text-decoration: none;
		color: #000000;
	}

	.langbox {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10%;
		text-decoration: none;
		cursor: pointer;
	}

	.basket a {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10%;
		text-decoration: none;
		cursor: pointer;
	}
	img {
		height: 1.4rem;
	}

	.basket a span {
		padding-left: 1%;
		font-size: calc(18px + 2 * ((100vw - 320px) / 1848));
	}

	.logo {
		height: 4rem;
		width: 100%;
		margin: 2%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: calc(3rem + 5 * (100vw / 1838));
	}
	nav {
		width: 100vw;
		display: flex;
		align-items: center;
		margin-top: 7vmin;
	}

	nav .links {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 0 calc(3vw + 12 * (100vw / 1838));
	}

	nav .links a {
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
	}

	@media screen and (max-width: 750px) {
		.my_hamb {
			display: block;
		}
	}
</style>
