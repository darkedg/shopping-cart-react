import { Button, Card, Col } from 'react-bootstrap';
import { BASE_PATH } from '../../utils/constants';

import './Product.scss';

const Product = (props) => {
  const { product } = props;

  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.size}</Card.Text>
          <Card.Text>{product.price} $ / Unidades</Card.Text>
          <Button>Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product;
