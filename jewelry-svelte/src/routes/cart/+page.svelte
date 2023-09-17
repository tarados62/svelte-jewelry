<script>
	import { page } from '$app/stores';
	import { productId, cart } from '../../stores';
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
				}
				return;
			}
		}
	};

	const plusItem = (/** @type {{ id: any; }} */ product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				item.quantity += 1;
				$cart = $cart;
				return;
			}
		}
	};

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="cart-list">
	{#each $cart as item}
		{#if item.quantity > 0}
			<div class="cart-item">
				<img width="50" src={item.image_list[0]} alt={item.title} />
				<div class="item2">{item.title}</div>
				<div class="item3">
					{item.quantity}
					<button on:click={() => plusItem(item)}>+</button>
					<button on:click={() => minusItem(item)}>-</button>
				</div>
				<div class="item4">€{item.price * item.quantity}</div>
			</div>
			<hr color="#ff0000" />
		{/if}
	{/each}
	<div class="total">
		<h4>Total: € {total}</h4>
	</div>
	<div class="grid grid-cols-5 gap-2">
		<a href="/" class="btn variant-filled-secondary col-end-5">ContinueShopping</a>
		<div class="btn variant-filled-success col-end-6">BasketCheckout</div>
	</div>
</div>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: auto 1fr auto 1fr;
	}

	.total {
		text-align: right;
	}

	.cart-list {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 6%;
	}
	.item2,
	.item3 {
		justify-self: center;
		align-self: center;
	}
	.item4 {
		justify-self: end;
		align-self: center;
	}
</style>
