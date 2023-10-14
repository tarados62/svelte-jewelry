<script>
	// @ts-nocheck

	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/Menu.svelte';
	import phone from '$lib/images/phone-receiver.svg';
	import cartImg from '$lib/images/cart.svg';
	import { cart, tt } from '$lib/services/stores';
	import Dropdown from './Dropdown.svelte';
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
	<div class="hamburger-phone">
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
	</div>
	<div class="langbox-basket">
		<div class="langbox">
			<Dropdown />
		</div>
		<div class="basket">
			<a href="/cart">
				<img src={cartImg} alt="" />
				<span>{$cart.length}</span>
			</a>
		</div>
	</div>
</section>
<div class="w-full h-[4rem] m-3 flex items-center justify-center lg:text-[3rem]">JEWELRY</div>
<nav>
	<div class="w-full flex content-center justify-around lg:text-lg uppercase">
		<a href="/" class="px-4 font-normal hover:font-bold">
			{$tt['MenuHome']}
		</a>
		<a href="/about" class="px-4 font-normal hover:font-bold">
			{$tt['MenuAboutUs']}
		</a>
		<a href="/contacts" class="px-4 font-normal hover:font-bold">
			{$tt['MenuContacts']}
		</a>
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
	}

	.hamburger-phone {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
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

	.langbox-basket {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.langbox {
		margin-right: 1.3rem;
		display: grid;
		grid-template-columns: 1fr;
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
	}
	nav {
		width: 100vw;
		display: flex;
		align-items: center;
		margin-top: 7vmin;
	}

	@media screen and (max-width: 750px) {
		.my_hamb {
			display: block;
		}
	}
</style>
