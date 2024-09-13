"use client";
import { useCart } from "../lib/context/CartContext";  // Import the Cart Context
import Image from "next/image";
import CartItemList from "./CartItemList";

export default function Cart() {
  const { cartItems } = useCart();

  // Calculate total quantity of all items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="cart-page lg:w-1/3 lg:m-8">
      <div className="bg-white rounded-lg p-4 w-full lg:py-8">
        <h2 className="text-3xl font-bold text-red">
          Your Cart ({totalItems})
        </h2>
        {totalItems === 0 ? (
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src="/assets/images/illustration-empty-cart.svg"
              alt="image icon of cake"
              width={128}
              height={128}
            />
            <p className="text-md leading-4 text-rose-500 font-semibold">
              Your added items will appear here.
            </p>
          </div>
        ) : (
          <CartItemList />
        )}
      </div>
    </section>
  );
}
