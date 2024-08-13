import { useState } from "react";

export const ProductQty = () => {
  const [qty, setQty] = useState<number>(1);

  const increment = () => {
    setQty((prev) => (prev >= 100 ? prev : prev + 1));
  };

  const decrement = () => {
    setQty((prev) => (prev <= 1 ? prev : prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setQty(value);
    }
  };

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
      <button onClick={decrement} className="text-black/25">
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
      <button onClick={increment} className="text-black/25">
        +
      </button>
    </div>
  );
};
