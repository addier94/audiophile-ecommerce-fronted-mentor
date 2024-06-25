import { Header } from "./_component/Header";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import Container from "../../components/common/Container";
import { Product1 } from "./_component/Product1";
import { Product2 } from "./_component/Product2";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CategoriesList className="px-0" />
        <Product1 />
        <Product2 />
      </Container>
    </>
  );
};
