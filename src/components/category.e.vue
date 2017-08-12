<style scoped lang="sass">
$transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
.category
  max-width: 200px
  min-height: 160px
  // background-color: blue
  margin: 24px
  border-radius: 6px
  padding: 2px
  display: flex
  flex: 1 0 auto
  flex-shrink: 0
  flex-basis: 100%
  cursor: pointer
  transition: $transition
  // filter: grayscale(100%)
  &--content
    flex: 1
    padding: 12px
    font-size: 1em
    position: relative
    &:before, &:after
      content: ''
      position: absolute
    &:before
      // background-color: rgba(255, 255, 255, .97)
      background-color: #FFF
      opacity: .97
      // box-shadow: 0 0 0 2px rgba(255,255,255,.3)
      top: 0
      right: 0
      bottom: 0
      left: 0
      border-radius: 4px
      transition: $transition
      z-index: 1
    &:after
      top: 0
      right: 0
      bottom: 0
      left: 0
      border-radius: 4px
      transition: $transition
      box-shadow: 0 14px 28px rgba(0,0,0,0.25)
      transform: perspective(100px) translate3d(0, 0, -20px)
      z-index: 0
  &--title
    position: absolute
    text-align: right
    right: 8px
    bottom: 8px
    z-index: 1
    color: #000
    font-weight: 600
  .icons
    position: absolute
    color: #fff
    font-size: 77px
    z-index: 1
    opacity: .4
    transition: $transition
  &:hover, &:focus
    transform: perspective(1000px) translate3d(0,0,100px)
    // filter: grayscale(0%)
    .category--content
      &:before
        opacity: 1
      &:after
        transform: perspective(100px) translate3d(0, 0, 0)
    .icons
      opacity: .8
  &:active
    transform: perspective(1000px) translate3d(0,0,50px)
    // filter: grayscale(0%)
    .category--content
      &:before
        opacity: .99
      &:after
        transform: perspective(100px) translate3d(0, 0, -10px)
    .icons
      opacity: .8


</style>

<template>
  <section class="category" :style="style" @click="select(payload)">
    <div class="category--content">
      <i class="icons" :class="payload.icon" :style="{color: payload.colors[0]}"></i>
      <!-- <i class="icons" :class="payload.icon"></i> -->
      <span class="category--title">{{payload.name}}</span>
    </div>
    <!-- <button class="button outline large w100" @click="select(title)">{{title}}</button> -->
  </section>
</template>

<script>
export default {
  name: 'category',
  props: {
    // type check plus other validations
    payload: {
      // type: Number,
      required: true
    }
  },
  computed: {
    style () {
      return {
        // 'background-color': this.payload.colors[0],
        background: `linear-gradient(120deg, ${this.payload.colors.join(',')})`
      }
    }
  },
  methods: {
    select (t) {
      this.$emit('select', t)
    }
  }

}
</script>
