import { Product } from "@/types/types";
import { data } from "autoprefixer";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Товар уже добавлен в корзину");
        }

        set({ items: [...get().items, data] });
        toast.success("Товар успешно добавлен в корзину");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Товар успешно удален из корзины");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Все товары успешно удалены из корзины");
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
