<template>
    <div class="home">
      <PersonalProjects/>
    </div>
  </template>
<script>
import PersonalProjects from '@/components/PersonalProjects.vue';

export default {
  name: 'ProjectView',
  components: {
    PersonalProjects,
  },
};
</script>
