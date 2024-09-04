interface ProductQtyProps {
  qty: number;
  incrementQty: () => void;
  decrementQty: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const ProductQty = ({
  qty,
  decrementQty,
  incrementQty,
  handleChange,
}: ProductQtyProps) => {
  return (
    <div
      className="
          bg-gray-light
          h-12
          w-[120px]
          flex
          items-center
          justify-between
          px-5
        "
    >
      <button onClick={() => decrementQty()} className="text-black/25">
        -
      </button>
      <input
        type="text"
        value={qty}
        onChange={handleChange}
        className="
            outline-none
            bg-gray-light
            text-center
            w-8
            text-subtitle
          "
      />
      <button onClick={() => incrementQty()} className="text-black/25">
        +
      </button>
    </div>
  );
};
