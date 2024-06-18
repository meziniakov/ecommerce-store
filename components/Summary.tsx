"use client";

import useCart from "@/hooks/use-cart";
import Button from "./ui/Button";
import Currency from "./ui/currency";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Оплата завершена");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast("Произошла ошибка, попробуйте позже");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productIds: items.map((item) => item.id),
          }),
        }
      );
      const data = await response.json();
      console.log("response: ", response);
      console.log("data: ", data);
      toast.success("Заказ принят");
      window.location = data.url;
    } catch (e) {
      toast.error("Ошибка принятия заказа");
      console.log("Error onCheckout: ", e);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Информация о заказе</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order toal</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="mt-6 w-full">
        Оплатить
      </Button>
    </div>
  );
};
export default Summary;
