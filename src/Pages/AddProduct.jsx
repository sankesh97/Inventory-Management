import { useContext, useEffect, useState } from 'react';
import { InventoryContext } from '../Context/InventoryContext';

const AddProduct = () => {
  const { departments, getDepartments, AddProduct } =
    useContext(InventoryContext);
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [formInputs, setFormInputs] = useState({});
  useEffect(() => {
    getDepartments();
  }, []);

  const formOnChangeHandler = (event) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
    console.log(formInputs);
  };

  return (
    <div className='m-3'>
      <h1>Add New Product</h1>
      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          AddProduct(formInputs);
        }}
      >
        <div className='mb-2'>
          <label htmlFor='department' className='form-label'>
            Department
          </label>
          <select
            id='department'
            required
            className='form-select'
            value={selectedDepartment}
            onChange={formOnChangeHandler}
          >
            {departments &&
              departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
          </select>
        </div>
        <div className='mb-2'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            onChange={formOnChangeHandler}
            className='form-control'
            id='name'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='description'
            rows='3'
            onChange={formOnChangeHandler}
          ></textarea>
        </div>
        <div className='mb-2'>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='number'
            onChange={formOnChangeHandler}
            className='form-control'
            id='price'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='stock' className='form-label'>
            Stock
          </label>
          <input
            type='text'
            onChange={formOnChangeHandler}
            className='form-control'
            id='stock'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='sku' className='form-label'>
            SKU
          </label>
          <input
            type='text'
            onChange={formOnChangeHandler}
            className='form-control'
            id='sku'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='supplier' className='form-label'>
            Supplier
          </label>
          <input
            type='text'
            onChange={formOnChangeHandler}
            className='form-control'
            id='supplier'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='delivered' className='form-label'>
            Delivered
          </label>
          <input
            type='text'
            onChange={formOnChangeHandler}
            className='form-control'
            id='delivered'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='imageUrl' className='form-label'>
            Image URL
          </label>
          <input
            type='url'
            onChange={formOnChangeHandler}
            className='form-control'
            id='imageUrl'
          />
        </div>
        <div className='mb-2'>
          <button type='submit' className='btn btn-primary'>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
