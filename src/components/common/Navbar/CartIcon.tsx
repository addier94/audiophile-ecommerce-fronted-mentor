import { useState } from "react";
import { CartModal } from "../Modal/CartModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";

export const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { length: cartItemCount } = useSelector(
    (state: RootState) => state.cart.items
  );

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const badgeClasses =
    "absolute top-0 right-0 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full transform translate-x-1/2 -translate-y-1/2";

  return (
    <>
      <button onClick={toggleModal} className="relative">
        <img
          src="/src/assets/shared/desktop/icon-cart.svg"
          alt="Cart Icon"
          className="cursor-pointer"
        />
        {cartItemCount > 0 && (
          <span className={badgeClasses}>{cartItemCount}</span>
        )}
      </button>
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};
