import { useParams } from "react-router-dom";

import { Header } from "../../components/common/Header";
import { ProductItem } from "../../components/common/Product/ProductItem";
import Container from "../../components/common/Container";
import { BestGear } from "../../components/common/BestGear";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import getByCategory from "../../actions/getByCategory";

export const CategoryId = () => {
  const { categoryName } = useParams();
  const categories = getByCategory(categoryName!);

  return (
    <article
      className="
      flex-grow
    "
    >
      <Header name={categoryName} />
      <Container
        className="
        flex
        flex-col
        gap-16
        py-16
      "
      >
        {categories.length > 0 &&
          categories.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              className={index % 2 === 1 ? "lg:flex-row-reverse" : ""}
            />
          ))}
        {/* <ProductItem className="lg:flex-row-reverse" /> */}
        <CategoriesList />
        <BestGear />
      </Container>
    </article>
  );
};
