<template>
    <div>
      <Header v-if="showNavbar"/>
      <router-view />
  
    </div>  
  
</template>

<script>
import Header from './components/Header.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const showNavbar = computed(() => route?.meta?.showNavbar !== false)

export default{
  name: 'App',
  components: {
    Header
  }
}
</script>
