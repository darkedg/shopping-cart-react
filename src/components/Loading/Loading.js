import { Spinner } from 'react-bootstrap';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading mt-5">
      <Spinner animation="border" role="status" />
      <h5>Cargando...</h5>
    </div>
  )
}

export default Loading;
