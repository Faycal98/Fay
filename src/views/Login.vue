<template>
    <v-app id="inspire">
       <v-main>
          <v-container fluid fill-height class="">
             <v-layout align-center justify-center>
                <v-card class="elevation-12 w-1/3">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Login form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="mdi-account"
                               name="login"
                               label="Login"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="mdi-lock"
                               name="password"
                               label="Password"
                               type="password"
                            ></v-text-field>
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" @click="login">Login</v-btn>
                      </v-card-actions>
                   </v-card>
             </v-layout>
          </v-container>
       </v-main>
    </v-app>
 </template>
 
 <script>
 export default {
    name: 'Login',
    props: {
       source: String,
    },
    methods:{
        login(){
            this.$store.dispatch('login')
            this.$router.push('/')
        }
    }
 };
 </script>
 
 <style></style>
 