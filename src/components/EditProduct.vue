<template>
    <div>

        <form @submit.prevent="editProduct">
            <InputProductFrom v-bind:product="product" @editInput="changeInput" />
            <div class="row justify-content-center">
                    <button type="submit" class="btn btn-danger" >แก้ไข</button>
            </div>
            {{product}}
        </form>
    </div>
</template>
<script>
import InputProductFrom from './InputProductForm'
import axios from 'axios'
export default {
    name: 'EditProduct',
    components:{
        InputProductFrom
    },
    data(){
        return{
            product:{},
            productName:null,
            cost:null,
            price:null,
            amount:null,
            sku:null
        }
    },
    methods:{
        editProduct(){
            axios.put('http://localhost:8080/stocks/'+this.$route.params.product_id,{
                productName: this.product.productName,
                price :this.product.price,
                amount:this.product.amount,
                sku: this.product.sku,
                cost: this.product.cost
            })
            .then((response)=>{

            })
            .catch((err)=>{
                console.log(err)
            })
        },
        changeInput(payload){
            this.product= payload.editInput
            
        }
    },
    created(){
        axios.get('http://localhost:8080/stocks/'+this.$route.params.product_id)
        .then((response)=>{
            console.log(response.data)
            this.product = response.data
            console.log(this.product)
           
        })
        .catch((err)=>{
            console.log(err)
        })
    
        
  }
}
</script>
<style scoped>

</style>