import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InventoryContext } from '../Context/InventoryContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { InventoryState } = useContext(InventoryContext);
  const [currentProduct, setCurrentProduct] = useState();

  const getCurrentProduct = () => {
    setCurrentProduct(
      InventoryState.find((product) => product.id.toString() === productId)
    );
  };

  useEffect(() => {
    getCurrentProduct();
  }, []);

  return (
    <>
      {currentProduct && (
        <div className='m-3'>
          <h1>{currentProduct.name}</h1>
          <img src={currentProduct.imageUrl} style={{ maxWidth: '300px' }} />
          <p>Price: ${currentProduct.price}</p>
          <p>Stock: {currentProduct.stock}</p>
          <p>Supplier: {currentProduct.supplier}</p>
          <p>Department: {currentProduct.department}</p>
          <p>SKU: {currentProduct.sku}</p>
          <p>Delivered: {currentProduct.delivered}</p>
          <p>Description: {currentProduct.description}</p>
        </div>
      )}
    </>
  );
};
export default ProductPage;
