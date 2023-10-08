export interface Product {
	id: number;
	price: number;
	availability: ProductAvailability[];
}

export interface ProductAvailability {
	size: string;
	quantity: number;
	preorder: boolean;
}

export interface CartProduct extends Product {
	quantity: number;
}
