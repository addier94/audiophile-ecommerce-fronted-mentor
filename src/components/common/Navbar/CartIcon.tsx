import { useState } from "react";
import { CartModal } from "../Modal/CartModal";

export const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleModal}>
        <img
          src="/src/assets/shared/desktop/icon-cart.svg"
          alt="Cart Icon"
          className="cursor-pointer"
        />
      </button>
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};
