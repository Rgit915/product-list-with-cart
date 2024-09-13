import Image from "next/image";
import { useCart } from "../lib/context/CartContext";
import OrderTotal from "./OrderTotal";

const OrderModal = ({ onClose }) => {
  const { cartItems, clearCart } = useCart();

  // Function to clear the cart and navigate to the homepage
  const handleClose = () => {
    clearCart(); // Clear the cart
    onClose(); // Close the modal
  };

  return (
    <div className="order-confirmed"  onClick={handleClose}>
      <div className="flex flex-col justify-between items-center mt-36 bg-white rounded-t-2xl p-4 md:mt-10 md:rounded-xl">
      <div className="p-4 space-y-4">
        <Image
          src="/assets/images/icon-order-confirmed.svg"
          alt="checkmark"
          width={48}
          height={48}
        />
        <h2 className="text-rose-900 text-6xl font-bold">Order Confirmed</h2>
        <p className="text-base text-rose-500 font-normal">
          we hope you enjoy your food.
        </p>
      </div>
      <div className="order-list bg-rose-50 p-4 rounded-lg w-full">
        <ul className="cart-items list-none">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between items-center gap-2"
            >
              <div className="flex justify-between w-full py-2 text-sm">
                <div className="flex justify between items-center gap-4">
                  <Image
                    src={item.image.thumbnail}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div className="text-sm">
                    <p className="text-rose-900 font-semibold ">{item.name}</p>
                    <p className="text-rose-400 font-semibold">
                      <span className="item-quantity text-red font-semibold pr-4">
                        {item.quantity}x
                      </span>
                      @ ${item.price}
                    </p>
                  </div>
                </div>
                <span className="total-price flex items-center text-base text-rose-900 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <hr className="text-rose-100 w-full " />
            </li>
          ))}
        </ul>
        <OrderTotal />
      </div>
      <div className="new-order w-full mt-6">
        <button className="button w-full flex justify-center items-center px-2 py-4 text-base font-semibold text-white bg-red rounded-3xl mb-10">

            <span>Start New Order</span>

        </button>
      </div>
      </div>

    </div>
  );
};

export default OrderModal;
