"use client";
import { useCart } from "../lib/context/CartContext";
import Image from "next/image";

import images from "../lib/data.json";
import AddToCartButton from "./AddToCartButton";

export default function DessertPage() {
  const { cartItems } = useCart();

  return (
    <section className="dessert-page lg:w-2/3 ">
      <div className="heading my-4">
        <h2 className="text-5xl text-rose-900 font-black leading-10">
          Desserts
        </h2>
      </div>
      <div className="dessert-menu md:grid md:grid-cols-3 md:gap-8">
        {images.map((item, index) => {
          //check if the item is in the cart
          const isInCart = cartItems.some(
            (cartItem) => cartItem.name === item.name
          );
          return (
            <div className="dessert-item relative" key={index}>
              <div className="dessert-image-container ">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={item.image.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={item.image.tablet}
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={item.image.mobile}
                  />
                  <Image
                    src={item.image.thumbnail}
                    alt={`${item.name} image`}
                    width={250}
                    height={240}
                    className={`rounded-xl object-cover w-full h-auto ${
                      isInCart ? "border-red border-2" : "border-none"
                    }`}
                  />
                </picture>
              </div>

              <AddToCartButton item={item} />

              <div className="dessert-details my-4">
                <span className="dessert-category text-rose-500 font-normal leading-4 ">
                  {item.category}
                </span>
                <p className="dessert-name font-semibold text-rose-900 leading-5">
                  {item.name}
                </p>
                <div className="dessert-price text-red leading-6 font-semibold">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
