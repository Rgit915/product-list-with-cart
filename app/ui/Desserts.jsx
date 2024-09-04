import Image from "next/image";

import images from "../lib/data.json";

export default function DessertPage() {
  return (
    <section className="dessert-page ">
      <div className="heading">
        <h2>
          Desserts
        </h2>
      </div>
      <div className="dessert-menu">
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
            <div className="button-container ">
              <button>
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
            <div className="dessert-details">
              <span className="dessert-category">
                {item.category}
              </span>
              <p className="dessert-name">
                {item.name}
              </p>
              <div className="dessert-price">
                ${item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
