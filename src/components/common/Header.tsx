interface HeaderProps {
  name?: string;
}
export const Header = ({ name }: HeaderProps) => {
  return (
    <header
      className="
          bg-black
          -mt-[90px]
          pt-[90px]
          h-[192px]
          text-white
          flex
          items-center
          justify-center
          uppercase
          text-h4
        "
    >
      {name}
    </header>
  );
};
