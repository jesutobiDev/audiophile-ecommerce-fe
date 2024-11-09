"use client";
import Header from "../sections/Header";
import Categories from "../sections/Categories";
import Image from "next/image";
import Button from "@/components/Button";
import { useNavigateToProductPage } from "@/utils/useNavigation";
import { Product } from "@/types/Product";
import About from "@/sections/About";
import FeaturedProducts from "@/sections/FeaturedProducts";

const HomePage = () => {

  const product: Product = {
    id: "xx99-mark-ii",
    title: "XX99 Mark II Headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    imageUrl:
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
  };

  return (
    <>
      <Header>
        <div className="flex lg:justify-between justify-center items-center py-7 relative px-0 lg:px-40">
          <div className="w-full md:w-[70%] lg:w-[45%] space-y-4 absolute lg:static z-10 flex flex-col items-center justify-center lg:items-start px-10 lg:px-0 text-center lg:text-left">
            <p className="uppercase opacity-50 tracking-widest font-light text-lg md:text-xl lg:text-sm">
              New Product
            </p>
            <h1 className="text-5xl font-bold uppercase">{product.title}</h1>
            <p className="opacity-75 w-10/12 md:text-lg lg:text-base">
              {product.description}
            </p>
            <Button onClick={useNavigateToProductPage(product.id)}>
              SEE PRODUCT
            </Button>
          </div>
          <div className="w-full lg:w-[55%] relative h-[430px] md:h-[500px] lg:h-[430px]">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>
      </Header>
      <main>
        <Categories />
        <FeaturedProducts />
        <About />
      </main>
    </>
  );
};

export default HomePage;
