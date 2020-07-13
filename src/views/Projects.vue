
<template>
  <div class="projects">
    <h1 class="subheading primary--text">My Projects</h1>

    <v-container class="my-5">
      <v-card tile v-for="project in myProjects" :key="project.title">
          <v-card-title class="py-1">{{ project.title }}</v-card-title>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
    </v-container>
    
  </div>
</template>

<script>
import db from '@/firebase'

export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Batman' 
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
      })
    })
  }
}
</script>

