<script>
	// @ts-nocheck
	export let data;
	import Product from '$lib/Product.svelte';
	function getItems() {
    let items = localStorage.getItem('cart');
    if (items) {
        items = JSON.parse(items);
    } else {
        items = [];
    }
    return items
	}

	function clearLocalStorage() {
    	localStorage.removeItem("cart");
	}

	function setItems(items) {
    	items = JSON.stringify(items);
    	localStorage.setItem('cart', items);
	}
	const productsList = data.products;
</script>
<button type="button" class="btn variant-filled m-4" on:click={() => {
	console.log('test');
	setItems(productsList);
	}}>setLocalSrorage</button>
<button type="button" class="btn variant-filled m-4" on:click={() => {
	const localStorageContent = getItems();
	console.log(localStorageContent);
	}}>getLocalStorage</button>
<button type="button" class="btn variant-filled m-4" on:click={() => {
	console.log('test');
	clearLocalStorage();
	}}>clearLocalStorage</button>
<div class="wrapper-products">
	{#each data.products as product}
		<a href="/{product.id}">
			<Product productData={product} />
		</a>
	{/each}
</div>

<style>
	.wrapper-products {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
		gap: 10px;
		border: 1px solid green;
	}

	@media screen and (max-width: 450px) {
		.wrapper-products {
			grid-template-columns: 1fr;
		}
	}
</style>
