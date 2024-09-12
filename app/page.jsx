import DessertPage from "./ui/Desserts";
import Cart from "./ui/Cart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-8 md:w-full lg:flex-row lg:items-start lg:justify-between font-Red_Hat_Text bg-rose-50">
      <DessertPage />
      <Cart/>
    </main>
  );
}
