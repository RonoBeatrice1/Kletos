// App.jsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerAuth from "./pages/customerauth";
import HomePage from "./pages/homepage";
import ProductDetails from "./pages/ProductDetails";
import ShoppingcartPage from "./pages/shoppingcart";
import ProductListPage from "./pages/productlisting";
import FAQPage from "../src/pages/FAQPage";
import ResetPasswordComponent from "../src/components/customerauthcomponents/ResetPasswordComponent";

function App() {
  return (
    <Router>
      <main className="app">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/auth" element={<CustomerAuth />} />
          <Route
            path="/productdetails/:productName"
            element={<ProductDetails />}
          />
          <Route path="/shoppingcart" element={<ShoppingcartPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/reset-password"
            element={<ResetPasswordComponent />}
          />{" "}
          {/* Route for ResetPasswordComponent */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
