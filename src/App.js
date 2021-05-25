import TopMenu from './components/TopMenu';
import Product from './components/Products';
import useFetch from './hooks/useFetch';
import { urlApiProducts } from './utils/constants';

function App() {
  const products = useFetch(urlApiProducts, null);

  return (
    <div>
      <TopMenu />
      <Product products={products} />
    </div>
  );
}

export default App;
