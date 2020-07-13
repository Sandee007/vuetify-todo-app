<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator=" {on, attrs} " > 
      <v-btn depressed class="primary"
        v-bind="attrs"
        v-on="on"
       > 
        Add New Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="primary--text">Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" 
          v-model="title" 
          prepend-icon="mdi-folder"
          :rules="inputRules"
          > </v-text-field>
          <v-textarea label="About Project" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

          <v-menu>
            <template v-slot:activator="{on, attrs}"> 
              <v-text-field v-bind="attrs" v-on="on" label="Due date" prepend-icon="mdi-calendar" v-model="formattedDate" readonly :rules="inputRules"></v-text-field>
            </template>
            <v-date-picker v-model="date" > </v-date-picker>
          </v-menu>
            <v-spacer></v-spacer>
          <v-btn depressed class="primary mx-0 mt-3 " @click="submit" :loading="loading">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    
  </v-dialog>
</template>

<script>
import moment from 'moment'
import db from '@/firebase'

export default {
  data(){
    return{
      title: '',
      content: '',
      date: null,
      inputRules:[
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit(){
      if(this.$refs.form.validate()){
        // console.log(this.title, this.content)
        this.loading = false;

        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.date).format('Do MMM YYYY'),
          person: 'Batman',
          status: 'ongoing'
        }
        db.collection('projects').add(project)
          .then(() => {
            console.log('added to db')
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded');
          })

      }
      
    }
  },
  computed:{
    formattedDate(){
      return this.date ? moment(this.date).format('Do MMM YYYY') : ''
    }
  }
}
</script>

<style>

</style>