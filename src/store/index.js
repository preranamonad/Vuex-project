import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);

const store = new Vuex.Store({




    state: {
        message: "Hello, From Vuex",
        users: [
            {
                id:1,
                name: "Prerna",
                age : 41
            },
            {
                id:2,
                name: "Pragti",
                age : 43
            }
        ]

    },

    mutations: {

        updateMessage(state){
            state.message = "Vuex update from message"
        },

        addUser(state,payload){
            state
                .users
                .push(payload)
        }


    },

    actions: {
        updateMessage (context) {
            context.commit('updateMessage');
        }

    },


    getters: {

        getUser(state){
            return state
                .users
                .filter(user=>user.age>30);
        }
    }

})

export default store;

