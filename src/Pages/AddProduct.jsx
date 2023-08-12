import { useContext, useEffect, useState } from 'react';
import { InventoryContext } from '../Context/InventoryContext';

const AddProduct = () => {
  const { departments, getDepartments, AddProduct } =
    useContext(InventoryContext);
  const [formInputs, setFormInputs] = useState({ department: departments[0] });
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
            value={departments[0]}
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='imageUrl' className='form-label'>
            Image URL
          </label>
          <input
            type='url'
            required
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
