export interface CartItem {
    productId: string,
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
}

export interface CartState{
    items: CartItem[],
    totalPrice: number,
}
