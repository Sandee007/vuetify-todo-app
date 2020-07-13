<template>
  <div class="home">
    <h1>Home Page</h1>
    <p class="red white--text font-italic" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto voluptates officia obcaecati minus nesciunt praesentium dolore in dicta sunt explicabo, et excepturi saepe accusantium quae dolorem animi voluptate adipisci!</p>
    <p class="pink lighten-4 red--text  text--darken-4 text-uppercase" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim fugit inventore ut maxime minus velit iusto natus nisi quis consequatur sint labore repudiandae eveniet vero, quo culpa molestiae debitis.</p>
    <h1 class="display-4" >Display-4</h1>
    <h1 class="display-1">Display-1</h1>
    <h1>h1</h1>
    <p class="headline"> This is a Headline </p>
    <p class="subheading">This is a subheading</p>
    <p class="caption">This is a caption</p>

    <v-btn class="pink white--text mx-2">class="pink white--text mx-2"</v-btn>
    <v-btn dark color="pink text-lowercase">dark color="pink text-lowercase""</v-btn>
    <v-btn depressed dark color="blue" >depressed dark color="blue"</v-btn>
    <v-btn  small rounded depressed color="pink white--text" > mdi icons 
      <v-icon  small right >mdi-google</v-icon>
    </v-btn>

    <v-btn class="hidden-md-and-down">Hidden on md and down</v-btn>
    <v-btn class="hidden-md-and-up">Hidden on md and up</v-btn>
    <v-btn class="hidden-md-only">Hidden on md only</v-btn>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
