<template>
  <div class="hello">
      <div class="container">
          <div class="mt-5">
            <table class="w-100">
                <tr class="font-weight-bold">
                    <td class="text-center">
                      Product 
                    </td>
                    <td class="text-center">  
                      Price 
                    </td>
                    <td class="text-center">  
                      Cost
                    </td>
                    <td class="text-center">  
                    Amount
                    </td>
                    <td>
                  

                    </td>
                    <td>
                    </td>
                </tr>
                <tr v-for="(item,index) in products" :key="index">
                  <td class="text-center">
                    {{item.productName}}
                  </td>
                  <td  class="text-center">
                    {{item.price}}
                  </td>
                  <td  class="text-center">
                    {{item.cost}}
                  </td>
                  <td v-if="item.amount > 0"  class="text-center">
                    {{item.amount}}
                  </td>
                  <td v-else  class="text-center">
                    หมด
                  </td>
                  <td  class="text-center">
                      <router-link :to='{name:"editProduct",params:{product_id:item._id}}'>
                        <i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:18px;"></i>
                      </router-link>
                  </td>
                  <td  class="text-center">
                    <i class="fa fa-trash" aria-hidden="true" @click="deleteProduct(item,item._id)" ></i>

                    <!-- <button type="button" class="btn btn-danger" @click="deleteProduct(item,item._id)">ลบ</button> -->
                  </td>
                </tr>
            </table>
            
          </div>
          <div class="row justify-content-center mt-5">
                <router-link :to='{ name:"addProduct" }' >
                  <button type="button" class="btn btn-danger">
                    เพิ่มสินค้า
                  </button>
                </router-link>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
     products: []
    }
  },
  methods:{
    deleteProduct(item,id){
      axios.delete('http://localhost:8080/stocks/'+id)
      .then((response)=>{

         // window.location.reload()
         this.products = this.products.filter((product)=>{
           return product !== item 
         })
          console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log(id)
    }
  },
  mounted(){
    axios.get('http://localhost:8080/stocks')
    .then((response)=>{
      console.log(response.data)
      
      response.data.forEach(
        element => this.products.push(element)
      );

      console.log(this.product)
      
    })
    .catch((err)=>{
      console.log("error"+err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a:hover{
 text-decoration: none;
}
.btn{
  display:block;
  margin:0 auto;
}
tr:nth-child(even) {
  background: #bab3b34a;
}
tr td{
  padding:8px;
}
td .fa-trash{
  cursor:pointer;
  font-size:18px;
}
</style>
