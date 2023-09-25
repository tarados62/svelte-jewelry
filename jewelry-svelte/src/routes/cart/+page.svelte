<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { productId, cart, localeName } from '../../stores';
	import { setItems } from '../../utils';
	$: t = $page.data.locale[$localeName];
	let products = $page.data.products;
	let product = products[$productId];

	const minusItem = (/** @type {{ id: any; quantity: number; }} */ product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1;
					$cart = $cart;
				} else {
					$cart = $cart.filter((cartItem) => cartItem != product);
					setItems($cart);
				}
				setItems($cart);
				return;
			}
		}
	};

	const plusItem = (/** @type {{ id: any; quantity: number; }} */ product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				item.quantity += 1;
				$cart = $cart;
				setItems($cart);
				return;
			}
		}
	};

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="grid grid-cols-1 gap-2 mt-4">
	{#each $cart as item}
		{#if item.quantity > 0}
			<div class="grid grid-cols-5 place-items-center">
				<img class="place-self-start" width="50" src={item.image_list[0]} alt={item.title} />
				<div class="col-span-2">{item.title}</div>
				<div class="col-end-5">
					{item.quantity}
					<button on:click={() => plusItem(item)}>+</button>
					<button on:click={() => minusItem(item)}>-</button>
				</div>
				<div class="place-self-end p-4 col-end-6">€{item.price * item.quantity}</div>
			</div>
			<hr color="#ff0000" />
		{/if}
	{/each}
	<div class="place-self-end p-4">
		<h4>Total: € {total}</h4>
	</div>
	<div class="grid grid-cols-5 gap-2 grid-rows-[3rem]">
		<a href="/" class="btn variant-filled-secondary col-end-5 text-center rounded"
			>{t['ContinueShopping']}</a
		>
		<button class="btn variant-filled-success col-end-6 text-center rounded"
			>{t['BasketCheckout']}</button
		>
	</div>
</div>
