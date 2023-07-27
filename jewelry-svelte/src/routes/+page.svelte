<script>
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';
	import phone from '$lib/images/phone-receiver.svg';
	import cart from '$lib/images/basket.png';

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
	<Hamburger bind:open --color="black" />
	<div class="phone">
		<img src={phone} alt="" />
		<a href="/" class="phone">
			<span>+380507204066</span>
		</a>
	</div>
	<div class="basket">
		<a href="/">
			<img src={cart} alt="" />
			<span>0</span>
		</a>
	</div>
</section>

<Menu bind:open />

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
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

	.basket a {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10%;
		text-decoration: none;
		cursor: pointer;
	}

	/* .basket a {
		display: flex;
		align-items: center;
	} */
	.basket a img {
		height: 1.4rem;
	}

	.basket a span {
		padding-left: 1%;
		font-size: calc(18px + 2 * ((100vw - 320px) / 1848));
	}
</style>
