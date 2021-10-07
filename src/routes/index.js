import Login from "../components/Login.jsx";
import PageNotFound from "../components/PageNotFound.jsx";
import ProductList from "../components/ProductList.jsx";

export const appRoutes = [
    {
      path: "/login",
      name:"login",
      fullMatch:true,
      component: Login
    },
    {
      path: "/productList",
      name:"productlist",
      fullMatch:true,
      component: ProductList
    },
    {
      path: "/**",
      name:"pagenotfound",
      fullMatch:false,
      component: PageNotFound
    }
  ];