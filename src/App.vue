<template>
      <div class="container">
         <h3 class="msg">{{ msg }}</h3>
         <br>
         <h2 :class="[{ 'text-black':count === 0}, {'text-success' : count>0},  {'text-danger' : count<0}]">{{ count }}</h2>
          <button class="increment-btn" @click="increment()">+</button>  <button class="decrement-btn" @click="decrement()">-</button>
      </div>
</template>

<script>

export default {
  name: 'App',
  data(){
       return{
          msg: this.$store.state.msg,
          count: this.$store.state.count,
       }
  },
  methods:{
         increment(){
             return this.count++
         },
         decrement(){
              return this.count-- 
         }
  }
}
</script>
<style scoped>
  .container{
      width: 80%;
      margin: 0 auto;
  }
  .msg{
     text-align: left;
  }
  .text-gray{
       color: #000;
  }
  .text-success{
      color: #15ec6ff5;;
  }
  .text-danger{
      color: #f05902f5;
  }
  .increment-btn{
        background-color: #15ec6ff5;
        color: #fff;
        padding: 5px 10px;
        border: none;
        outline: none;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        margin: 0 10px;
  }
  .decrement-btn{
        background-color: #f05902f5;
        color: #fff;
        padding: 5px 10px;
        border: none;
        outline: none;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        margin: 0 10px;
  }
</style>