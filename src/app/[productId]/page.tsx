"use client";
import { useRouter } from "next/navigation";
import Header from "@/sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";
import Button from "@/components/Button";
import { ProductDetails } from "@/types/ProductDetails";
import Image from "next/image";
import QuantityControl from "@/components/QuantityControl";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "@/redux/slices/cartSlice";
import { useState, useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  // Sample product data
  const product: ProductDetails = {
    id: "xx99-mark-ii",
    name: "XX99 Mark II",
    category: "Headphone",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    imageUrl:
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png",
    price: 2999,
    features: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    ],
    inTheBox: [
      { name: "Headphone Unit", quantity: 1 },
      { name: "Replacement Earcups", quantity: 2 },
      { name: "User Manual", quantity: 1 },
      { name: "3.5mm 5m Audio Cable", quantity: 1 },
      { name: "Travel Bag", quantity: 1 },
    ],
    productGallery: [
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730674678/man_qo73p2.svg",
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730957007/gallery-2_ywzce6.svg",
      "https://res.cloudinary.com/dxzq8zubp/image/upload/v1730957006/gallery-3_awsvkq.svg",
    ],
    currency: "₦",
    totalQuantity: 10,
    quantityLeft: 5,
    relatedProduct: [],
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    dispatch(
      ADD_TO_CART({
        productId: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity,
      })
    );
  };

  useEffect(() => {
    const itemInCart = cart.items.find((item) => item.productId === product.id);
    setIsInCart(!!itemInCart);
    setQuantity(itemInCart?.quantity || 1);
  }, [cart, product.id]);

  return (
    <>
      <Header />
      <main className="px-5 md:px-10 lg:px-40">
        <Button
          onClick={handleGoBack}
          variant="plain"
          className=" py-3 mt-7 mb-4 capitalize"
        >
          Go Back
        </Button>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 py-7 lg:justify-between md:flex-row">
            <div className="w-full md:w-[900px] lg:w-[400px] md:h-[400px] h-[300px] overflow-hidden rounded-lg bg-light-grey flex items-center justify-center relative">
              <div className="relative w-[220px] h-[250px]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
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
            <div className="lg:w-[400px] lg:items-start lg:text-left md:justify-center flex flex-col gap-5">
              <p className="uppercase text-black text-3xl md:text-4xl lg:text-3xl font-bold w-8/12">
                {product.name}{" "}{product.category}
              </p>
              <p className="text-black/50 text-sm md:w-9/12 lg:w-auto">
                {product.description}
              </p>
              <p className="font-semibold text-lg">
                {product.currency} {product.price}
              </p>
              <div className="flex items-center gap-5 w-full">
                {isInCart ? (
                  <QuantityControl quantity={quantity} productId={product.id} />
                ) : (

                    <Button onClick={handleAddToCart} size="large">
                      Add to cart
                    </Button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex flex-col gap-5 lg:w-2/3">
              <h3 className="text-xl font-bold text-black uppercase">
                Features
              </h3>
              <ul className="text-black/50 space-y-5">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-balance">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row md:gap-20 lg:gap-5 lg:flex-col gap-5 flex-1">
              <h3 className="text-xl font-bold text-black uppercase">
                In the Box
              </h3>
              <ul className="space-y-3">
                {product.inTheBox.map((item, index) => (
                  <li
                    key={index}
                    className="text-black/50 text-sm flex items-center gap-3"
                  >
                    <p className="text-primary font-semibold">
                      {item.quantity}x
                    </p>
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Gallery */}
          <div className="flex gap-5 h-[750px] md:h-[500px] flex-col md:flex-row">
            <div className="flex flex-col gap-5 flex-1">
              {/* Left side images */}
              <div className="flex-1 bg-light-grey rounded-lg overflow-hidden relative">
                <Image
                  src={product.productGallery[0]}
                  alt="Gallery image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 bg-light-grey rounded-lg overflow-hidden relative">
                <Image
                  src={product.productGallery[1]}
                  alt="Gallery image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* Right side image */}
            <div className="flex-1 bg-light-grey rounded-lg overflow-hidden relative">
              <Image
                src={product.productGallery[2]}
                alt="Gallery image 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <Categories />
        <About />
      </main>
    </>
  );
};

export default Product;
