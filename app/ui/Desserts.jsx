import Image from "next/image";

import images from "../lib/data.json";

export default function DessertPage() {
  
  return (
    <section className="dessert-page ">
      <div className="heading my-4">
        <h2 className="text-5xl text-rose-900 font-black leading-10">
          Desserts
        </h2>
      </div>
      <div className="dessert-menu md:grid md:grid-cols-3 md:gap-8">
        {images.map((item, index) => (
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

                  className="rounded-xl object-cover w-full h-auto"
                />
              </picture>
              {/* <Image
              src={item.image.desktop} // Provide a default image
              alt={`${item.name} image`}
              width={800}
              height={800}
              srcSet={`
                ${item.image.mobile} 375w,
                ${item.image.tablet} 768w,
                ${item.image.desktop} 1024w
              `}
              sizes="(max-width: 767px) 100vw,
                     (max-width: 1023px) 50vw,
                     33vw"
              loading="lazy"
              className="rounded-xl object-cover w-full h-auto"
            /> */}
            </div>
            <div className="button-container w-[160x] h-[44px] absolute top-[60%] left-[20%]  flex justify-center space-x-6 ">
              <button className=" button rounded-3xl border-2 border-rose-400 px-4 py-2 bg-white flex justify-between items-center gap-4">
                <Image
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="image cart icon"
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                />
                Add to Cart
              </button>
            </div>
            <div className="dessert-details my-8">
              <span className="dessert-category text-rose-500 font-normal leading-4 ">
                {item.category}
              </span>
              <p className="dessert-name font-semibold text-rose-900 leading-5">
                {item.name}
              </p>
              <div className="dessert-price text-red leading-6 font-semibold">
                ${item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
