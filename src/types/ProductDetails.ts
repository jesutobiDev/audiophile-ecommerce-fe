interface BoxItem {
  name: string;
  quantity: number;
}

interface relatedProductItem{
  imageUrl: string;
  name: string;
  productId: string;
}


export interface ProductDetails {
  id: string;
  category: string
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  features: string[];
  inTheBox: BoxItem[];
  productGallery:string[];
  currency: string;
  totalQuantity: number;
  quantityLeft: number;
  relatedProduct: relatedProductItem[];
}
