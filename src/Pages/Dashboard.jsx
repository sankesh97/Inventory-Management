import { useContext, useEffect } from 'react';
import DashboardCard from '../Components/DashboardCard';
import { InventoryContext } from '../Context/InventoryContext';

const Dashboard = () => {
  const { getTotalValues, totalVal } = useContext(InventoryContext);
  useEffect(() => {
    getTotalValues();
  }, []);
  return (
    <div className='d-flex'>
      {totalVal && (
        <>
          <DashboardCard
            theText={'Total Stock'}
            theVal={totalVal.totalStock}
            type={'success'}
          />
          <DashboardCard
            theText={'Total Delivered'}
            theVal={totalVal.totalDelivered}
            type={'warning'}
          />
          <DashboardCard
            theText={'Low Stock Items'}
            theVal={totalVal.lowStock}
            type={'danger'}
          />
        </>
      )}
    </div>
  );
};
export default Dashboard;
