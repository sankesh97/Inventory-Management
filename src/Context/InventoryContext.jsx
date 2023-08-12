import { createContext, useState } from 'react';
import InventoryData from '../Data/InventoryData';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [InventoryState, setInventoryState] = useState(InventoryData);
  const [totalVal, setTotalVal] = useState();

  // Calculate the Dashboard Values
  const getTotalValues = () => {
    const tempValues = InventoryState.reduce(
      (totalvals, currentproduct) => {
        let totalStock = totalvals.totalStock + currentproduct.stock;
        let totalDelivered =
          totalvals.totalDelivered + currentproduct.delivered;
        let lowStock =
          currentproduct.stock <= 10
            ? totalvals.lowStock + 1
            : totalvals.lowStock;
        return { totalStock, totalDelivered, lowStock };
      },
      { totalStock: 0, totalDelivered: 0, lowStock: 0 }
    );
    setTotalVal(tempValues);
    console.log(totalVal);
  };

  return (
    <InventoryContext.Provider
      value={{ InventoryState, totalVal, setInventoryState, getTotalValues }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
