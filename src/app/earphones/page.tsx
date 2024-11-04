import Header from "../../sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";
import { Product } from "@/types/Product";
import ProductItem from "@/components/ProductItem";

const HomePage = () => {
  const Earphones: Product[] = [
    {
      id: "yx1",
      title: "YXI Wireless Earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664228/earphones_categories_image_hmcsux.svg",
    },
    {
      id: "yx1",
      title: "YXI Wireless Earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664228/earphones_categories_image_hmcsux.svg",
    },
    {
      id: "yx1",
      title: "YXI Wireless Earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664228/earphones_categories_image_hmcsux.svg",
    },
  ];
  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">
          Earphones
        </h1>
      </Header>
      <main>
        <div className="my-16 flex flex-col gap-20">
          {Earphones.map((product, index) => (
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
