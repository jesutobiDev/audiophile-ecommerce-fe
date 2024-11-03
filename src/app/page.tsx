"use client";
import Header from "../sections/Header";
import Categories from "../sections/Categories";
import Image from "next/image";
import Button from "@/components/Button";
import { useNavigateToProductPage } from "@/utils/useNavigation";
import { Product } from "@/types/Product";

const HomePage = () => {
  const navigateToProductPage = useNavigateToProductPage();

  const product: Product = {
    id: "xx99-mark-ii",
    title: "XX99 Mark II Headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    imageUrl:
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
  };

  const handleProductClick = () => {
    navigateToProductPage(product.id);
  };

  return (
    <>
      <Header>
        <div className="flex lg:justify-between justify-center items-center py-7 relative px-0 lg:px-28">
          <div className="w-full md:w-[70%] lg:w-[45%] space-y-4 absolute lg:static z-10 flex flex-col items-center justify-center lg:items-start px-10 lg:px-0 text-center lg:text-left">
            <p className="uppercase opacity-50 tracking-widest font-light text-lg md:text-xl lg:text-sm">
              New Product
            </p>
            <h1 className="text-5xl font-bold uppercase">{product.title}</h1>
            <p className="opacity-75 w-10/12 md:text-lg lg:text-base">
              {product.description}
            </p>
            <Button onClick={handleProductClick}>SEE PRODUCT</Button>
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
        <div className="flex flex-col-reverse lg:flex-row px-10 gap-10 lg:px-28 py-7 lg:justify-between">
          <div className="lg:w-[400px] text-center items-center lg:items-start lg:text-left lg:justify-center flex flex-col gap-5">
            <p className="uppercase text-black text-2xl md:text-4xl lg:text-2xl font-semibold w-8/12">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </p>
            <p className="text-black/50 text-sm md:w-9/12 lg:w-auto">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="lg:w-[400px] relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
            <Image src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730674678/man_qo73p2.svg" alt="man_listening" layout="fill"  />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
