import { useCart } from "../lib/context/CartContext"; // Import the Cart Context
import Image from "next/image";
import OrderTotal from "./OrderTotal";
import { useState } from "react";
import OrderModal from "./OrderModal";

const CartItemList = () => {
  const { cartItems, removeFromCart } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className="cart-items-list">
      <ul className="cart-items list-none">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col justify-between items-center gap-4 py-2"
          >
            <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
              <div className="space-y-2">
                <p className="text-rose-900 font-semibold">{item.name}</p>
                <p className="text-rose-400 font-semibold">
                  <span className="item-quantity text-red font-semibold pr-4">
                    {item.quantity}x
                  </span>
                  @ ${item.price.toFixed(2)}
                  <span className="total-price pl-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>

              <button onClick={() => removeFromCart(item.name)}>
                <Image
                  src="/assets/images/icon-remove-item.svg"
                  alt="remove button Icon"
                  width={17.5}
                  height={17.5}
                  className="rounded-full border-2 border-rose-400 px-1 py-1 hover:border-rose-900 hover:text-rose-900"
                  style={{ width: "auto", height: "auto" }}
                />
              </button>
            </div>
            <hr className="text-rose-100 w-full " />
          </li>
        ))}
      </ul>
      <OrderTotal/>
      <div className="carbon-neutral flex justify-between items-center bg-rose-50 rounded-lg px-4 py-4 mb-4 md:justify-center md:gap-2 ">
        <Image
          src="/assets/images/icon-carbon-neutral.svg"
          alt="image cart icon"
          width={20}
          height={20}
          className="w-5 h-auto"
        />
        <p className="text-sm text-rose-900 font-normal">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
      <button
      className="button w-full py-4 text-base font-semibold text-white bg-red rounded-3xl hover:bg-rose-800 "
      onClick={handleOpenModal}
      >
        Confirm Order
      </button>
      {isModalOpen && <OrderModal onClose={()=>{setIsModalOpen(false)}} />}
    </div>
  );
};

export default CartItemList;
