# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Product list desktop order confirmed preview](https://github.com/Rgit915/product-list-with-cart/blob/main/public/screenshots/product-list-desktop-order-confirmed-preview-solution.png)


![Product list tablet preview](https://github.com/Rgit915/product-list-with-cart/blob/main/public/screenshots/product-list-tablet-cart-preview-solution.png)



### Links

- Solution URL: [GitHub Repo](https://github.com/Rgit915/product-list-with-cart)
- Live Site URL: [Live Demo](https://product-list-with-cart-rgit915s-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

## Context API Overview

The state management in this project is handled using React's **Context API**, which allows global state access across components.

- **CartContext**: The main context used to manage the state of the cart.
  - **cartItems**: An array storing the products added to the cart, with each product including its name, quantity, and other relevant details.
  - **addToCart(item)**: Function to add a product to the cart. If the product already exists in the cart, its quantity is incremented; otherwise, the product is added with an initial quantity of 1.
  - **removeFromCart(itemName)**: Function to remove or decrement a product from the cart. If the product's quantity is more than 1, its quantity is decremented; if the quantity is 1, the product is removed from the cart.
  - **clearCart()**: Function to clear all items from the cart by setting `cartItems` to an empty array.

**How Context API works:**

- The `CartContext` is provided at the top-level of the app, so any component can access and modify the cart state.
- The `CartProvider` component wraps the application and provides the context values (`cartItems`, `addToCart`, `removeFromCart`, and `clearCart`) to its children.
- The `useCart` custom hook is used to access the `CartContext` values within functional components. It throws an error if used outside of a `CartProvider`, ensuring that the context is properly accessed.

**Handling Client-Side Rendering in Next.js:**

Next.js provides server-side rendering (SSR) by default, but for managing dynamic client-side interactions like cart state, client-side rendering (CSR) is required. Here's how it's handled in this project:

- **Client-Side State Management**: The `CartContext` and its state management functions are used in components that need to interact with the cart. This ensures that cart operations (adding, removing, updating) happen on the client side.
- **Conditional Rendering**: Components such as the cart modal and product list are conditionally rendered based on the client-side state. This approach ensures that interactions with the cart (e.g., adding an item) update the UI without requiring a server-side re-render.
- **Use of `useState` and `useContext` Hooks**: These React hooks are used to manage and access the cart state in a way that is consistent with client-side behavior.

By leveraging client-side state management and React hooks, the project effectively handles cart interactions while using Next.js for its SSR capabilities.

## Continued Development

As the project evolves, several enhancements and features are planned to improve functionality and user experience:

1. **Enhanced Cart Features**:
   - **Persistent Cart State**: Implement local storage or a backend solution to persist the cart state across page reloads and user sessions.

2. **User Authentication**:
   - **Login and Registration**: Integrate user authentication to manage user-specific cart data, enabling users to save and retrieve their cart across different sessions and devices.
   - **Order History**: Provide users with a history of their past orders and allow them to track their order status.

3. **Performance Optimization**:
   - **Lazy Loading**: Implement lazy loading for images and other resources to improve page load times and overall performance.
   - **Code Splitting**: Utilize code splitting to reduce the initial load time and improve performance by loading only necessary components.


### Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - The official React documentation is always my go-to resource for understanding React concepts and best practices.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - The Tailwind CSS documentation provides comprehensive guidance on using Tailwind's utility classes effectively.


## Author

- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/Rgit915)
- Github - [@Rgit915](https://github.com/Rgit915)

## Acknowledgments
I would like to thank [Frontend Queens](https://beacons.ai/frontendqueens) for providing this challenge and motivating us to work on various aspects of challenges, as well as [Frontend Mentor](https://www.frontendmentor.io/) for their platform that enable developers to practice and enhance their skills through real-world projects.