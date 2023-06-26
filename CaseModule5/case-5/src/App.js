import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';
import {  ContentComponent } from './component/service/ContentComponent';
import { CreateServiceComponent } from './component/service/CreateServiceComponent';
import { EditServiceComponent } from './component/service/EditServiceComponent';

function App() {
  return (
    <> 
    <HeaderComponent/>
    <ContentComponent/>
    <FooterComponent/>
    <CreateServiceComponent />
    <EditServiceComponent />
    </>
  );
}

export default App;
