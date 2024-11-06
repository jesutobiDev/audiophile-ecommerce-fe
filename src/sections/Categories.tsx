import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

interface Category {
  name: string;
  imageUrl: string;
  href: string;
}

const Categories = () => {
  const categories: Category[] = [
    {
      name: "Headphones",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664227/headphone_category_image_qpm0mc.svg",
      href: "/headphones",
    },
    {
      name: "Speakers",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664226/speakers_category_image_o1wmhr.svg",
      href: "/speakers",
    },
    {
      name: "Earphones",
      imageUrl:
        "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730664228/earphones_categories_image_hmcsux.svg",
      href: "/earphones",
    },
  ];

  const CategoryItem: React.FC<{ category: Category }> = ({ category }) => (
    <Link href={category.href}>
      <div className="text-center cursor-pointer w-full h-44 lg:h-48 bg-light-grey rounded-lg relative flex flex-col items-center justify-end py-4">
        <div className="absolute -top-20 left-0 right-0 mx-auto flex justify-center">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="top-10 absolute left-0 right-0 mx-auto flex justify-center">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730673582/blur_tdwemo.svg"
            alt="blur"
            width={120}
            height={5}
          />
        </div>
        <p className="mt-8 text-lg uppercase font-semibold">{category.name}</p>
        <Button variant="plain" className="flex items-center gap-2 mt-2">
          <p>Shop</p>
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730662912/caret_right_hbwbxw.svg"
            alt="caret_right"
            width={5}
            height={10}
          />
        </Button>
      </div>
    </Link>
  );

  return (
    <div className="w-full grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-4 lg:gap-6 px-5 md:px-10 py-7 lg:px-40 mt-28 mb-7">
      {categories.map((category) => (
        <CategoryItem key={category.name} category={category} />
      ))}
    </div>
  );
};

export default Categories;
