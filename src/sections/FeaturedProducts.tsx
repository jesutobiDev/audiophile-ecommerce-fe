import { Product } from "@/types/Product";
import Button from "@/components/Button";
import { useNavigateToProductPage } from "@/utils/useNavigation";
import Image from "next/image";

const FeaturedProducts = () => {
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
    <div className=" py-7 px-5 md:px-10 lg:px-40 space-y-10">
      <div className="bg-primary relative rounded-lg flex flex-col gap-10 lg:gap-0 lg:flex-row px-7 py-10 md:px-20 md:py-16 lg:p-0 justify-between lg:h-[400px]">
        <div className="absolute top-0 left-0 inset-0 h-1/2 lg:h-auto lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730796609/beats_gnbdsd.svg"
            alt="beats"
            layout="fill"
          />
        </div>
        <div className="lg:w-1/2 flex items-end justify-center relative overflow-hidden">
          <div className="lg:absolute -bottom-1">
            <Image
              src={FeaturedProducts[0].imageUrl}
              alt={FeaturedProducts[0].title}
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="lg:w-[400px] text-center items-center lg:items-start lg:text-left lg:justify-center flex flex-col gap-5 lg:pr-10 text-white">
          <p className="uppercase text-2xl md:text-5xl lg:text-3xl font-semibold md:w-1/2 lg:w-full">
            {FeaturedProducts[0].title}
          </p>
          <p className="text-sm md:w-9/12 lg:w-auto">
            {FeaturedProducts[0].description}
          </p>
          <Button
            variant="tertiary"
            onClick={useNavigateToProductPage(FeaturedProducts[0].id)}
          >
            See Product
          </Button>
        </div>
      </div>
      <div className="w-full h-[350px] md:h-72 relative rounded-lg overflow-hidden">
        <Image
          src={FeaturedProducts[1].imageUrl}
          alt={FeaturedProducts[1].title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg h-full"
        />
        <div className="absolute w-full h-full p-7 md:p-10 lg:p-20 flex items-start justify-center gap-7 flex-col">
          <p className="uppercase text-black text-2xl md:text-4xl lg:text-3xl font-semibold w-8/12">
            {FeaturedProducts[1].title}
          </p>
          <Button
            variant="secondary"
            onClick={useNavigateToProductPage(FeaturedProducts[1].id)}
          >
            See Product
          </Button>
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-52 md:h-64 rounded-lg overflow-hidden relative">
          <Image
            src={FeaturedProducts[2].imageUrl}
            alt={FeaturedProducts[2].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg h-full"
          />
        </div>
        <div className="w-full md:w-1/2 h-52 md:h-64 rounded-lg overflow-hidden p-7 md:p-10 lg:px-20 bg-light-grey flex flex-col items-start justify-center gap-7">
          <p className="uppercase text-black text-2xl md:text-4xl lg:text-3xl font-semibold w-8/12">
            {FeaturedProducts[1].title}
          </p>
          <Button
            variant="secondary"
            onClick={useNavigateToProductPage(FeaturedProducts[2].id)}
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
