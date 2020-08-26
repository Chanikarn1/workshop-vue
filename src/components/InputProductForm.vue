<template>
    <div class="container">
        <!-- <form> -->
            <div class="row justify-content-center">
                <div class="card p-3">  
                    
                <label>ชื่อสินค้า</label>
                <input type="text" class="input-group-text"  v-model="product.productName" @change="editInput()">
                <label>ต้นทุน</label>
                <input type="text" class="input-group-text" v-model="product.cost" @change="editInput()">
                <label>ราคา</label>
                <input type="text" class="input-group-text"  v-model="product.price" @change="editInput()">
                <label>จำนวน</label>
                <input type="text" class="input-group-text" v-model="product.amount" @change="editInput()">
                <label>SKU</label>
                <input type="text" class="input-group-text" v-model="product.sku" @change="editInput()">
                <!-- <label>ชื่อสินค้า</label>
                <input type="text" class="input-group-text" v-model="product.productName">
                <label>ต้นทุน</label>
                <input type="text" class="input-group-text" v-model="product.cost" >
                <label>ราคา</label>
                <input type="text" class="input-group-text" v-model="product.price" >
                <label>จำนวน</label>
                <input type="text" class="input-group-text" v-model="product.amount">
                <label>SKU</label>
                <input type="text" class="input-group-text" v-model="product.sku" > -->

                </div>
                {{product}}
             <!-- {{productName}} -->
            </div>
           
        <!-- </form> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'InputProductForm',
    props:['title','product'],
    data(){
        return{
           // product:this.product,
           // productName:null,
            // cost:this.product.cost,
            // price:this.product.price,
            // amount:this.product.amount,
            // sku:this.product.sku

        }
    },
    methods:{
        editInput(){
            this.$emit('editInput',{'editInput':this.product})
        }
    },
    mounted(){
        console.log(this.product)
    }
    
    

    
}
</script>
<style scoped>

</style>

