<template>
      <div class="container">
         <h3 class="msg">{{ msg }}</h3>
      </div>
</template>

<script>

export default {
  name: 'App',
  data(){
       return{
          msg: this.$store.state.msg,
       }
  },
}
</script>
<style scoped>
  .msg{
     text-align: center;
  }
</style>