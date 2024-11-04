import { Product } from "@/types/Product";
import Button from "@/components/Button";
import { useNavigateToProductPage } from "@/utils/useNavigation";
import Image from "next/image";

const FeaturedProducts = () => {
  const navigateToProductPage = useNavigateToProductPage();
  const FeaturedProducts: Product[] = [
    {
      id: "zx9",
      title: "ZX9 Speaker",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730751167/featured-1_hn78tp.svg",
    },
    {
      id: "xx7",
      title: "ZX7 Speaker",
      description:
        "Experience naturally sounding headphones with the XX99 Mark II, which are built to deliver the best possible sound.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730751438/featured-2_b3km9k.svg",
    },
    {
      id: "yx1",
      title: "YX1 Earphones",
      description:
        "Experience the best audio quality with the YX1 earphones, which are built to deliver the best possible sound.",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730751350/featured-3_w2uazc.svg",
    },
  ];
  return (
    <div className=" py-7 px-0 lg:px-40">
      <div className="bg-primary rounded-lg flex justify-between">
        <div className="w-1/2 flex items-end justify-center relative h-[400px] overflow-hidden">
          <div className="absolute -bottom-1">
            <Image
              src={FeaturedProducts[0].imageUrl}
              alt={FeaturedProducts[0].title}
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="lg:w-[400px] text-center items-center lg:items-start lg:text-left lg:justify-center flex flex-col gap-5">
          <p className="uppercase text-black text-2xl md:text-4xl lg:text-3xl font-bold w-8/12">
            {FeaturedProducts[0].title}
          </p>
          <p className="text-black/50 text-sm md:w-9/12 lg:w-auto">
            {FeaturedProducts[0].description}
          </p>
          <Button
            variant="tertiary"
            onClick={() => navigateToProductPage(FeaturedProducts[0].id)}
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
