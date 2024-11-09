"use client";
import Image from "next/image";
import { Product } from "@/types/Product";
import Button from "./Button";
import { useNavigateToProductPage } from "@/utils/useNavigation";

interface ProductItemProps {
  product: Product;
  isReversed?: boolean;
}

const ProductItem = ({ product, isReversed }: ProductItemProps) => {
  return (
    <div
      className={`flex flex-col px-10 gap-10 lg:px-40 py-7 lg:justify-between ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="lg:w-[400px] md:h-[400px] h-[300px] overflow-hidden rounded-lg bg-light-grey flex items-center justify-center relative">
        <div className="relative w-[220px] h-[250px]">
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
          />
        </div>
        <div className="bottom-0 absolute left-0 right-0 mx-auto flex justify-center">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730673582/blur_tdwemo.svg"
            alt="blur"
            width={270}
            height={5}
          />
        </div>
      </div>
      <div className="lg:w-[400px] text-center items-center lg:items-start lg:text-left lg:justify-center flex flex-col gap-5">
        <p className="uppercase text-black text-2xl md:text-4xl lg:text-3xl font-bold w-8/12">
          {product.title}
        </p>
        <p className="text-black/50 text-sm md:w-9/12 lg:w-auto">
          {product.description}
        </p>
        <Button onClick={useNavigateToProductPage(product.id)}>
          See Product
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
