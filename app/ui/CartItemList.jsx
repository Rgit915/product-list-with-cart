import { useCart } from "../lib/context/CartContext"; // Import the Cart Context
import Image from "next/image";

const CartItemList = () => {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div className="cart-items-list">
      <ul className="cart-items list-none">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center gap-4 py-2"
          >
            <div className="flex justify-between w-full py-4 text-sm leading-[18.52px]">
              <div className="space-y-2">
                <p className=" text-rose-900 font-semibold">{item.name}</p>
                <p className=" text-rose-400 font-semibold ">
                  <span className="item-qauntity text-red font-semibold pr-4">
                    1x
                  </span>
                  @ ${item.price}
                  <span className="total-price pl-2">${item.price}</span>
                </p>
              </div>

              <button onClick={() => removeFromCart(item.name)}>
                <Image
                  src="/assets/images/icon-remove-item.svg"
                  alt="remove button Icon"
                  width={17.5}
                  height={17.5}
                  className="rounded-full border-2 border-rose-400 "
                  style={{ width: 'auto', height: 'auto' }}
                />
              </button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
