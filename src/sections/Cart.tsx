'use client'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { CLEAR_CART } from "@/redux/slices/cartSlice";
import Button from "@/components/Button";
import { CartItem } from "@/types/cartTypes";
import QuantityControl from "@/components/QuantityControl";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface CartProps {
  cartOpen: boolean;
}

const Cart: React.FC<CartProps> = ({ cartOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);

  const handleClearCart = () => {
    dispatch(CLEAR_CART());
  };

  const navigateCart = () => {
    if (cart.items.length === 0) {
      router.push("/");
    } else {
      router.push("/checkout");
    }
  };

  const renderCartItem = (item: CartItem) => (
    <div
      key={item.productId}
      className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:gap-20"
    >
      <div className="flex gap-5 flex-1 items-center">
        <div className="w-16 h-16 bg-light-grey rounded-lg flex items-center justify-center">
          <Image src={item.imageUrl} alt={item.name} width={40} height={40} />
        </div>
        <div className="flex-1">
          <p className="text-black font-bold text-xl uppercase">{item.name}</p>
          <p className="text-black/50 font-semibold text-lg">₦{item.price}</p>
        </div>
      </div>
      <QuantityControl
        productId={item.productId}
        quantity={item.quantity}
        variant="small"
      />
    </div>
  );

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center space-y-5 py-10">
      <AiOutlineShoppingCart className="text-black/50 text-7xl" />
      <p className="text-black/50 text-lg font-medium">Your cart is empty.</p>
    </div>
  );

  return (
    <div
      className={`absolute left-0 top-20 w-screen h-screen bg-black/30 z-50 px-5 md:px-10 lg:px-40 justify-end ${
        cartOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-5 space-y-5 h-fit w-full md:w-fit md:min-w-1/2 lg:min-w-[500px] mt-5">
        <div className="flex items-center justify-between">
          <p className="uppercase text-black font-bold text-lg">
            Cart ({cart.items.length})
          </p>
          {cart.items.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-black/50 underline hover:text-primary transition-all duration-300 ease-in-out cursor-pointer font-medium"
            >
              Remove all
            </button>
          )}
        </div>

        {cart.items.length === 0 ? (
          renderEmptyState()
        ) : (
          <div className="space-y-4">{cart.items.map(renderCartItem)}</div>
        )}

        {cart.items.length > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-black/50 uppercase">TOTAL</p>
            <p className="text-black font-bold text-xl">₦{cart.totalPrice}</p>
          </div>
        )}

        <Button size="large" onClick={navigateCart}>
          {cart.items.length === 0 ? "Start Shopping" : "Checkout"}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
