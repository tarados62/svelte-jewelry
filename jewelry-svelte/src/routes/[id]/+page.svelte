<script>
	import Product from '$lib/Product.svelte';

	export let data;
	console.log(data.product);
</script>

<h1>page id {data.product.id}</h1>
<!-- <Product productData={data.product} /> -->
