export function getItems() {
    let items = localStorage.getItem('cart');
    if (items) {
        items = JSON.parse(items);
    } else {
        // @ts-ignore
        items = [];
    }
    return items
}

export function clearLocalStorage() {
    localStorage.removeItem("cart");
}

// @ts-ignore
export function setItems(items) {
    items = JSON.stringify(items);
    localStorage.setItem('cart', items);
}