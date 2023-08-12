import { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { InventoryContext } from '../Context/InventoryContext';

const Department = () => {
  const { departments, getDepartments } = useContext(InventoryContext);
  useEffect(() => {
    getDepartments();
  }, []);
  return (
    <div className='d-flex'>
      {departments &&
        departments.map((department) => (
          <Card key={department}>
            <p className='card-text m-5'>{department}</p>
          </Card>
        ))}
    </div>
  );
};
export default Department;
