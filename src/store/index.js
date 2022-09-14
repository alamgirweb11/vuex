import { createStore, storeKey } from 'vuex'

export default createStore({
    state: {
        msg: 'Hello World!',
        count: 0,
        greetings: 'Hello! Jhon.',
        students: [
            { id: 1, name: 'Abir Ahmed', age: 17, status: true },
            { id: 2, name: 'Rajon Mia', age: 18, status: true },
            { id: 3, name: 'Ashor Ahmed', age: 17, status: false },
            { id: 4, name: 'Avoya Ahmed', age: 16, status: true },
            { id: 5, name: 'Rafa Ahmed', age: 18, status: false },
            { id: 6, name: 'Fahat Ahmed', age: 16, status: true },
        ],
    },
    getters: {
        all_students(state) {
            return state.students
        },
        total_students(state) {
            return state.students.length
        },
        active_students(state) {
            return state.students.filter(student => student.status).length
        },
        inactive_students(state) {
            return state.students.filter(student => student.status === false).length
        },
        getIdWiseStudentInfo: (state) => (studentId) => {
            return state.students.find(student => student.id === studentId)
        }
    },
    mutations: {
        changeGreetings(state) {
            state.greetings = state.greetings + ' Good Evening!'
        },
        REMOVE_STUDENT_RECORD(state, studentId){
              state.students.splice(studentId, 1)
        }
    },
    actions:{
        removeStudentRecord({commit}, studentId){
               commit('REMOVE_STUDENT_RECORD', studentId)
          }
    },
})