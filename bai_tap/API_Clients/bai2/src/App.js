import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LibraryList } from './component/LibraryComponent';
import { CreateLibrary } from './component/CreateLibraryComponent';
import { UpdateLibrary } from './component/UpdateLibraryComponent';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LibraryList />} /> 
      <Route path='/create' element={<CreateLibrary/>} /> 
      <Route path='/update/:id' element={<UpdateLibrary/>} /> 
    </Routes>
    
    </>
  );
}

export default App;
