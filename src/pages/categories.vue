
<style scoped lang="sass">
.c-grid
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  max-width: 1200px
  margin: auto
</style>

<template>
  <section>
    <app-header></app-header>
    <!-- <counter></counter> -->
    <div class="c-grid">
    <!-- <div class="row gutters auto"> -->
      <category v-for="c in categoriesList" :key="c.id" :payload="c" @select="select" tabindex="0"></category>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
// import counter from '@/components/counter.e'
import category from '@/components/category.e'
import appHeader from '@/components/header.e'

export default {
  name: 'hello',
  components: {
    category,
    appHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: mapGetters([
    'categoriesList'
  ]),
  methods: {
    select (item) {
      console.info('item', item)
    }
  }
}
</script>
