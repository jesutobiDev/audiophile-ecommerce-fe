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
  variant?: "small" | "medium";
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  productId,
  variant = "medium",
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

  const sizeStyles ={
    small: "px-3 py-2",
    medium: "px-5 py-3",
  }

  return (
    <div className={`flex items-center gap-5`}>
      <div
        className={`flex items-center ${sizeStyles[variant]} bg-light-grey gap-x-7`}
      >
        <button
          className={`cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out text-black/25 text-lg px-1`}
          onClick={handleDecrement}
        >
          -
        </button>
        <p className={`font-semibold text-black`}>
          {quantity}
        </p>
        <button
          className={`cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out text-black/25 text-lg px-1`}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <FaRegTrashAlt
        className={`hover:text-primary transition-all duration-300 ease-in-out cursor-pointer text-black/70`}
        onClick={handleRemove}
      />
    </div>
  );
};

export default QuantityControl;
