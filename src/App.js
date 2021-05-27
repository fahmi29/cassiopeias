import React, { Component, Fragment, lazy, Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
import './App.css';
const Landing = lazy(() => import('./component/Landing'))
const Catalog = lazy(() => import('./component/Catalog/Catalog'))
const Detail = lazy(() => import('./component/Detail/Detail'))
const Login = lazy(() => import('./component/Login'));
const Chart = lazy(() => import('./component/Chart/Charts'));
const Store = lazy(() => import('./component/Store/Store'));
const Profile = lazy(() => import ('./component/Profile/Profile'));
const AllProduct = lazy(() => import('./component/AllProduct/AllProduct'));
const Blog = lazy(() => import('./component/Blog/Blog'));
const DetailBlog = lazy(() => import('./component/Blog/DetailBlog'));
const Contact = lazy(() => import('./component/Contact/Contact'));
const MyOrders = lazy(() => import('./component/MyOrders/MyOrders'));
const Dashboard = lazy(() => import('./component/Dashboard/Dashboard'));
const User = lazy(() => import('./component/User/User'));
const AddUser = lazy(() => import('./component/User/Add/AddUser'));
const Stores = lazy(() => import('./component/Stores/Stores'));
const AddStores = lazy(() => import('./component/Stores/Add/AddStore'));
const Product = lazy(() => import('./component/Product/Product'));
const AddProduct = lazy(() => import('./component/Product/Add/AddProduct'));
const Payment = lazy(() => import('./component/Transaction/Payment'));
const AddPayment = lazy(() => import('./component/Transaction/AddPayment'));
const AdmBlog = lazy(() => import('./component/AdmBlog/Blogs'));
const AddBlog = lazy(() => import('./component/AdmBlog/Add/AddBlogs'));

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Suspense fallback={<></>}>
            <Switch>
              <Route exact path="/" component={Landing}></Route>
              <Route path="/catalog" component={Catalog}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/chart" component={Chart}></Route>
              <Route path="/store" component={Store}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/allproduct" component={AllProduct}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/detailblog/:id" component={DetailBlog}></Route>
              <Route path="/Contact" component={Contact}></Route>
              <Route path="/myorders" component={MyOrders}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/adduser" component={AddUser}></Route>
              <Route path="/stores" component={Stores}></Route>
              <Route path="/addstores" component={AddStores}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/addproduct" component={AddProduct}></Route>
              <Route path="/payment" component={Payment}></Route>
              <Route path="/addpayment" component={AddPayment}></Route>
              <Route path="/admblog" component={AdmBlog}></Route>
              <Route path="/addblog" component={AddBlog}></Route>
            </Switch>
          </Suspense>
        </Router>
      </>
    );
  }
}

export default App;
