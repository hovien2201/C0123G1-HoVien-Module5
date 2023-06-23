import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';
import {  ContentComponent } from './component/ContentComponent';

function App() {
  return (
    <>
    <HeaderComponent/>
    <ContentComponent/>
    <FooterComponent/>
    </>
  );
}

export default App;
