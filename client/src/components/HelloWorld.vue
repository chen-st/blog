<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <el-button type="" @click='delet'>deletUser</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    delet(id){
       this.axios.get('http://localhost:3000/api/dd',{
         params:{
           
         }
       }).then(data=>{
         console.log(11)
       })
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
