import { useCart } from "../lib/context/CartContext";

const OrderTotal = () => {
  const { cartItems } = useCart();

  // Calculate the order total
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (

      <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
        <div className="flex justify-between items-center gap-4 w-full">
          <p className="text-sm text-rose-900 font-normal">Order Total</p>
          <p className="text-2xl text-rose-900 font-black">${orderTotal.toFixed(2)}</p>
        </div>
      </div>

  )
}

export default OrderTotal