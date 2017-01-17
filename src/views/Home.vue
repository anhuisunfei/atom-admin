<template>
<div class="content has-text-centered">
  <p>
    <img width="200" src="../assets/logo.png" :alt="description">
  </p>



  <p>
    <strong>{{ description }}</strong>,
  
  </p>

  <p>Supports Vue 2.0 and Bulma 0.2!</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      description: 'Hi Vuejs!',
      name: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
.is-title {
    text-transform: capitalize;
}
</style>
