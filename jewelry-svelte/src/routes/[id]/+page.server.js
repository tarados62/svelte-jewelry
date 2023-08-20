import { SECRET_PRODUCT_URL } from '$env/static/private';
// @ts-ignore
export async function load({ params }) {
	const response = await fetch(SECRET_PRODUCT_URL + params.id);
	const data = await response.json();
	return data;
}
