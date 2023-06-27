import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';
import {  ContentComponent } from './component/service/ContentComponent';
import { CreateServiceComponent } from './component/service/CreateServiceComponent';
import { EditServiceComponent } from './component/service/EditServiceComponent';
import { CustomerList } from './component/customer/CustomerListComponent';
import { EditCustomer } from './component/customer/EditCustomerComponent';
import { CreateCustomer } from './component/customer/CreateCustomerComponent';

function App() {
  return (
    <> 
    <HeaderComponent/>
    <Routes>
    <Route path='/' element={<ContentComponent />} /> 
    <Route path='/createService' element={<CreateServiceComponent />} /> 
    <Route path='/editService' element={ <EditServiceComponent /> } /> 
    <Route path='/customer' element={ <CustomerList /> } /> 
    <Route path='/editCustomer/:id' element={ <EditCustomer /> } /> 
    <Route path='/createCustomer' element={ <CreateCustomer /> } /> 
    </Routes>
    <FooterComponent/>

    </>
  );
}

export default App;
