import { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { InventoryContext } from '../Context/InventoryContext';
import { Link } from 'react-router-dom';

const Department = () => {
  const { departments, getDepartments } = useContext(InventoryContext);
  useEffect(() => {
    getDepartments();
  }, []);
  return (
    <div className='d-flex'>
      {departments &&
        departments.map((department) => (
          <Link
            key={department}
            className='text-decoration-none'
            to={`/department/${department}`}
          >
            <Card>
              <p className='card-text m-5'>{department}</p>
            </Card>
          </Link>
        ))}
    </div>
  );
};
export default Department;
