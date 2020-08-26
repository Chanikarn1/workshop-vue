import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddProduct from '@/components/AddProduct'
import EditProduct from '@/components/EditProduct'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addProduct',
      name : 'addProduct',
      component:  AddProduct
    },
    {
      path: '/editProduct/:product_id',
      name: 'editProduct',
      component : EditProduct
    }

   
  ]
})
