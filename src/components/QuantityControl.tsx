import { useDispatch } from "react-redux";
import {
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  REMOVE_FROM_CART,
} from "@/redux/slices/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";

interface QuantityControlProps {
  quantity: number;
  productId: string;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  productId,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(INCREMENT_CART_ITEM(productId));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(DECREMENT_CART_ITEM(productId));
    }
  };

  const handleRemove = () => {
    dispatch(REMOVE_FROM_CART(productId));
  };

  return (
    <div className="flex items-center gap-5">
      <div className="bg-light-grey flex gap-x-7 items-center px-5 py-2">
        <button
          className="cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out px-1 text-dark-grey py-2"
          onClick={handleDecrement}
        >
          -
        </button>
        <p className="font-semibold">{quantity}</p>
        <button
          className="cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out px-1 text-dark-grey py-2"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <FaRegTrashAlt className="hover:text-primary transition-all duration-300 ease-in-out cursor-pointer text-xl text-black/70" onClick={handleRemove} />
    </div>
  );
};

export default QuantityControl;
