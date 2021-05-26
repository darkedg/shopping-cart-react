import { Container, Row } from "react-bootstrap";
import Loading from "../Loading";
import Product from "../Product";

const Products = (props) => {
  const { products: { result, loading, error } } = props;

  return (
    <Container>
      <Row>
        {
          loading || !result ? (
            <Loading />
          ) : (
            result.map((product, index) => (
              <Product key={index} product={product} />
            ))
          )
        }
      </Row>
    </Container>
  );
}

export default Products;