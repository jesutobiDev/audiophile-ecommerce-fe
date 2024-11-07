import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { REMOVE_FROM_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, CLEAR_CART } from "@/redux/slices/cartSlice";
import Button from "@/components/Button";
import { CartItem } from "@/types/cartTypes";

interface CartProps {
  cartOpen: boolean;
}

const Cart: React.FC<CartProps> = ({ cartOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleRemove = (productId: string) => {
    dispatch(REMOVE_FROM_CART(productId));
  };

  const handleIncrement = (productId: string) => {
    dispatch(INCREMENT_CART_ITEM(productId));
  };

  const handleDecrement = (productId: string) => {
    dispatch(DECREMENT_CART_ITEM(productId));
  };

  const handleClearCart = () => {
    dispatch(CLEAR_CART());
  };

  const renderCartItem = (item: CartItem) => (
    <div key={item.productId} className="flex items-center justify-between space-y-4">
      <p>{item.name}</p>
      <div className="flex items-center space-x-2">
        <button onClick={() => handleDecrement(item.productId)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleIncrement(item.productId)}>+</button>
      </div>
      <p>₦{item.price * item.quantity}</p>
      <button onClick={() => handleRemove(item.productId)}>Remove</button>
    </div>
  );

  return (
    <div className={`absolute left-0 top-20 w-screen h-screen bg-black/30 z-10 px-5 md:px-10 lg:px-40 justify-end ${cartOpen ? 'flex' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-5 space-y-5 h-fit w-full md:w-1/2 lg:w-[400px] mt-5">
        <div className="flex items-center justify-between">
          <p className="uppercase text-black font-bold text-lg">Cart ({cart.items.length})</p>
          <button onClick={handleClearCart} className="text-black/50 underline hover:text-primary transition-all duration-300 ease-in-out cursor-pointer font-medium">
            Remove all
          </button>
        </div>
        
        <div>
          {cart.items.map(renderCartItem)}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-black/50 uppercase">TOTAL</p>
          <p className="text-black font-bold text-xl">₦{cart.totalPrice}</p>
        </div>
        
        <Button size="large">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
