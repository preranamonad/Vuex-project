<template>
    <div id="hello">

            <h1>{{ message }}</h1>
            <button v-on:click="updateMessage"> Update Message</button>
        <button v-on:click="addUser({ id:3, name:'Tanya', age:45})">Add user</button>
        <ul>
            <li v-for="user in getUser" v-bind:key="user.id">
                {{ user.name}}
            </li>
        </ul>



    </div>
</template>

<script>

    import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

    export default {
        name: "Helloworld",

        computed: {

            ...mapState(["message", "users"]),
            ...mapGetters(["getUser"])

        },

        methods: {

            ...mapActions(["updateMessage"]),
            ...mapMutations(["addUser"])
        }

    }




</script>