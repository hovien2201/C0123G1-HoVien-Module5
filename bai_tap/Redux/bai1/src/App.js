import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersList } from './component/UsersComponent';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UsersList />}/>
      </Routes>
    </>
  );
}

export default App;
