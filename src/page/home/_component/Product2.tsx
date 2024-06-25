import Button from "../../../components/common/Button";

export const Product2 = () => {
  return (
    <article
      className="
        relative
        h-[320px]
        w-full
        flex
        flex-col
        justify-center
        gap-8
        mb-4
        px-6
        lg:px-12
        rounded-md
        overflow-hidden
      "
    >
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 sm:hidden"
        src="/src/assets/home/mobile/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 hidden sm:block lg:hidden"
        src="/src/assets/home/tablet/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 sm:hidden lg:block"
        src="/src/assets/home/desktop/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <h4
        className="
      text-h4
    "
      >
        ZX7 SPEAKER
      </h4>
      <Button variant="secondary">See Product</Button>
    </article>
  );
};
// absolute inset-0 h-full w-full object-cover
