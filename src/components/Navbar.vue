<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="primary"
      top
    >
      Project added successfully

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
          
        >
          <span class="white--text">Close</span>
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar 
      app
      color="blue"
      dark
      :src="bg"
    > 

      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="font-weight-bold display-3 text-uppercase" > Todo</span>
        <span class="caption"> With </span>
        <span class="heading" >Vuetify</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu 
        offset-y 
        rounded="lg"
        origin="center center"
        transition="scale-transition"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          text 
          rounded
          v-bind="attrs"
          v-on="on"
        >
          Menu
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
         v-for="(item,index) in dashboardItems"  
         :key="index"
         route :to="item.route" 
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn rounded dark text > Sign out
        <v-icon right> mdi-exit-to-app </v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      app
      class="blue"
      v-model="drawer"
      :src="bg"
    >
      <v-row class="justify-space-around mt-5" >
        <v-avatar >
          <img src="/avatar-1.png" alt="">
        </v-avatar>
      </v-row>

      <v-row class="justify-space-around mt-5">
        <Popup @projectAdded="snackbar = true" > </Popup>
      </v-row>
   
      <v-list rounded >
        <v-list-item ripple exact-active-class
        v-for="(item,index) in dashboardItems"  :key="index"
        router :to="item.route"
        >

          <v-list-item-icon>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text" >{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

  </div>
  
</template>

<script>
import Popup from './Popup'

export default {
  components:{
    Popup
  },
  data() {
    return {
      drawer:false,
      background: true,
      dashboardItems: [
        {text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
        {text: 'My Projects', icon: 'mdi-folder', route: '/projects'},
        {text: 'Team Members', icon: 'mdi-account-group', route: '/team'},
      ],
      snackbar: false
    }
  },
  computed:{
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    }
  }
}
</script>

<style>

</style>