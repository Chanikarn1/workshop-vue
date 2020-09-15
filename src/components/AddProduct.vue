<template>
    <div class="container">
        <form @submit.prevent="addProduct">
            <div class="row justify-content-center mt-5">
                <div class="card p-3">  
                    
                <label>ชื่อสินค้า</label>
                <input type="text" class="input-group-text" v-model="productName">
                <label>ต้นทุน</label>
                <input type="text" class="input-group-text" v-model="cost">
                <label>ราคา</label>
                <input type="text" class="input-group-text" v-model="price">
                <label>จำนวน</label>
                <input type="text" class="input-group-text" v-model="amount">
                <label>SKU</label>
                <input type="text" class="input-group-text" v-model="sku">

                </div>
                {{productName}}
            </div>
            <div class="row justify-content-center mt-5">
                    <button type="submit" class="btn btn-danger">เพิ่มสินค้า</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'AddProduct',
    data(){
        return{
            productName:null,
            cost:null,
            price:null,
            amount:null,
            sku:null

        }
    },
    methods:{
        addProduct(){
           if(this.productName && this.cost && this.price && this.amount && this.sku){

               axios.post('http://localhost:8080/stocks', {
                       productName: this.productName,
                       price :this.price,
                       amount:this.amount,
                       sku: this.sku,
                       cost: this.cost
               })
               .then(function (response) {
                 
                   console.log(response);
               })
               .catch(function (error) {
                   console.log(error);
               });
               this.productName = null
               this.cost = null
               this.price  =null
               this.amount  =null
               this.sku = null
           }
           else{
               console.log("ไม่มีข้อมูล")
           }
        },
    }

    

    
}
</script>
<style scoped>

</style>

