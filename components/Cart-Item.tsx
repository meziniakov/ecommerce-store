"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "./ui/icon-button";
import Currency from "./ui/currency";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative w-24 h-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images[0]?.url || ""}
          alt="TODO"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => cart.removeItem(data.id)}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="font-semibold text-lg text-black">{data.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};
export default CartItem;
