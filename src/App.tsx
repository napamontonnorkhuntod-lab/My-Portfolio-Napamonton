import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/index";
import TopPage from "../src/components/TopPage";

function App() {
  return (
    <>      
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>      
      <TopPage/>
    </>
  )
}

export default App
