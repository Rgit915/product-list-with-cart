import { useCart } from "../lib/context/CartContext";  // Import the Cart Context

const CartItemList = () => {
  const { cartItems } = useCart();
  return (
    <div className='cart-items-list'>
      <ul className="cart-items list-none">
    {cartItems.map((item, index) => (
      <li key={index} className="flex justify-between items-center gap-4 py-2">

        <div>
          <p className="text-sm leading-4 text-gray-600 font-semibold">
            {item.name}
          </p>
          <p className="text-sm leading-4 text-gray-600 font-semibold">
            ${item.price}
          </p>
        </div>
      </li>
    ))}
  </ul></div>
  )
}

export default CartItemList