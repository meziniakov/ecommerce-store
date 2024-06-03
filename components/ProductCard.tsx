"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./ui/currency";
import { useRouter } from "next/navigation";

interface ProductProps {
  item: Product;
}

const ProductCard: React.FC<ProductProps> = ({ item }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${item?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="group border bg-white rounded-xl cursor-pointer space-y-4 p-3 "
    >
      {/* Image */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt="Image"
          src={item.images[0].url}
          className="aspect-square rounded-md object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-5 px-6 w-full">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{item?.name}</p>
        <p className="text-sm text-gray-500">{item?.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={item.price} />
      </div>
    </div>
  );
};

export default ProductCard;
