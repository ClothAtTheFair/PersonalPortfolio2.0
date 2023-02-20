<template>
    <div class="home">
      <PersonalProjects/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PersonalProjects from '@/components/PersonalProjects.vue'
  
  export default {
    name: 'ProjectView',
    components: {
      PersonalProjects
    }
  }
  </script>