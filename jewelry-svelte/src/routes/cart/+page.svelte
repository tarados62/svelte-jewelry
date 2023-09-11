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

<p>There are {$cart.length} items in your cart</p>

<div class="cart-list">
	{#each $cart as item}
		{#if item.quantity > 0}
			<div class="cart-item">
				<img width="50" src={item.image_list[0]} alt={item.title} />
				<div>{item.title}</div>
				<div>
					{item.quantity}
					<button on:click={() => plusItem(item)}>+</button>
					<button on:click={() => minusItem(item)}>-</button>
				</div>
				<p>₹{item.price * item.quantity}</p>
			</div>
		{/if}
	{/each}
	<div class="total">
		<h4>Total: ₹ {total}</h4>
	</div>
</div>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.total {
		text-align: right;
	}

	.cart-list {
		border: 2px solid;
		padding: 10px;
	}
</style>
