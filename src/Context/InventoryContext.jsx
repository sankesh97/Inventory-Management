import { createContext, useState } from 'react';
import InventoryData from '../Data/InventoryData';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [InventoryState, setInventoryState] = useState(InventoryData);
  const [totalVal, setTotalVal] = useState();
  const [departments, setDepartments] = useState();

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

  return (
    <InventoryContext.Provider
      value={{
        InventoryState,
        totalVal,
        departments,
        setInventoryState,
        getTotalValues,
        getDepartments,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
