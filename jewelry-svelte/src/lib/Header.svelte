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
<section class="flex items-center justify-between h-16 bg-[#f5f5f5] md:text-[1rem]">
	<div class="flex items-center justify-between flex-no-wrap">
		<div class="md:hidden">
			<Hamburger bind:open --color="black" />
			<Menu bind:open />
		</div>
		<div class="flex items-center justify-around sm:ml-4">
			<img src={phone} class="h-[1rem]" alt="" />
			<a href="/" class="flex items-center">+380507204066</a>
		</div>
	</div>
	<div class="flex items-center justify-between flex-no-wrap">
		<Dropdown />
		<a href="/cart" class="grid grid-cols-[1fr ifr] gap-[10%] grid-flow-col mr-2">
			<img src={cartImg} alt="" class="h-[1.4rem]" />
			{$cart.length}
		</a>
	</div>
</section>
<div
	class="w-full h-[4rem] flex items-center justify-center text-[1.8rem] sm:text-[2rem] lg:text-[3rem]"
>
	JEWELRY
</div>
<nav class="w-full flex items-center mt-5 hidden md:block">
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
