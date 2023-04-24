import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pages from "./pages/Pages";
// import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Sdata from "./components/shops/Sdata";
import MyOrder from "./components/order.js/myOrder";
import CustomerSignIn from "./pages/CustomerSignIn/CustomerSignIn";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import CartError from "./common/Cart/CartError";
import CusLogin from "./pages/CustomerSignIn/CusLogin";
import SingleProduct from "./components/singleProduct/SingleProduct";

import Home from "./pages/poornaka/Home";
import AdminDashboard from "./pages/poornaka/AdminDashboard";
import AdminLogin from "./pages/poornaka/AdminLogin";
import EmployeeLogin from "./pages/poornaka/EmployeeLogin";
import EmployeeDashboard from "./pages/poornaka/EmployeeDashboard";
import AddUser from "./pages/poornaka/AddUser";
import EditUser from "./pages/poornaka/EditUser";
import Profile from "./pages/poornaka/Profile";
import ViewAttendance from "./pages/poornaka/ViewAttendance";


function App() {
  //Step 1 :
  // const { productItems } = Data;
  // const { shopItems } = Sdata;

  // //Step 2 :
  // const [CartItem, setCartItem] = useState([]);

  // //Step 4 :
  // const addToCart = (product) => {
  //   const productExit = CartItem.find((item) => item.id === product.id);

  //   if (productExit) {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItem([...CartItem, { ...product, qty: 1 }]);
  //   }
  // };

  // // Stpe: 6
  // const decreaseQty = (product) => {
  //   const productExit = CartItem.find((item) => item.id === product.id);

  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id));
  //   } else {
  //     setCartItem(
  //       CartItem.map((item) =>
  //         item.id === product.id
  //           ? { ...productExit, qty: productExit.qty - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };

  // //remove cart item
  // const removeCart = (product) => {
  //   setCartItem(CartItem.filter((item) => item.id !== product.id));
  // };

  const customer = useSelector((state) => state.customer.currentCustomer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/myorder"
            exact
            element={
              <MyOrder
              // CartItem={CartItem}
              />
            }
          ></Route>
          <Route
            path="/"
            exact
            element={
              <Pages
              // shopItems={shopItems}
              // CartItem={CartItem}
              // addToCart={addToCart}
              />
            }
          ></Route>

          
           <Route
            path="/cart"
            exact
            element={
              // <Cart
              // // shopItems={shopItems}
              // // CartItem={CartItem}
              // // decreaseQty={decreaseQty}
              // // removeCart={removeCart}
              // // addToCart={addToCart}
              // // setCartItem={setCartItem}
              // />

              customer ? <Cart /> : <CartError />
            }
          ></Route>
          <Route
            path="/singleProduct/:id"
            exact
            element={<SingleProduct />}
          ></Route>
          <Route
            path="/customerSignIn"
            exact
            element={<CustomerSignIn />}
          ></Route>
          {/* <Provider> */}

          <Route
            path="/cusLogin"
            exact
            element={
              // <Provider store={store}>
              customer ? <Navigate replace to="/" /> : <CusLogin />
            }
          ></Route>
          {/* </Provider> */}


          {/* poornaka */}
          <Route path="/adminAndEmployee" exact element={<Home />} />
          <Route path="/admin" exact element={<AdminLogin />} />
          <Route path="/adminDashboard" exact element={<AdminDashboard />} />
          <Route path="/employee" exact element={<EmployeeLogin />} />
          <Route path="/employeeDashboard" exact element={<EmployeeDashboard />} />
          <Route path="addUser" exact element={<AddUser />} />
          <Route path="editUser" exact element={<EditUser />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/viewAttendance" exact element={<ViewAttendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
