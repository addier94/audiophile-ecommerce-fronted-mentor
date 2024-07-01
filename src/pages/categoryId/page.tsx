import { useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { ProductItem } from "../../components/common/Product/ProductItem";
import Container from "../../components/common/Container";
import { BestGear } from "../../components/common/BestGear";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";

export const CategoryId = () => {
  const { name } = useParams();

  return (
    <article
      className="
      flex-grow
    "
    >
      <Header name={name} />
      <Container
        className="
        flex
        flex-col
        gap-16
        py-16
      "
      >
        <ProductItem />
        <ProductItem className="lg:flex-row-reverse" />
        <ProductItem />
        <CategoriesList />
        <BestGear />
      </Container>
    </article>
  );
};
