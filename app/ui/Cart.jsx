import Image from "next/image";

export default function Cart(){

  return(
    <section className="cart-page">
      <div>
      <h2>Your Cart (0) </h2>
      <Image src="/assets/images/illustration-empty-cart.svg" alt="image icon of cake"
      width={128} height={128} />
      <p>Your added items will appear here.</p>
      </div>
    </section>
  );
}