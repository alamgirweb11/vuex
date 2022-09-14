<template>
  <div class="container">
    <h3 class="subject-heading">State</h3>
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

     <h3 class="subject-heading">Getters</h3>
     <table width="50%" cellspacing="0" border="1" cellpadding="4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, id) in students" :key="id">
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td v-if="student.status === true">Active</td>
            <td v-else>Inactive</td>
            <td><button @click="removeStudent(id)">Delete</button></td>
          </tr>
          <tr>
            <td>Total Students: {{ total_students }}</td>
            <td>Active Students: {{ active_students }}</td>
            <td>Inactive Students: {{ inactive_students }}</td>
          </tr>
        </tbody>
     </table>
     <h5>First Boy Info:
              <pre>
                ID: {{ firstBoyInfo.id }}
                Name: {{ firstBoyInfo.name }}
                Age: {{ firstBoyInfo.age }}
            </pre>
       </h5>
       <h3 class="subject-heading">Mutations</h3>
       <div>
         <h4>{{ greetings }}</h4>
          <button @click="changeGreetings()" class="default-btn">Update Greetings</button>
       </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      defaultCount: 5,
      increase: 2,
      decrease: 2,
    };
  },

  computed: {
    ...mapState([
       "msg", "count"
     ]),
      updateValue (state) {
      return state.count + this.defaultCount;
    },
    greetings(state){
       return this.$store.state.greetings
    },
    // getters
    students(){
         return this.$store.getters.all_students
    },
    ...mapGetters([
        'total_students', 'active_students', 'inactive_students'
    ]),
    firstBoyInfo(){
         return this.$store.getters.getIdWiseStudentInfo(1)
    },

    // mutations
    ...mapMutations([
        
    ])
  },
  methods: {
    increment(){
           return this.$store.state.count += this.increase
       },
    decrement(){
          return this.$store.state.count -= this.decrease
    },

    // mutations
    changeGreetings(){
         this.$store.commit('changeGreetings')
    },

    // actions
    removeStudent(studentId){
         this.$store.dispatch('removeStudentRecord', studentId)
    }
   
  },
};
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
.subject-heading{
     border-bottom: 1px solid #000;
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
.default-btn{
  background-color: #484948f5;
  color: #eeeeee;
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: .8rem;
  cursor: pointer;
  margin: 0 10px;
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
