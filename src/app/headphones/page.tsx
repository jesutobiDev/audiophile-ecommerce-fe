import Header from "../../sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";
import { Product } from "@/types/Product";
import ProductItem from "@/components/ProductItem";

const HeadphonePage = () => {
  const Headphones: Product[] = [
    {
      id: "xx99-mark-ii",
      title: "XX99 Mark II Headphones",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
    },
    {
      id: "xx99-mark-ii",
      title: "XX99 Mark II Headphones",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
    },
    {
      id: "xx99-mark-ii",
      title: "XX99 Mark II Headphones",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
    },
  ];

  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">
          Headphones
        </h1>
      </Header>
      <main>
        <div className="my-16 flex flex-col gap-20">
          {Headphones.map((product, index) => (
            <ProductItem key={product.id} product={product} isReversed={index % 2 !== 0} />
          ))}
        </div>
        <Categories />
        <About />
      </main>
    </>
  );
};

export default HeadphonePage;
