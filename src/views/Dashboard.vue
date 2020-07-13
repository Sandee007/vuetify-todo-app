<template>
  <div class="dashboard">
    <h1 class="subheading primary--text">Dashboard</h1>
    <v-container class="my-5">

      <v-row class="mb-3">
        <v-btn disabled small class="mr-5"  >Order :</v-btn>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small outlined color="grey" class="mr-3" @click="sortBy('title')"      v-bind="attrs"
            v-on="on">
            <v-icon left >mdi-folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          </template>
          <span>Order by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small outlined color="grey" @click="sortBy('person')" v-bind="attrs"
            v-on="on">
              <v-icon left >mdi-account</v-icon>
              <span class="caption text-lowercase"> by person</span>
            </v-btn>
          </template>
          <span>Order by person</span>
        </v-tooltip>

       
        
      </v-row>

      <v-card tile v-for="project in projects" :key="project.title">

        <v-row  :class="`pa-3 project ${project.status}`" >
          <v-col md="6" sm="12" xs="12">
            <div class="caption grey--text" >Project Title</div>
            <div> {{project.title}} </div>
          </v-col>
          <v-col md="2" sm="4" xs="6" >
            <div class="caption grey--text" >Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col md="2" sm="4" xs="6" >
            <div class="caption grey--text" >Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col md="2" sm="4" xs="2" >
            <!-- <div> -->
              <v-chip small :class="` ${project.status} white--text caption my-2`" > {{project.status}} </v-chip>
            <!-- </div> -->
          </v-col>
        </v-row>
        <v-divider></v-divider>

      </v-card>

    </v-container>
  </div>
</template>

<script>
import db from '@/firebase'

export default {
  created(){
    db.collection('projects').onSnapshot(response => {
      const changes = response.docChanges()

      changes.forEach(change => {
        if(change.type == 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  data(){
    return{
      projects:[
        // { title: 'Design a new website', person: 'Sheldon', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Code up the homepage', person: 'Howard', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Design video thumbnails', person: 'Penny', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a community forum', person: 'Leonard', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => {
        return a[prop] < b[prop] ? -1 : 1
      })
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background:#3cd1c2 !important ;
}
.v-chip.ongoing{
  background:orange !important;
}
.v-chip.overdue{
  background:tomato !important;
}
</style>