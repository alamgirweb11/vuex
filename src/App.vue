<template>
  <div class="container">
    <h3 class="msg">{{ msg }}</h3>
    <br />
    <h2
      :class="[
        { 'text-black': updateValue === 0 },
        { 'text-success': updateValue > 0 },
        { 'text-danger': updateValue < 0 },
      ]"
    >
      {{ updateValue }}
    </h2>
    <button class="increment-btn" @click="increment">+</button>
    <button class="decrement-btn" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      defaultCount: 5,
      increase: 2,
      decrease: 2,
    };
  },
  //   computed: mapState({
  //              count: state => state.count,
  //              countAlias: 'count',
  //           }),
  computed: {
   //  ...mapState({
   //    msg: "msg",
   //    count: "count",
   //  }),
    ...mapState([
       "msg", "count"
     ]),
      updateValue (state) {
      return state.count + this.defaultCount;
    }
  },
  methods: {
    increment(){
           return this.$store.state.count += this.increase
       },
    decrement(){
          return this.$store.state.count -= this.decrease
    }
   
  },
};
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
.msg {
  text-align: left;
}
.text-gray {
  color: #000;
}
.text-success {
  color: #15ec6ff5;
}
.text-danger {
  color: #f05902f5;
}
.increment-btn {
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
.decrement-btn {
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
