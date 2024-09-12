import { useCart } from "../lib/context/CartContext";
import Image from "next/image";
import { useMemo } from "react";

const AddToCartButton = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Calculate the quantity of the item in the cart
  const quantity = useMemo(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.name === item.name);
    return cartItem ? cartItem.quantity : 0; // If the item is not in the cart, return 0
  }, [cartItems, item.name]);

  const handleAdd = () => {
    addToCart(item); // Add the item via the context method
  };

  const handleRemove = () => {
    removeFromCart(item.name); // Remove the item via the context method
  };

  return (
    <div className="button-container text-xs">
      {quantity > 0 ? (
        <div className="relative button w-36 h-10 rounded-3xl border-2 border-rose-400 px-4 py-2 bg-red text-sm text-white flex justify-between items-center gap-2 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105 animate-scale-in">
          <button
            className="font-bold rounded-full border-white border-2 px-1 py-2 transition-transform"
            onClick={handleRemove}
          >
            <Image
              src="/assets/images/icon-decrement-quantity.svg"
              alt="remove button Icon"
              width={10}
              height={10}
            />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            className="font-bold rounded-full border-white border-2 px-1 py-1 transition-transform"
            onClick={handleAdd}
          >
            <Image
              src="/assets/images/icon-increment-quantity.svg"
              alt="add button Icon"
              width={10}
              height={10}
            />
          </button>
        </div>
      ) : (
        <button
          className="relative button rounded-3xl border-2 border-rose-400 px-4 py-2 bg-white flex justify-between items-center gap-4 cursor-pointer left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:border-red hover:text-red hover:scale-105 animate-scale-in"
          onClick={handleAdd}
        >
          <Image
            src="/assets/images/icon-add-to-cart.svg"
            alt="image cart icon"
            width={20}
            height={20}
            className="w-5 h-auto"
          />
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
