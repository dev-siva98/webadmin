import React from "react"
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/ProductEdit";
// import CustomDataProvider from "./components/CustomDataProvider";

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:9000')}>
      <Resource name="products" list={ProductList} create={AddProduct} edit={EditProduct} />
    </Admin>
  );
}

export default App;
