interface BoxItem {
  name: string;
  quantity: number;
}


export interface ProductDetails {
  id: string;
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
  relatedProduct: string[];
}
