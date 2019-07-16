import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        message: "Hello, From Vuex",
        user: [
            {
                id:1,
                name: "Prerna",
                age : 22
            },
            {
                id:2,
                name: "Pragti",
                age : 41
            }
        ]

    },

    mutations: {

        updateMessage(state){
            state.message = "Vuex update from message"
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
                .user
                .filter(user=>user.age>30);
        }
    }

})




import App from './App.vue';



new Vue({
    el: '#hello',
    store,
    render: h => h(App),
});
