import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Department from './Pages/Department';
import ProductListing from './Pages/ProductListing';
import ProductPage from './Pages/ProductPage';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 bg-dark vh-100 p-3'>
            <Sidebar></Sidebar>
          </div>
          <div className='col-md-9'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/department' element={<Department />} />
              <Route path='/products' element={<ProductListing />}>
                <Route path=':productId' element={<ProductPage />} />
                <Route path='add-product' element={<AddProduct />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
