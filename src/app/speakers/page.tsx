import Header from "../../sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";
import { Product } from "@/types/Product";
import ProductItem from "@/components/ProductItem";

const HomePage = () => {
  const Speakers:Product[]=[
    {
      id: "zx9",
      title: "ZX9 Speakers",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      imageUrl: "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664226/speakers_category_image_o1wmhr.svg"
    },
    {
      id: "zx9",
      title: "ZX9 Speakers",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      imageUrl: "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664226/speakers_category_image_o1wmhr.svg"
    }
  ]
  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">
          Speaker
        </h1>
      </Header>
      <main>
      <div className="my-16 flex flex-col gap-20">
          {Speakers.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
        <Categories />
        <About />
      </main>
    </>
  );
};

export default HomePage;
