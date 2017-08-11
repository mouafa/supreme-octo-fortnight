

<template>
<section>
  tdaa
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
