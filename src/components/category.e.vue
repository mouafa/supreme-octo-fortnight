<style scoped lang="scss">

</style>

<template>
  <section class="category">
    <button class="button outline large w100" @click="select(title)">{{title}}</button>
  </section>
</template>

<script>
export default {
  name: 'category',
  props: {
    // type check plus other validations
    title: {
      type: Number,
      required: true
    }
  },
  methods: {
    select (t) {
      this.$emit('select', t)
    }
  }

}
</script>
