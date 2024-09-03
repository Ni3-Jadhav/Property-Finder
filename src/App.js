import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import PaymentPage from "./Pages/PaymentPage";
import SuccesPayPage from "./Pages/SuccessPayPage";
import PropertyAppProvider from "./Context/PropertyAppContext";

const App = ()=> {
  return (
    <>
      <BrowserRouter>
      <PropertyAppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/paymentPage" element={<PaymentPage/>}/>
          <Route path="/succesPay" element ={<SuccesPayPage/>}/>
        </Routes>
        </PropertyAppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
