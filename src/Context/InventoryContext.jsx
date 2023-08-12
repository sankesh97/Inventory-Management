import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import InventoryData from '../Data/InventoryData';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [InventoryState, setInventoryState] = useState(InventoryData);
  const [totalVal, setTotalVal] = useState();
  const [departments, setDepartments] = useState();
  const navigate = useNavigate();

  // Calculate the Dashboard Values
  const getTotalValues = () => {
    const tempValues = InventoryState.reduce(
      (totalvals, currentProduct) => {
        let totalStock = totalvals.totalStock + currentProduct.stock;
        let totalDelivered =
          totalvals.totalDelivered + currentProduct.delivered;
        let lowStock =
          currentProduct.stock <= 10
            ? totalvals.lowStock + 1
            : totalvals.lowStock;
        return { totalStock, totalDelivered, lowStock };
      },
      { totalStock: 0, totalDelivered: 0, lowStock: 0 }
    );
    setTotalVal(tempValues);
  };

  //Get Department List
  const getDepartments = () => {
    const TempDepartments = InventoryState.reduce(
      (DepartmentsList, currentProduct) =>
        !DepartmentsList.includes(currentProduct.department)
          ? [...DepartmentsList, currentProduct.department]
          : DepartmentsList,
      []
    );
    setDepartments(TempDepartments);
  };

  //Add Products
  const AddProduct = (productData) => {
    setInventoryState((prevState) => [
      ...prevState,
      {
        ...productData,
        id: uuidv4(),
        stock: Number(productData.stock),
        delivered: Number(productData.delivered),
        price: Number(productData.price),
      },
    ]);
    navigate('/products');
  };

  return (
    <InventoryContext.Provider
      value={{
        InventoryState,
        totalVal,
        departments,
        setInventoryState,
        getTotalValues,
        getDepartments,
        AddProduct,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
