<template>
    <div id="hello">

            <h1>{{ msg }}</h1>
            <button v-on:click="updateMessage"> Update Message</button>
        <ul>
            <li v-for="user in getUser" v-bind:key="user.id">
                {{ user.name}}
            </li>
        </ul>



    </div>
</template>

<script>
    export default {
        name: "Helloworld",

        computed: {
            msg(){
                return this.$store.state.message;
            },

            getUser() {
                return this.$store.getters.getUser;
            }
        },

        methods: {
            updateMessage(){
                this.$store.dispatch("updateMessage");
            }

        }

    }




</script>