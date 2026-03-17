import { create } from "zustand";
import type { CartItem } from "@/features/cart/types";
import type { Product } from "@/features/products/types";

interface AppStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  changeQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  items: [],
    addToCart: (product) =>
    set((state) => {
        
  changeQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
}));
