import Button from "../Button";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
export const CartModal = ({ isOpen }: CartModalProps) => {
  return (
    <article
      className={`
       bg-white 
       absolute 
       left-2/4 
       -translate-x-2/4 
       top-[110px] 
       sm:right-[20px]
       sm:left-auto
       sm:translate-x-0
       w-[327px] 
       sm:w-[377px]
       rounded-lg
       px-7 
       py-7 
       duration-300 
       ${isOpen ? "opacity-100" : "opacity-0"} `}
    >
      <header
        className="
        flex 
        justify-between 
        mb-8"
      >
        <h6
          className="
            text-h6 
            uppercase"
        >
          Cart (3)
        </h6>
        <button
          className="
          text-body 
          underline
          text-black/50"
        >
          Remove all
        </button>
      </header>
      <article className="flex flex-col gap-7">
        <section
          className="
          flex 
          justify-between 
          items-center
          font-bold"
        >
          <img
            src="/src/assets/cart/image-xx59-headphones.jpg"
            alt="headphones"
            className="w-12 h-12 rounded-sm"
          />
          <div>
            <h6 className="text-body">XX99 MK II</h6>
            <span className="text-[14px] text-black/50">$ 2.999</span>
          </div>
          <div
            className="
            w-24
            bg-gray-light
            flex
            justify-between
            h-8
            text-black/50
            text-[13px]
          "
          >
            <button
              className="
              w-8
            "
            >
              -
            </button>
            <span className="self-center text-black">1</span>
            <button
              className="
              w-8
            "
            >
              +
            </button>
          </div>
        </section>
      </article>
      <footer>
        <div
          className="
            flex
            justify-between
            font-bold
            my-6
          "
        >
          <p className="text-black/50 text-body">Total</p>
          <span className="text-h6">$ 5.396</span>
        </div>
        <Button variant="primary" className="w-full">
          Checkout
        </Button>
      </footer>
    </article>
  );
};
