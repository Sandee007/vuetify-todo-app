<template>
  <div class="team">
    <h1 class="subheading primary--text">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col sm="6" md="4" lg="3" 
          v-for="person in team" :key="person.name"
        >
        <v-card  class="text-center ma-3" >
          <v-avatar class="ma-5">
            <img :src="person.avatar" >
          </v-avatar>
          <v-card-subtitle> {{person.name}} </v-card-subtitle>
          <v-card-text > {{person.role}} </v-card-text>
          <v-card-actions>
            <v-btn depressed rounded >
              <v-icon small left>mdi-message</v-icon>
              <span> message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      team:[
        {name:'Sheldon', role:'Physicist', avatar:'/avatar-1.png'},
        {name:'Leonard', role:'Physicist', avatar:'/avatar-2.png'},
        {name:'Howard', role:'Engineer', avatar:'/avatar-5.png'},
        {name:'Raj', role:'Astrophysicist', avatar:'/avatar-4.png'},
        {name:'Penny', role:'Meh', avatar:'/avatar-3.png'},
      ]
    }
  }
}
</script>
  
<style>

</style>
