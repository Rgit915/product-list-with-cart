"use client"
import { useCart } from "../lib/context/CartContext";  // Import the Cart Context

import Image from "next/image";
import CartItemList from "./CartItemList";

export default function Cart() {
const { cartItems } = useCart();

  return (
    <section className="cart-page">
      <div className="bg-white rounded-lg p-4 w-full">
        <h2 className="text-3xl font-bold text-red">Your Cart ({cartItems.length}) </h2>
        {cartItems.length === 0 ?(
          <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="image icon of cake"
            width={128}
            height={128}
          />
          <p className="text-md leading-4 text-rose-500 font-semibold ">
            Your added items will appear here.
          </p>
        </div>
        ) : (
          <CartItemList/>
        )}

      </div>
    </section>
  );
}
