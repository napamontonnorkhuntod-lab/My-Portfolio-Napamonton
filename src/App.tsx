import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/index";
import TopPage from "../src/components/TopPage";
import Navbar  from './components/Navbar';

function App() {
  return (
    <>      
      <BrowserRouter>
        <Navbar/>
        <AppRoute />
      </BrowserRouter>      
      <TopPage/>
    </>
  )
}

export default App
