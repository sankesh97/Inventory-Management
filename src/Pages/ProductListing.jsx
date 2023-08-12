import { useContext, useEffect, useState } from 'react';
import { InventoryContext } from '../Context/InventoryContext';
import { Link, useParams } from 'react-router-dom';

const ProductListing = () => {
  const { departmentName } = useParams;
  const { InventoryState, departments, getDepartments } =
    useContext(InventoryContext);
  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentName ? departmentName : 'All'
  );
  const [selectLowStock, setSelectLowStock] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState('');

  const sortByList = ['name', 'price', 'stock'];

  useEffect(() => {
    getDepartments();
    console.log(departmentName);
  }, []);

  const InventoryTable = InventoryState.filter((product) =>
    !(selectedDepartment === 'All')
      ? product.department.includes(selectedDepartment)
      : true
  )
    .filter((product) => (selectLowStock ? product.stock <= 10 : product))
    .sort((a, b) => {
      if (selectedSortBy === 'name') return a.name - b.name;
      if (selectedSortBy === 'price') return a.price - b.price;
      if (selectedSortBy === 'stock') return a.stock - b.stock;
    })
    .map((product) => (
      <tr key={product.id}>
        <td>
          <img src={product.imageUrl} style={{ maxWidth: '50px' }} />
        </td>
        <td>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </td>
        <td className='text-wrap'>{product.description}</td>
        <td>${product.price}</td>
        <td>{product.stock}</td>
        <td>{product.supplier}</td>
      </tr>
    ));

  return (
    <>
      <div className='d-flex justify-content-around align-items-center mt-3'>
        <h2>Products</h2>

        {/* Department Selection */}
        <select
          className='form-select'
          style={{ width: '220px' }}
          value={selectedDepartment}
          onChange={(event) => {
            setSelectedDepartment(event.target.value);
          }}
        >
          <option value={'All'} selected>
            Select Department
          </option>
          {departments &&
            departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
        </select>

        {/* Low Stock Checkbox */}
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            checked={selectLowStock}
            onChange={() => {
              setSelectLowStock(!selectLowStock);
            }}
            id='lowStock'
          />
          <label className='form-check-label' htmlFor='lowStock'>
            Low Stock Items
          </label>
        </div>

        {/* Sort by */}
        <select
          className='form-select'
          style={{ maxWidth: '120px' }}
          value={selectedSortBy}
          onChange={(event) => {
            setSelectedSortBy(event.target.value);
          }}
        >
          <option value={null} selected>
            Sort By
          </option>
          {sortByList &&
            sortByList.map((attribute) => (
              <option key={attribute} value={attribute}>
                {attribute}
              </option>
            ))}
        </select>

        {/* Add Button */}
        <Link to='/products/add-product' className='btn btn-primary'>
          Add Product
        </Link>
      </div>

      {/* Table */}
      <table className='table mt-4'>
        <thead className='table-light'>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>{InventoryTable}</tbody>
      </table>
    </>
  );
};
export default ProductListing;
