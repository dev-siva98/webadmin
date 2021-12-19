import React from "react"
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ProductList from "./components/Products/ProductList";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import UsersList from "./components/Users/UsersList";
import OrdersList from "./components/Orders/OrdersList";
import AddUser from "./components/Users/AddUser";
import AddOrders from "./components/Orders/AddOrders";


function App() {
  return (
    <Admin dataProvider={restProvider('http://192.168.43.105:9000')}>
      <Resource name="products" list={ProductList} create={AddProduct} edit={EditProduct} />
      <Resource name="users" list={UsersList} create={AddUser}/>
      <Resource name="orders" list={OrdersList} create={AddOrders} />
    </Admin>
  );
}

export default App;
