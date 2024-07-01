import { BestGear } from "../../components/common/BestGear";
import Container from "../../components/common/Container";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import { Header } from "./__components/Header";
import { Product1 } from "./__components/Product1";
import { Product2 } from "./__components/Product2";
import { Product3 } from "./__components/Product3";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <CategoriesList
            className="
            py-8
            sm:py-12
          "
          />
          <Product1 />
          <Product2 />
          <Product3 />
          <BestGear className="py-24" />
        </Container>
      </main>
    </>
  );
};
