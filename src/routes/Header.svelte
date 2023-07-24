<script>
	import { page } from '$app/stores';
	import cart from '$lib/images/cart.svg';
	import phone from '$lib/images/phone-receiver.svg';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/Menu.svelte';
	import Dropdown from '$lib/Dropdown.svelte';
	let open;
	const linkList = $page.data.links;
</script>

<header>
	<nav>
		<div class="header">
			<div class="header__hamburg">
				<Hamburger bind:open />
				<Menu bind:open links={linkList} />
			</div>
			<div class="header__phone">
				<img src={phone} alt="" />
				<span>+380507204066</span>
			</div>
			<div class="header__lang-basket">
				<div class="header__lang-basket__lang" />
				<div class="header__lang-basket__basket" />
			</div>
		</div>
		<div class="logo"><span>JEWELRY</span></div>
		<div class="main-menu">
			{#each $page.data.links as link}
				<div class="navbar-item"><a href={link.route}>{link.title}</a></div>
			{/each}
		</div>
	</nav>
</header>

<style>
	nav {
		background-color: #f5f5f5;
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

	.header {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: calc(14px + 2 * ((100vw - 320px) / 1518));
	}

	.header__hamburg {
		width: 50px;
		height: 40px;
		display: none;
	}

	.header__phone {
		padding-left: calc(60 * ((100vw - 500px) / 1837));
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.header__phone img {
		height: 1rem;
	}

	.header__phone span {
		margin-left: 5px;
		color: #000000;
	}

	.header__phone span {
		font-size: calc(14px + 2 * ((100vw - 320px) / 1518));
	}

	.header__lang-basket {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10%;
	}
	header__lang-basket__lang {
	}

	header__lang-basket__basket {
		margin: auto;
		padding-right: calc(16px + 32 * ((100vw - 375px) / 1837));
	}

	.header__lang-basket__basket a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.header__lang-basket__basket a img {
		height: 1.4rem;
	}

	.header__lang-basket__basket a span {
		padding-left: 15%;
		font-size: calc(18px + 2 * ((100vw - 320px) / 1848));
	}

	.main-menu {
		align-self: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.main-menu .navbar-item {
		padding: 0 calc(3vw + 12 * (100vw / 1838));
		position: relative;
		display: flex;
		transition: 0.4s;
	}

	.main-menu .navbar-item a {
		text-align: center;
		align-self: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	.main-menu .navbar-item a:hover {
		font-weight: bold;
	}

	@media screen and (max-width: 750px) {
		.main-menu {
			display: none;
		}

		.header__hamburg {
			display: inline;
		}

		.header__phone {
			padding-left: 0;
			padding-right: calc(0.7 * 60 * ((100vw + 375px) / 1838));
		}
	}

	@media screen and (max-width: 370px) {
		.header__basket a img {
			height: 1.4rem;
		}
	}

	@media screen and (max-width: 320px) {
		.header__lang-basket {
			gap: 0;
		}
	}

	@media screen and (max-width: 280px) {
		.header__phone {
			padding: 0;
		}

		.header__phone img {
			margin-left: 10px;
		}

		.header__phone a {
			margin: 0 5px 0 0;
		}
	}
	header {
	}

	nav {
	}
</style>
