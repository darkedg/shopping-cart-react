import { Button, Card, Col } from 'react-bootstrap';
import { BASE_PATH } from '../../utils/constants';

import './Product.scss';

const Product = (props) => {
  const { product, addProductCart } = props;

  return (
    <Col xs={12} sm={6} md={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Talla: {product.size}</Card.Text>
          <Card.Text>{product.price.toFixed(2)} $ / Unidad</Card.Text>
          <Button onClick={() => addProductCart(product.id, product.name)}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product;
