import { PUBLIC_PRODUCT_URL } from '$env/static/public';
// @ts-ignore
export async function load({ params }) {
	const response = await fetch(PUBLIC_PRODUCT_URL + params.id);
	const data = await response.json();
	return data;
}
