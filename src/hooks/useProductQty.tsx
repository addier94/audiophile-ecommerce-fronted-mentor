import { useState } from "react";
import { TCartItem } from "../features/cartSlice";

export const useProductQty = (product: TCartItem) => {
  const [productItem, setProductItem] = useState<TCartItem>({
    ...product,
    quantity: 1,
    totalPrice: product.price,
  });

  const incrementQty = () => {
    setProductItem((prev) => {
      if (prev.quantity >= 100) return { ...prev };
      const qty = prev.quantity + 1;
      return {
        ...prev,
        quantity: qty,
        totalPrice: qty * prev.price,
      };
    });
  };

  const decrementQty = () => {
    setProductItem((prev) => {
      if (prev.quantity <= 1) return { ...prev };
      const qty = prev.quantity - 1;
      return {
        ...prev,
        quantity: qty,
        totalPrice: qty * prev.price,
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setProductItem((prev) => ({
        ...prev,
        quantity: value,
        totalPrice: prev.price * value,
      }));
    }
  };

  return {
    productItem,
    incrementQty,
    decrementQty,
    handleChange,
    setProductItem,
  };
};
