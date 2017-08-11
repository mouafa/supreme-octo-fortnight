
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<template>
  <section>
    <app-header></app-header>
    <!-- <counter></counter> -->
    <div class="">
      <!-- <category v-for="c in categoriesList" class="col col-4" :title="c.name" @select="select"></category> -->
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
