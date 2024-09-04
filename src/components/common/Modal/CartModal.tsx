import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { RootState } from "../../../features/store";
import {
  TCartItem,
  clearCart,
  decrementProductQty,
  incrementProductQty,
} from "../../../features/cartSlice";
import { helpers } from "../../../utils/helpers";
import { useCallback } from "react";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface CartHeaderProps {
  amount: number;
  onClearCart: () => void;
}

const CartHeader = ({ amount, onClearCart }: CartHeaderProps) => (
  <header className="flex justify-between mb-8">
    <h6 className="text-h6 uppercase">Cart ({amount})</h6>
    <button onClick={onClearCart} className="text-body underline text-black/50">
      Remove all
    </button>
  </header>
);

interface CartItemProps extends TCartItem {
  // name: string;
  // price: number;
  // quantity: number;
  // image: string;
  incrementQty: () => void;
  decrementQty: () => void;
}
const CartItem = ({
  name,
  price,
  quantity,
  image,
  decrementQty,
  incrementQty,
}: CartItemProps) => (
  <section className="flex justify-between items-center font-bold">
    <img src={image} alt={name} className="w-12 h-12 rounded-sm" />
    <div>
      <h6 className="text-body">{name}</h6>
      <span className="text-[14px] text-black/50">
        {helpers.formatMoney(price)}
      </span>
    </div>
    <div className="w-24 bg-gray-light flex justify-between h-8 text-black/50 text-[13px]">
      <button
        aria-label={`Decrease quantity of ${name}`}
        className="w-8"
        onClick={decrementQty}
      >
        -
      </button>
      <span className="self-center text-black">{quantity}</span>
      <button
        aria-label={`Increase quantity of ${name}`}
        className="w-8"
        onClick={incrementQty}
      >
        +
      </button>
    </div>
  </section>
);

const CartFooter = ({ total }: { total: number }) => (
  <footer className="mt-6">
    <div className="flex justify-between font-bold">
      <p className="text-black/50 text-body">Total</p>
      <span className="text-h6">{helpers.formatMoney(total)}</span>
    </div>
    <Button variant="primary" className="w-full mt-6">
      Checkout
    </Button>
  </footer>
);

export const CartModal = ({ isOpen }: CartModalProps) => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const handleIncrement = (productId: number | string) => {
    dispatch(incrementProductQty({ id: productId }));
  };

  const handleDecrement = (productId: number | string) => {
    dispatch(decrementProductQty({ id: productId }));
  };

  return (
    <article
      className={`
        bg-white 
        absolute 
        z-30
        top-[110px] 
        duration-300 
        transform
        ${
          isOpen
            ? "left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[20px]"
            : "left-full"
        }
        w-[327px] 
        sm:w-[377px]
        rounded-lg
        px-7 
        py-7 
      `}
    >
      <CartHeader amount={totalQuantity} onClearCart={handleClearCart} />
      <article className="flex flex-col gap-7">
        {items.length > 0 &&
          items.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              incrementQty={() => handleIncrement(product.id)}
              decrementQty={() => handleDecrement(product.id)}
            />
          ))}
      </article>
      <CartFooter total={totalAmount} />
    </article>
  );
};
