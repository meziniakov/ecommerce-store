"use client";
import CartItem from "@/components/Cart-Item";
import Summary from "@/components/Summary";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

const CartPage = () => {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl text-black">Корзина</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">Нет товаров в корзине</p>
              )}
              <ul>
                {cart.items.map((product) => (
                  <CartItem key={product.id} data={product} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CartPage;
